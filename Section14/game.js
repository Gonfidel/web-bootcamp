const COLORS = { RED: 'red',  BLUE: 'blue',  GREEN: 'green',  YELLOW: 'yellow' };
var { gamePattern, userPattern, level, started } = { gamePattern: [], userPattern: [], level: 0, started: false };

$(document).keypress(function() {
  if(!started){
    started = true;
    $("#level-title").text(`Level: ${level}`);
    gameSelectColor();
    $('.btn').on("click",function(e){
      animateButton($(this).attr("id")); //animateButton(e.target.id);
      userPattern.push($(this).attr("id")); //userPattern.push($(this).attr('id'));
      evaluateAnswer(userPattern.length-1);
    });
  }
});

function gameSelectColor(){
  level++;
  $('#level-title').text(`Level: ${level}`);
  userPattern = [];
  let randNum = Math.floor(Math.random()*4);
  gamePattern.push(Object.values(COLORS)[randNum]); //Object.keys for the property name
  animateButton(Object.values(COLORS)[randNum]); //Object.values for the property value
}

function evaluateAnswer(currentLevel){
  if(userPattern[currentLevel]===gamePattern[currentLevel]){
    if(userPattern.length===gamePattern.length){
      setTimeout(gameSelectColor,1500);
    }
  }else{
    gameOver();
  }
}

function animateButton(color){
  new Audio(`sounds/${color}.mp3`).play();
  $(`#${color}`).fadeOut().fadeIn();
}

function gameOver(){
  $('#level-title').text("Game over..\nPress any key to start");
  new Audio(`sounds/wrong.mp3`).play();
  level = 0;
  userPattern, gamePattern = [];
  $(".btn").off("click");
  started = false;
}

