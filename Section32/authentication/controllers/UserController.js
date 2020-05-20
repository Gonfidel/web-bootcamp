const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.register = (req,res) => {
  res.render('users/register');
}
module.exports.createUser = (req,res) => {
  bcrypt.hash(req.body.password, saltRounds,(err,hash)=>{
    if(err) return res.send('error hashing password');
    User.create({username: req.body.username, password: hash},(err,user)=>{
      if(err) return res.send('Error creating user');
      res.render('users/secret');
    });
  });
}
module.exports.login = (req,res) => {
  res.render('users/login');
}
module.exports.authenticate = (req,res) => {
  User.findOne({username: req.body.username}, (err,user)=> {
    if(err | !user) return res.send("Could not find user: " + err);
    bcrypt.compare(req.body.password, user.password,(err,result)=>{
      if(err) return res.send('Error comparing passwords password');
      if(result) return res.render('users/secret');
      else return res.send('incorrect password')
    })
  })
}