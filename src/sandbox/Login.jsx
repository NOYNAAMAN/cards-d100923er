import React from "react";
import Form from "../forms/components/Form";
import Joi from "joi";
import algoMethods from "../forms/utils/algoMethods";
import useForm from "../forms/hooks/useForm";
import Input from "../forms/components/Input";

const initialLoginForm = {
  email: "",
  password: "",
};
const loginSchema = {
  email: Joi.string()
    .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: "Please enter a valid mail" })
    .required(),

  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
        "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
    })
    .required(),
};

export default function Login() {
  const { makeFirstLetterCapital } = algoMethods();
  const { data, errors, handleChange, onSubmit, handleReset, validateForm } =
    useForm(initialLoginForm, loginSchema);
  return (
    <Form
      title="login"
      onSubmit={onSubmit}
      onReset={handleReset}
      validateForm={validateForm}
    >
      <Input
        name={"email"}
        data={data}
        label={makeFirstLetterCapital("email")}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        name={"password"}
        data={data}
        label={makeFirstLetterCapital("password")}
        onChange={handleChange}
        error={errors.password}
      />
    </Form>
  );
}
