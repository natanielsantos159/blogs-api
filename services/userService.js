const jwt = require('jsonwebtoken');
const { User } = require('../models');

const create = async (user) => {
  const emailFound = await User.findOne({ where: { email: user.email } });
  if (emailFound) {
    throw new Error('User already registered');
  }
  
  await User.create(user);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

const login = async ({ email, password }) => {
  const userExists = await User.findOne({ where: { email } });
  if (!userExists) throw new Error('Invalid fields');

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ email, password }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

module.exports = {
  create,
  login,
};