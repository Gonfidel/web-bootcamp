function checkMatchPercentage(){
  let rating = Math.floor(((Math.random())*100));
  if(rating>70){
    alert(`Your love rating is ${rating}%! You would be a great match!`);
  }else if(rating>30){
    alert(`Your love rating is ${rating}%. You would be an okay match.`);
  }else{
    alert(`Your love rating is ${rating}%. Save yourself the headache D:`);
  }
}
document.getElementById('check-match').onclick=()=>{checkMatchPercentage();}