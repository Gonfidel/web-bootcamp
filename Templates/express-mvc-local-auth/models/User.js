const mongoose = require('mongoose')
, encrypt = require('mongoose-encryption')
, {genPassword} = require('../lib/PasswordUtils')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  active: { 
    type: Boolean,
    default: true
  }
})
userSchema.statics.register = function(email,password){
  return this.findOne({email: email})
  .then(user=>{
    if(user){
      console.log('User already exists with that email.')
      res.redirect('/register')
    }else {
      const {salt,hash} = genPassword(password)
      const newUser = new this({email,salt,hash})
      newUser.save()
    }
  })
}
userSchema.plugin(encrypt, { secret: process.env.DB_SECRET, encryptedFields: ['salt','hash'] } )
const User = new mongoose.model('User',userSchema)

module.exports = User