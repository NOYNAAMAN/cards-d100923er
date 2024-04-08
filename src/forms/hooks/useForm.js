import { useState, useCallback } from "react";
import Joi from "joi";

export default function useForm(initialForm, schema, handleSubmit) {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validateProperty = useCallback(
    (name, value) => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const errorMessage = validateProperty(name, value);

    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
      setErrors((prev) => {
        let obj = { ...prev };
        delete obj[name];
        return obj;
      });
    }
    console.log(typeof value);
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeCheckBox = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    const errorMessage = validateProperty(name, value);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
      setErrors((prev) => {
        let obj = { ...prev };
        delete obj[name];
        return obj;
      });
    }
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setData(initialForm);
    setErrors({});
  };

  const validateForm = () => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return false;
    return true;
  };
  const onSubmit = () => {
    const handleSubmit = (data) => {
      console.log(data);
    };
    handleSubmit(data);
  };

  return {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  };
}
