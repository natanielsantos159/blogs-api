const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': '{{#label}} is required',
    'string.empty': '{{#label}} length must be at least 8 characters long',
    'string.min': '{{#label}} length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.required': '{{#label}} is required',
    'string.email': '{{#label}} must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': '{{#label}} is required',
    'string.empty': '{{#label}} length must be 6 characters long',
    'string.min': '{{#label}} length must be 6 characters long',
  }),
  image: Joi.string(),
});

const validateUserInfo = async (req, res, next) => {
  const userInfo = req.body;
  try {
    await schema.validateAsync(userInfo);
    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = validateUserInfo;
