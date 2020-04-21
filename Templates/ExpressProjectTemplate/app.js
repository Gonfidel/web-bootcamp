
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');


app.route('/')
.get((req,res)=>{
  
})
.post((req,res)=>{

});

app.listen(process.env.PORT || 3000, function(){
console.log(`Application started on port: ${process.env.PORT == null ? 3000 : process.env.PORT}`);
});