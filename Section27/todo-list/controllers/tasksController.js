const date = require('../helpers/date');
const Task = require('../models/task');

///////////////////

///////////////////

exports.index = (req,res) =>{
  Task.find((err,tasks)=>{
    if(err) return console.log(err);
    console.log(tasks);
    res.render('tasks', {day: date.getDate(), tasks})
  });
  
};

exports.create = (req,res) =>{
  Task.create({name: req.body.newItem},(err,tasks)=>{
    if (err) return console.log(err);
    console.log('Added tasks: ' + tasks);
    res.redirect('/')
  });
};