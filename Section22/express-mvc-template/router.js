const router = require('express').Router();
const postController = require('./controllers/postController');

//Home
router.get('/', (req,res)=>res.redirect('/posts'));

// PostsController
router.get('/posts', postController.index);
router.get('/post/:postId',postController.show);
router.get('/posts/compose',postController.compose);
router.post('/posts/compose',postController.create);


module.exports = router;