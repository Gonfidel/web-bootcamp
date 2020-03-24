function bmiCalculator (w, h) {
  let bmi =   Math.round((w/Math.pow(h,2))*100)/100;
  if(bmi>24.9){alert(`Your BMI is ${bmi}, so you are overweight.`);}
  else if(bmi>18.5){alert(`Your BMI is ${bmi}, so you have a normal weight.`);}
  else if(18.5>bmi){alert(`Your BMI is ${bmi}, so you are underweight.`);}
  else{alert('an error has occured');}
}

let weight = document.getElementById('weight');
let height = document.getElementById('height');
document.getElementById('calcButton').onclick=()=>bmiCalculator(weight.value,height.value);

for(input of document.getElementsByTagName('input')){input.autocomplete='off';}
