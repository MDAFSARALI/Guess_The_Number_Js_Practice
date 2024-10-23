let randomNumber=parseInt(Math.random()*100+1);
console.log(randomNumber)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=0
let playGame=true

// If You are able to play game Or Not 
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
       const guess= parseInt(userInput.value);
       validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess<0 || guess>100 || isNaN(guess)){
        alert(`Please enter a valid number`);
    }else{
        prevGuess.push(guess);
        if(numGuess==9){
            displayGuess(guess)
            displayMessage(`Game Over !!! Random no was : ${randomNumber} `)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}
function checkGuess(guess){
    if(randomNumber==guess){
        displayMessage(`You guessed it right in ${numGuess} attempt`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Number Is TOOO Low !!!`);

    }
    else if(guess>randomNumber){
        displayMessage(`Number Is TOOO High !!!`);

    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML +=`${guess} `
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`
    
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h3>${message}</h3>`
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    p.style.padding="5px"
    p.style.border="10px"
    p.style.backgroundColor="white"
    p.style.color="black"
    p.style.cursor="pointer"
    startOver.appendChild(p)
    playGame=false;
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=0
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')
        playGame=true;
    })
}
