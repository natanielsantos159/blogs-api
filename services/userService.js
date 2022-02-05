const { User } = require('../models');

const create = async (user) => {
  const emailFound = await User.findOne({ where: { email: user.email } });
  if (emailFound) {
    throw new Error(JSON.stringify({ code: 409, message: 'User already registered' }));
  }
};

module.exports = {
  create,
};