const { Category } = require('../models');

const create = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory.dataValues;
};

module.exports = {
  create,
};