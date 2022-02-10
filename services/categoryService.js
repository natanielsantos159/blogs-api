const { Category } = require('../models');

const create = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory.dataValues;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};