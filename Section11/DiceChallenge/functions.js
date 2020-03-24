function randNum(range){
    return Math.floor(range*Math.random())+1;
}
const diceRoll = () => randNum(6);

Array.prototype.determineWinner = function(){
    if(this[0]>this[1]){
        return 'player1';
    }else if(this[0]<this[1]){
        return 'player2';
    }else{
        return 'draw';
    }
}


function updateDisplay(domElement,players){
    const winner = players.determineWinner();
    for(let i = 0; i<players.length;i++){
        document.querySelectorAll("img")[i].setAttribute("src",`images/dice${players[i]}.png`);
    }
    if(winner==='player1'){
        domElement.innerHTML = '🚩 Player 1 wins!';  
    }else if(winner==='player2'){
        domElement.innerHTML = 'Player 2 wins! 🚩';
    }else{
        domElement.innerHTML = 'It\'s a draw!';
    }
}


//Type hello word in 5 seconds
// setTimeout(()=>console.log('hello world!'),5000); 