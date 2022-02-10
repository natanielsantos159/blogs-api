const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { body } = req;
  if (!('name' in body)) {
    return res.status(400).json({ message: '"name" is required' });
  }
  
  try {
    const createdCategory = await categoryService.create(body.name);
    return res.status(201).json(createdCategory);
  } catch (err) {
    return res.status(500).json({ message: 'Ocorreu um erro :(' });
  }
};

module.exports = {
  create,
};