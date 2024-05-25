import Joi from "joi";

const urlRegex = /^(https?:\/\/.+)$|(^.*\.(png|jpg|jpeg|gif|webp|svg))$/i;

const updateUserSchema = {
  phone: Joi.string()
    .ruleset.regex(/^0[0-9]{1,2}-?\s?[0-9]{7}$/)
    .rule({ message: 'card "phone" mast be a valid phone number' })
    .required(),
  imageUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card.image "url" mast be a valid url' })
    .allow(""),
  imageAlt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number(),
};

export default updateUserSchema;
