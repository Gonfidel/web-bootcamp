function fizzBuzz(){
  let htmlString = '';
  let htmlArray = [];
  for(let x = 1; x<=100;x++){
    if(x%15===0){
      htmlArray.push(`${x}: FizzBuzz`)
    }else if(x%3===0){
      htmlArray.push(`${x}: Fizz`)
    }else if(x%5===0){
      htmlArray.push(`${x}: Buzz`)
    }else{
      htmlArray.push(`${x}:  - `)
    }
  }
  for(prop of htmlArray){
    htmlString+=`<p>${prop}</p>`
  }

  document.getElementById('render-dom').innerHTML = htmlString;
}
fizzBuzz();

