import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2).max(10),
});

export default function FormExample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    const validateObj = schema.validate(formData);
    console.log(validateObj);
  };

  return (
    <Box>
      <Box>
        <TextField
          label="first name"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <TextField
          label="last name"
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
}
