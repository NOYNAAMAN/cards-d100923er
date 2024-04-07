import React from "react";
import algoMethods from "../forms/utils/algoMethods";
import Joi from "joi";
import useForm from "../forms/hooks/useForm";
import Form from "../forms/components/Form";
import Input from "../forms/components/Input";

const initialSignupForm = {
  first: "",
  middle: "",
  last: "",
  phone: "",
  email: "",
  password: "",
  url: "",
  alt: "",
  state: "",
  country: "",
  city: "",
  street: "",
  houseNumber: 0,
  zip: 0,
  isBusiness: false,
};

const signupSchema = {
  first: Joi.string().min(2).max(256).required(),
  middle: Joi.string().min(2).max(256).allow(""),
  last: Joi.string().min(2).max(256).required(),
  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'user "phone" must be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'user "mail" must be a valid mail' })
    .required(),
  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
        'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
    })
    .required(),
  url: Joi.string()
    .ruleset.regex(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    )
    .rule({ message: "user image must be a valid url" })
    .allow(""),
  alt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number(),
  isBusiness: Joi.boolean().truthy("true").falsy("false").required(),
};

export default function SignUp() {
  const { makeFirstLetterCapital } = algoMethods();

  const { data, errors, handleChange, onSubmit, handleReset, validateForm } =
    useForm(initialSignupForm, signupSchema);

  return (
    <Form
      title={"sign up"}
      onSubmit={onSubmit}
      onReset={handleReset}
      validateForm={validateForm}
    >
      <Input
        name={"first"}
        data={data}
        label={makeFirstLetterCapital("first")}
        onChange={handleChange}
        error={errors.first}
      />
      <Input
        name={"middle"}
        data={data}
        label={makeFirstLetterCapital("middle")}
        onChange={handleChange}
        error={errors.middle}
      />
      <Input
        name={"last"}
        data={data}
        label={makeFirstLetterCapital("last")}
        onChange={handleChange}
        error={errors.last}
      />
      <Input
        name={"phone"}
        data={data}
        label={makeFirstLetterCapital("phone")}
        onChange={handleChange}
        error={errors.phone}
      />
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
      <Input
        name={"url"}
        data={data}
        label={makeFirstLetterCapital("url")}
        onChange={handleChange}
        error={errors.password}
      />
      <Input
        name={"alt"}
        data={data}
        label={makeFirstLetterCapital("alt")}
        onChange={handleChange}
        error={errors.alt}
      />
      <Input
        name={"state"}
        data={data}
        label={makeFirstLetterCapital("state")}
        onChange={handleChange}
        error={errors.state}
      />
      <Input
        name={"country"}
        data={data}
        label={makeFirstLetterCapital("country")}
        onChange={handleChange}
        error={errors.country}
      />
      <Input
        name={"city"}
        data={data}
        label={makeFirstLetterCapital("city")}
        onChange={handleChange}
        error={errors.city}
      />
      <Input
        name={"street"}
        data={data}
        label={makeFirstLetterCapital("street")}
        onChange={handleChange}
        error={errors.street}
      />
      <Input
        name={"houseNumber"}
        type="number"
        data={data}
        label={makeFirstLetterCapital("houseNumber")}
        onChange={handleChange}
        error={errors.houseNumber}
      />
      <Input
        name={"zip"}
        type="number"
        data={data}
        label={makeFirstLetterCapital("zip")}
        onChange={handleChange}
        error={errors.zip}
      />
      <Input
        name={"isBusiness"}
        data={data}
        label={makeFirstLetterCapital("isBusiness")}
        onchange={handleChange}
        type="checkbox"
        error={errors.isBusiness}
      />
    </Form>
  );
}
