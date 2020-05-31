
const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/', (req,res) => res.redirect('/register'));

router.route('/register')
  .get(UserController.register)
  .post(UserController.createUser);

router.route('/login')
  .get(UserController.login)
  .post(UserController.authenticate);

router.route('/secret')
  .get((req,res)=>{
    if(req.isAuthenticated){
      res.render('secret')
    }else{
      res.redirect('/login');
    }
  })

module.exports = router;