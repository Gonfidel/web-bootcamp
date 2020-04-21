require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date = require('./local_modules/date');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

var tasks = ['Mow Lawn','Dishes','Cook Dinner','Eat Dinner'];

app.route('/')
  .get((req,res)=>{
    res.render('pages/todo', { day: date.getDate(), tasks: tasks } );
  })
  .post((req,res)=>{
    tasks.push(req.body.newItem);
    res.redirect('/');
  });

app.listen(process.env.PORT || 3000, function(){
  console.log(`Application started on port: ${process.env.PORT == null ? 3000 : process.env.PORT}`);
})