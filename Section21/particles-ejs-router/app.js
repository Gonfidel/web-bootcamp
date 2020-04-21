const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const routes = require('./routes/routes');
const path = require('path');
const app = express();




app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', routes);

app.listen(process.env.PORT || 3000, function(){
  console.log(`Server has been started on port ${process.env.PORT!=null?process.env.PORT:3000}`);
})