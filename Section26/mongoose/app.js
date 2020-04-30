const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/section26', { useNewUrlParser: true, useUnifiedTopology: true });

//Schemas
const fruitSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Fruit name is required"]},
  description: String,
  rating: {type: String, min: 0, max: 10}

})
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
})

//Models
const Fruit = mongoose.model("Fruit",fruitSchema);
const User = mongoose.model("User", userSchema);

//Code
const newFruit = new Fruit({name: "Mango", description: "A delicious mango. It's golden and fresh.", rating: 8});
newFruit.save()
  .then(()=>{
    console.log("Successfully added fruit.")
    const newUser = new User({name: "John", age: 21, favoriteFruit: newFruit });
    newUser.save()
      .then(()=>{
        console.log("Successfully added user.")
      })
      .catch((err)=>{
        console.log("Error saving user to datbase: " + err);
      });
  })
  .catch((err)=>{
    console.log("Error adding fruit to database: " + err);
  });





  





// User.create({ _id: 1, name: "Jil", age: 37 });
// User.insertMany([
//   { _id: 2, name: "John", age: 67 },
//   { _id: 3, name: "Albert", age: 14 }
// ],(err)=>{
//   if(err){console.log(err)}
// });


// User.find((err,res)=>{
//   if(err){console.log(err); return;}
//   console.log(res);
// });


/////////////////////////
/////////////////////////
/////////////////////////




// const newFruit = {name: "Mango", description: "A glossy red apple."}

// Fruit.create(newFruit)
//   .then(()=>{
//     console.log("promise-then");
//   });
// if(Fruit.create(newFruit)){
//   console.log('if statement');
// }
// Fruit.create(newFruit) ? console.log('ternary') : null;

// Fruit.insertMany([
//   {
//     name: "Orange",
//     description: "Dull but delish"
//   },
//   {
//     name: "Pineapple",
//     description: "Please don't put this on pizza.."
//   }
// ], (err)=>{if(err){console.log(err)}
// });


// Fruit.find((err,res)=>{
//   if(err!=null){console.log(err); return;}

//   mongoose.connection.close();

//   res.forEach((fruit,index)=>{
//     console.log(index + ": " + fruit.name);
//   });

// });




// Fruit.updateOne({name: "Mango"}, {name: "Peach"}, (err)=>{if(err!=null){console.log(err)}else{console.log('Update successful')}})

// Fruit.deleteOne({name: "Peach"},(err)=>{
//   if(err!=null){
//     console.log(err);
//   }else{
//     console.log('Delete successful')
//   }
// })


