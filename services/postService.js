const { BlogPost, User } = require('../models');
const { Category, PostCategory } = require('../models');

const create = async (postInfo) => {
  const { categoryIds, email } = postInfo;

  const result = await User.findOne({ where: { email } });
  const userId = result.dataValues.id;

  const promises = categoryIds.map(async (id) => Category.findByPk(id));
  const foundCategories = await Promise.all(promises);

  const allCategoriesValid = foundCategories.every((found) => found !== null);
  if (!allCategoriesValid) throw new Error('"categoryIds" not found');

  const createdPost = await BlogPost.create({ ...postInfo, userId });
  const postId = createdPost.dataValues.id;

  const postCategoriesValues = categoryIds.map((categoryId) => ({ postId, categoryId }));
  PostCategory.bulkCreate(postCategoriesValues);

  return createdPost.dataValues;
};

const getAll = async () => {
  const blogPosts = await BlogPost.findAll();
  const promisesArray = blogPosts.map(async (Post) => {
    const { dataValues: user } = await Post.getUser();

    const Categories = await Post.getCategories();
    const categoriesValues = Categories.map(({ dataValues: { id, name } }) => ({ id, name }));

    return {
      ...Post.dataValues,
      user,
      categories: categoriesValues,
    };
  });

  const posts = await Promise.all(promisesArray);
  return posts;
};

module.exports = {
  create,
  getAll,
};