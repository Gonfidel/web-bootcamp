function isLeapYear(yr){
  if(yr%4===0){
    if(!yr%100===0){
      return true;
    }if(yr%400===0){
      return true;
    }
  }
  return false;
}
function alertIsLeapYear(yr){
  if(isLeapYear(yr)){
    alert(`That is a valid leap year!`);
  }else{
    alert('That is not a leap year!');
  }
}

let year = document.getElementById('year');
document.getElementById('check-year').onclick=()=>alertIsLeapYear(year.value);