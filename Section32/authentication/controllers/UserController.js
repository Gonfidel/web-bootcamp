const User = require('../models/User');
const passport = require('passport');

module.exports.register = (req,res) => {
  User.register({username: req.body.username}, req.body.password, (err,user)=>{
    if(err) {
      console.log(err);
      return res.redirect('/register')
    }
    passport.authenticate('local')(req,res,function(){
      
    })

  })
}
module.exports.createUser = (req,res) => {

}
module.exports.login = (req,res) => {

}
module.exports.authenticate = (req,res) => {

  
}