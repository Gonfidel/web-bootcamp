const date = require('../helpers/date');
const TaskList = require('../models/taskList');

///////////////////

exports.index = (req,res) => {
  TaskList.find({}, (err,lists)=>{
    if(err) return console.log(err);
    res.render('taskList/index', { day: date.getDate(), lists });
  })
};

exports.show = (req,res) => {
  TaskList.findById(req.params.listId, (err,list) => {
    if(err) {
      console.log(err);
    }
    res.render('taskList/show', {day: date.getDate(), list })
  })
};

exports.create = (req,res) => { 
  TaskList.create({name: req.body.newList}) 
  .then( res.redirect(`/lists`) )
}

exports.delete = (req,res) => {
  TaskList.findByIdAndRemove(
    req.params.listId,
    (err,result) => {
      if(err) return console.log(err);
      res.redirect('/lists')
    }
  )
}

exports.createTask = (req,res) =>{
  const listId = req.params.listId;
  const taskName = req.body.newTask;

  TaskList.update(
    {_id: listId},
    {$push: {tasks: {name: taskName}}},
    (err,result) => {
      res.redirect(`/list/${listId}/`);
    }
  )
};

exports.deleteTask = (req,res) => {
  const listId = req.params.listId;
  const taskId = req.params.taskId;

  TaskList.update(
    {_id: listId},
    {$pull: {tasks: {_id: taskId}}},
    (err,result) => {
      res.redirect(`/list/${listId}/`);
    }
  )
}
