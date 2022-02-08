const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateLoginFields = async (req, res, next) => {
  const userInfo = req.body;
  try {
    await schema.validateAsync(userInfo);
    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = validateLoginFields;