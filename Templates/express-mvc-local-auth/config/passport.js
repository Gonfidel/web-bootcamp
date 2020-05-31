const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const {validatePassword} = require('../lib/PasswordUtils')

const strategy = new LocalStrategy(
  {usernameField: 'email'},
  function(email,password,done){
    User.findOne({email: email})
      .then(user=>{
        if(!user) {
          console.log('No user found')
          return done(null, false)
        }
        if(validatePassword(password,user.hash,user.salt)){
          console.log(`${user.email} successfully logged in.`)
          return done(null,user)
        }else{
          console.log(`${user.email} failed to log in. Please enter a valid password`)
          return done(null,false)
        }
      })
      .catch(err=>{done(err)})
})

passport.use(strategy)

passport.serializeUser((user,done)=>{
  done(null,user.id)
})

passport.deserializeUser((userId,done)=>{
  User.findById(userId)
    .then(user=>{
      done(null,user)
    })
    .catch(err=>done(err))
})

