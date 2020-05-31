module.exports.isAuth = (req,res,next) => {
  req.isAuthenticated() ? next() : res.redirect('/login')
}
module.exports.alreadyAuth = (req,res,next) => {
  req.isAuthenticated() ? res.redirect('/secrets') : next()
}

