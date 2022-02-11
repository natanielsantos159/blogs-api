const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  categoryIds: Joi.array().required(),
  content: Joi.string().required(),
});

const validatePostInfo = async (req, res, next) => {
  const postInfo = req.body;
  try {
    await schema.validateAsync(postInfo);
    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = validatePostInfo;