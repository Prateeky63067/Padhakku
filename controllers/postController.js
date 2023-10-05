
const Post = require('../models/postModel');

exports.createPost = (req, res) => {
  const { userId, content } = req.body;
  const newPost = new Post({ userId, content });

  newPost.save()
  .then(() => {
    return res.status(200).json(newPost);
  })
  .catch((err) => {
    return res.status(500).json({ message: 'Post creation failed.' });
  });
};

exports.deletePost = (req, res) => {
  const { postId } = req.params;
  Post.findByIdAndRemove(postId)
  .then((deletedPost) => {
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    return res.status(200).json({ message: 'Post deleted successfully.' });
  })
  .catch((err) => {
    return res.status(500).json({ message: 'Post deletion failed.' });
  });

};

exports.getUserPosts = (req, res) => {
  const { userId } = req.params;
  Post.find({ userId })
  .then((posts) => {
    return res.status(200).json(posts);
  })
  .catch((err) => {
    return res.status(500).json({ message: 'Failed to fetch user posts.' });
  });

};