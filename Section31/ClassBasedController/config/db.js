const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/section31', 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
