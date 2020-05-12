require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const postsRouter = require('./routes/tasks');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost/section27', {useNewUrlParser: true});

//Create express app and dependecies
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

//Routes
app.use('/', postsRouter);

<<<<<<< HEAD
//Start server
=======

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@insanes-cluster-e4qer.mongodb.net/test?retryWrites=true&w=majority`,
 {useNewUrlParser: true}
);

>>>>>>> bd3e171525d7827323be6555b474d7cc676bf353
app.listen(process.env.PORT || 3000, function(){
  console.log(`Application started on port: ${process.env.PORT == null ? 3000 : process.env.PORT}`);
})


