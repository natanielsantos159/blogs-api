const BlogPost = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    userId: DataTypes.STRING,
    content: DataTypes.STRING,
  }, { timestamps: false });

  BlogPostModel.associate = (models) => {
    models.BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return BlogPostModel;
};

module.exports = BlogPost;
