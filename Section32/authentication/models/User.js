const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose')



const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password'] });
userSchema.plugin(passportLocalMongoose)

const User = new mongoose.model('User', userSchema);

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;