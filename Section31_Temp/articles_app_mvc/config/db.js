const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/section31:27017', 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
