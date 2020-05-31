
const bcrypt = require('bcryptjs')
module.exports.genPassword = function(password){
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return {salt, hash}
}
module.exports.validatePassword = function(password,hash){
  return bcrypt.compareSync(password, hash); // hash raw password and compare to hashed password
}