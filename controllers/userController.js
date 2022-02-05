const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    await userService.create({ displayName, email, password, image });
  } catch (err) {
    const error = JSON.parse(err.message);
    if (error.code && error.message) {
      return res.status(error.code).json({ message: error.message });
    }
    console.log(err);
  }
};

module.exports = {
  create,
};