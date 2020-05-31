const User = require('../models/User')

module.exports.getRegister = (req,res,next) => {
  res.render('auth/register')
}
module.exports.postRegister = (req,res,next) => {
  const {email, password} = req.body
  User.register(email,password)
  .then(()=>{
    console.log(`${email}: successfully registered.`)
    res.redirect('/login')
  })
  .catch(err => console.log(err))
}
module.exports.getLogin = (req,res,next) => {
  res.render('auth/login') //{user: req.user, message: req.flash('error')} 
}
module.exports.postLogin = (req,res,next) => {
  const {email, password} = req.body;

}
module.exports.getSecrets = (req,res,next) => {
  res.render('secrets')
}
module.exports.logout = (req,res,next) => {
  if(req.isAuthenticated()){
    req.logout()
    res.redirect('/login')
  }else{
    res.redirect('/login')
  }
}