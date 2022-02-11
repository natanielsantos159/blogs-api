const BlogPost = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    userId: DataTypes.STRING,
    content: DataTypes.STRING,
  }, { timestamps: false });

  return BlogPostModel;
};

module.exports = BlogPost;
