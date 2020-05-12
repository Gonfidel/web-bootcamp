require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const taskListsRouter = require('./routes/taskListRoutes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost/section27', {useNewUrlParser: true, useUnifiedTopology: true});

//Create express app and dependecies
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

//Routes
app.use('/', taskListsRouter);

//Start server
app.listen(process.env.PORT || 3000, function(){
  console.log(`Application started on port: ${process.env.PORT == null ? 3000 : process.env.PORT}`);
})

