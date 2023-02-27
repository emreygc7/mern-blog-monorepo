import Joi from "joi";


export default {
  create: Joi.object({
    username: Joi.string().min(3).max(15).required().messages({
      "string.empty": `Username is required`,
      "string.min": `Username should have a minimum length of {#limit}`,
      "string.max": `Username should have a maximum length of {#limit}`,
    }),
    email: Joi.string().email().required().messages({
      "string.empty": `Email is required`,
      "string.email": `Email is invalid`,
    }),
    password: Joi.string().min(6).max(15).required().messages({
      "string.empty": `Password is required`,
      "string.min": `Password should have a minimum length of {#limit}`,
      "string.max": `Password should have a maximum length of {#limit}`,
    }),
  }),
  update: Joi.object({
    username: Joi.string().min(3).max(15).required().messages({
      "string.empty": `Username is required`,
      "string.min": `Username should have a minimum length of {#limit}`,
      "string.max": `Username should have a maximum length of {#limit}`,
    }),
    email: Joi.string().email().required().messages({
      "string.empty": `Email is required`,
      "string.email": `Email is invalid`,
    }),
    password: Joi.string().min(6).max(15).required().messages({
      "string.empty": `Password is required`,
      "string.min": `Password should have a minimum length of {#limit}`,
      "string.max": `Password should have a maximum length of {#limit}`,
    }),
  }),
  login: Joi.object({
    username: Joi.string().min(3).max(15).required().messages({
      "string.empty": `Username is required`,
      "string.min": `Username should have a minimum length of {#limit}`,
      "string.max": `Username should have a maximum length of {#limit}`,
    }),
    password: Joi.string().min(6).max(15).required().messages({
      "string.empty": `Password is required`,
      "string.min": `Password should have a minimum length of {#limit}`,
      "string.max": `Password should have a maximum length of {#limit}`,
    }),
  }),
};
