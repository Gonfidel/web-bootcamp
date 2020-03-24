//length
var length = 'length';
console.log('length challenge: '+length.length);


// slicing and substring
var name = 'nicholas';
console.log('slicing challenge: '+name.slice(2,6));
//can be used like slice but by default leaves everything from the end
console.log(name.slice(2,5));
//will show everything after index 2
console.log(name.slice(2));

//Changing text case
var word1 = 'burnt';
var word2 = 'toast';
var words;
words=(word1+word2).toUpperCase();
console.log('concat and uppercase challenge: '+words);



//Capitalize first letter in name challenge
console.log(``);
console.log(`-----------------------------\nCapitalize name challenge\n-----------------------------`);

var firstName = prompt('What is your first name?').toLowerCase();
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

console.log(firstName);

// Karen the robot challenge
http://stanford.edu/~cpiech/karel/ide.html
function main(){
  topRight();   
}
function topRight(){
  turnLeft();
   while(frontIsClear()){  
      move();
   }
  turnRight();
   while(frontIsClear()){  
      move();
   }
}



// Life left calculator challenge
function lifeInDays(age){
  return `Life left in days: ${(90-age)*365}`;
}
function lifeInWeeks(age) {     
  return `Life left in weeks: ${(90-age)*52}`;
}
function lifeInMonths(age){
  return `Life left in months: ${(90-age)*12}`;
}
function lifeInYears(age){
  return `Life left in years: ${90-age}`;
}

console.log(`-----------------------------\nLife left challenges\n-----------------------------`);
console.log(lifeInDays(56));
console.log(lifeInWeeks(56));
console.log(lifeInMonths(56));
console.log(lifeInYears(56));


// BMI Calculator
console.log(bmiCalculator(65, 1.8)); 

function bmiCalculator(w,h){
  // return Math.round(w/Math.pow(h,2));
  return Math.round((w/Math.pow(h,2))*100)/100;
}

list.map(function(){


});
list = "toast eggs bread apple orange_juice".split(" ");
console.log(list);

groceryList.forEach(function(item){
  console.log(item);
});


