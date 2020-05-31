const router = require('express').Router()
, UserController = require('../controllers/UserController')
, passport = require('passport')
, {isAuth, alreadyAuth} = require('../middleware/auth')

router.route('/')
  .get((req,res)=>res.redirect('/login'))

router.route('/register')
  .get(alreadyAuth, UserController.getRegister)
  .post(alreadyAuth, UserController.postRegister)

router.route('/login')
  .get(alreadyAuth, UserController.getLogin)
  .post(alreadyAuth, passport.authenticate('local',{failureRedirect: '/login', successRedirect:'/secrets'}))

router.route('/logout')
  .get(isAuth, UserController.logout)
  .post(isAuth, UserController.logout)

router.route('/secrets')
  .get(isAuth, UserController.getSecrets)

module.exports = router