const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const token = await userService.create({ displayName, email, password, image });
    return res.status(201).json({ token });
  } catch (err) {
    if (err.message === 'User already registered') {
      return res.status(409).json({ message: 'User already registered' });
    }
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await userService.login({ email, password });
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  login,
};