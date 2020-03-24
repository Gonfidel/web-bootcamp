///////////////////////////////////////////////
// Solutions with event listener///////////////
///////////////////////////////////////////////
// document.querySelectorAll(".drum").forEach(btn => {
//   btn.addEventListener("click", () => {
//     alert("clicked!");
//   });
// });

// for (let btn of document.querySelectorAll(".drum")) {
//   btn.addEventListener("click", () => alert("clicked!"));
// }

// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", () => alert("clicked!"));
// }

///////////////////////////////////////////////
// Solutions with onclick attribute
///////////////////////////////////////////////

// document.querySelectorAll(".drum").forEach(btn => {
//   btn.onclick = () => {
//     alert("clicked!");
//   }
// });

// for (let btn of document.querySelectorAll(".drum")) {
//   btn.onclick=() => alert("clicked!");
// }

// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum").onclick = () => alert("clicked!");
// }



//set the image, audio sound, and color for buttons
// for(let i = 0; i<document.querySelectorAll(".drum").length; i++){ //for each button with class of drum
//   document.querySelectorAll(".drum")[i].style.backgroundImage = `url('./images/${i}.png')`; //set the background image for all buttons
//   document.querySelectorAll(".drum")[i].addEventListener("click",function(){ // add event listener on click
//     new Audio(`./sounds/${i}.mp3`).play(); //play this sound on click
//     this.style.color = "orange"; // update color to orange on click
//   });
// }

//////////////////////////////////////
///ENTRIES FOR INDEX ON FOR-OF LOOP //
//////////////////////////////////////
let buttons = document.querySelectorAll(".drum");
let keyList = "w;a;s;d;j;k;l".split(";");
for(const [index,btn] of buttons.entries()){
  btn.style.backgroundImage = `url('./images/${index}.png')`; //style all drum btns
  btn.addEventListener('click',function(){ //add event to play sound on drum click
    new Audio(`./sounds/${index}.mp3`).play();
    this.style.color = "orange";
    this.classList.add("pressed");
    setTimeout(()=>this.classList.remove("pressed"),100);
  });
  document.addEventListener('keydown',function(e){ //add event to play sound on keypress
    if(e.key === keyList[index]){
      new Audio(`./sounds/${index}.mp3`).play();
    } 
  });
}

//var audio = new Audio('./sounds/1.mp3');
//audio.play();

