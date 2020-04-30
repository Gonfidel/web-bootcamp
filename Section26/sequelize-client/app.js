////////////////////////////////////  
//////////     INIT DB    //////////  
////////////////////////////////////  

const Sequelize = require('sequelize');

const sequelize = new Sequelize('section26', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

////////////////////////////////////  
//////////     SCHEMAS    //////////  
////////////////////////////////////  

const Model = Sequelize.Model;

class User extends Model {}
User.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize,
  modelName: 'user'
});

class Fruit extends Model {}
Fruit.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'fruit'
});
User.hasOne(Fruit);


////////////////////////////////////  
//////////   DB ACTIONS   //////////  
////////////////////////////////////  

( async () => {
  //syncronize model with db
  // By not using the options:{force:true} flag, we are only syncing the model to the DB if the db is empty
  await sequelize.sync({force:true});
  
  //create new users
  let newFruit = await Fruit.create({ name: "Pineapple", description: "A delicious golden pineapple. It looks fresh and ready to eat!" });
  let newUser = await User.create({ name: "Jane", age: 21 });
  await newUser.setFruit(newFruit);

  //search all users and log them
  await User.findAll({include: [{model: Fruit}]}).then(users=>console.log(users));

  //close db connection
  sequelize.close()
})();


