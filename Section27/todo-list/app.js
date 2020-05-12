require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const postsRouter = require('./routes/tasks');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.use('/', postsRouter);


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@insanes-cluster-e4qer.mongodb.net/test?retryWrites=true&w=majority`,
 {useNewUrlParser: true}
);

app.listen(process.env.PORT || 3000, function(){
  console.log(`Application started on port: ${process.env.PORT == null ? 3000 : process.env.PORT}`);
})


