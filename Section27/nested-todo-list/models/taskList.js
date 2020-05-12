const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String
});

const taskListSchema = new mongoose.Schema({
  name: String,
  tasks: [taskSchema]
});

const TaskList = mongoose.model('TaskList', taskListSchema);

module.exports = TaskList;
