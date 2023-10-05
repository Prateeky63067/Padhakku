const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/posts', postController.createPost);
router.delete('/deletepost/:postId', postController.deletePost);
router.get('/posts/:userId', postController.getUserPosts);

module.exports = router;