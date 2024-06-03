import Joi from "joi";

const updateUserSchema = Joi.object({
  "name.first": Joi.string().min(2).max(256).required(),
  "name.middle": Joi.string().min(2).max(256).allow(""),
  "name.last": Joi.string().min(2).max(256).required(),
  phone: Joi.string()
    .regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .message('user "phone" must be a valid phone number')
    .required(),
  "image.url": Joi.string()
    .regex(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    )
    .message("user image must be a valid url")
    .allow(""),
  "image.alt": Joi.string().min(2).max(256).allow(""),
  address: Joi.object({
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number().required(),
    state: Joi.string().allow(""),
    zip: Joi.number().optional(),
  }),
});

export default updateUserSchema;
