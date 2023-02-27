import Joi from 'joi'

export default {
  create: Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      'string.empty': `Name is required`,
      'string.min': `Name should have a minimum length of {#limit}`,
      'string.max': `Name should have a maximum length of {#limit}`,
    })
  }),
  update: Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      'string.empty': `Name is required`,
      'string.min': `Name should have a minimum length of {#limit}`,
      'string.max': `Name should have a maximum length of {#limit}`,
    })
  })
}