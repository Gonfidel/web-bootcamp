let houseKeeper1={
  firstName: "Ann",
  lastName: "Anderson",
  fullName: function(){
    return `${this.firstName} ${this.lastName}`;
  },
  age: 20,
  cleaningTasks: 'sweeping;vacuuming;dusting;dishes;lawn care;laundry'.split(';'),
  yearsExperience: 12
}

console.log(houseKeeper1.firstName);
console.log(houseKeeper1.lastName);
console.log(houseKeeper1.fullName()); //must invoke function if you want to return the return value
console.log(houseKeeper1.age);
console.log(houseKeeper1.cleaningTasks);
console.log(houseKeeper1.yearsExperience);

function BellBoy(name,age,permit,lang){
  this.name = name;
  this.age = age;
  this.permit = permit;
  this.lang = lang;
}

let bellBoys = [];
bellBoys.push(new BellBoy('steve',15,true,['english']));
bellBoys.push(new BellBoy('jim',13,false,['english']));

function HouseKeeper(name='bob',experience,skills){
  this.name = name;
  this.experience = experience;
  this.skills = skills;
  this.clean = function(){alert('Cleaning in progress..')};
  this.initialize = function(){this.name = 'bob'};
}

let james = new HouseKeeper('James',2,'vacuuming');
james.created();


new HouseKeeper().initialize();

