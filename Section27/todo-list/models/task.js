var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/section27', {useNewUrlParser: true});

const taskSchema = new mongoose.Schema({
  name: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
