
const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/', (req,res) => res.redirect('/register'));

router.route('/register')
  .get(UserController.register)
  .post(UserController.createUser);

router.route('/login')
  .get(UserController.login)
  .post(UserController.authenticate);

module.exports = router;