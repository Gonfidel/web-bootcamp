let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/section27', {useNewUrlParser: true,useUnifiedTopology: true});

let TaskList = require('./taskList');

( async () => {
  
  await TaskList.deleteMany({},(err) => err ? console.log(err) : null);

  let newList1 = await new TaskList({name: "Work"});
  await newList1.tasks.push({name:"Schedule conference call"});
  await newList1.tasks.push({name:"Update calendar"});
  await newList1.save();

  let newList2 = await new TaskList({name: "Home"});
  await newList2.tasks.push({name:"Mow lawn"});
  await newList2.tasks.push({name:"Empty trash"});
  await newList2.save();

  await TaskList.updateOne(
    {name: "Home"},
    {$push: {tasks: {name: "Yoga"}}}
  );

  console.log("Seeding completed.")

})();

