const jwt = require('jsonwebtoken');
const postService = require('../services/postService');

const create = async (req, res) => {
  const { authorization } = req.headers;
  const postInfo = req.body;
  
  try {
    const { email } = jwt.decode(authorization);
    if (postInfo) postInfo.email = email;
    const createdPost = await postService.create(postInfo);
    return res.status(201).json(createdPost);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
};