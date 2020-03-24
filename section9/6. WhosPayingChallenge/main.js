let names = "Angela Ben Jenny Michael Chloe".split(' ');
function whosPaying(names){
  return `${names[Math.floor((Math.random()*(names.length)))]} is going to buy lunch today!`;
}
console.log(whosPaying(names));