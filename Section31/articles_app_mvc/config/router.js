const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

router.get('/', (req,res)=>{
  res.redirect('/articles');
});

router.route('/articles')
  .get(articlesController.index)
  .post(articlesController.create)
  .delete(articlesController.deleteAll);

router.route('/articles/:articleId')
  .get(articlesController.show)
  .put(articlesController.replace)
  .patch(articlesController.update)
  .delete(articlesController.delete);

module.exports = router;
