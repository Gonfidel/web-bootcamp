const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/express-template', {
  useNewUrlParser: true, useUnifiedTopology: true
})
mongoose.set('useCreateIndex', true);

module.exports = mongoose.connection