const PostCategory = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'PostsCategories' });

  PostCategoryModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories', through: PostCategoryModel, foreignKey: 'postId', otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts', through: PostCategoryModel, foreignKey: 'categoryId', otherKey: 'postId',
    });
  };
  return PostCategoryModel;
};

module.exports = PostCategory;