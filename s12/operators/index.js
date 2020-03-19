////////////////////////////////////
///////CALC FUNCTION////////////////
////////////////////////////////////
function calculate(op,...nums){
  return op(...nums);
}

/////////////////////////////////////////////////
/////OP FUNCTIONS WITH ARGUMENTS KEYWORD ///////
////////////////////////////////////////////////
function argAdd(){
  let returnValue = arguments[0];
  for(let i = 1; i<arguments.length; i++){
    returnValue+=arguments[i];
  }
  return returnValue;
}
function argSubtract(){
  let returnValue = arguments[0];
  for(let i = 1; i<arguments.length; i++){
    returnValue-=arguments[i];
  }
  return returnValue;
}
function argMultiply(){
  let returnValue = arguments[0];
  for(let i = 1; i<arguments.length; i++){
    returnValue*=arguments[i];
  }
  return returnValue;
}
function argDivide(){
  let returnValue = arguments[0];
  for(let i = 1; i<arguments.length; i++){
    returnValue/=arguments[i];
  }
  return returnValue;
}
                
///////////////////////////////////////////////////
///// OP FUNCTIONS WITH  OPERATOR     ///////
//////////////////////////////////////////////////
                
function add(...nums){
  let returnValue = nums[0];
  for(let i = 1; i<nums.length; i++){
    returnValue+=nums[i];
  }
  return returnValue;
}
function subtract(...nums){
  let returnValue = nums[0];
  for(let i = 1; i<nums.length; i++){
    returnValue-=nums[i];
  }
  return returnValue;
}
function multiply(...nums){
  let returnValue = nums[0];
  for(let i = 1; i<nums.length; i++){
    returnValue*=nums[i];
  }
  return returnValue;
}
function divide(...nums){
  let returnValue = nums[0];
  for(let i = 1; i<nums.length; i++){
    returnValue/=nums[i];
  }
  return returnValue;
}

