// Selecting DOM elements

document.firstElementChild;
document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = 'nic';
let intro = document.getElementById("intro");
let intro = document.querySelector("intro");
let intro = document.getElementsByClassName("intro");
let intro = document.getElementsByTagName("header");

document.querySelector("h1").classList.add('huge');
document.querySelector("h1").classList.remove('huge');
document.querySelector("h1").classList.toggle('huge');

document.querySelector("input[type='button']").style.backgroundColor = "yellow";
document.querySelector("li a").style.color = 'red';

intro.innerHTML = 'toast';
intro.onclick = function(){};
intput.addEventListener("keypress",function(event){
    console.log(event.key);
})


let colors = {
    red: 'red',
    blue: 'blue'
}

Object.keys(colors)[0]; // returns the first property of colors

Object.keys(colors)[Math.floor(Math.random()*colors.length)]; // returns a random property of colors.



// Format phone number from string

// SOLUTION 1

function createPhoneNumber(arr) {
    let str = arr.join('');
    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}


// SOLUTION 2

function createPhoneNumber(arr) {
    let mask = '(xxx) xxx-xxxx';

    arr.forEach(item => {
        mask = mask.replace('x', item);
    });

    return mask;
}



// String reversal snippet

const reverse=a=>[...a].map(a.pop,a);
