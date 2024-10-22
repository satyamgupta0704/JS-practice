let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector("#submit");
const userInput = document.querySelector('#guessField');
const prevGuess = document.querySelector('#prevGuess');
const remaining = document.querySelector('#remainingGuess');
const loHi = document.querySelector('.lowHI');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuesses =[];
let numOfGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1');
    }
    else if(guess > 100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuesses.push(guess);
        if(numOfGuesses === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Randome Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess){
    userInput.value =''
    prevGuess.innerHTML += `${guess}  `;
    numOfGuesses++;
    remaining.innerHTML = `${11-numOfGuesses}`;
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed it right`);
    }
    else if(guess < randomNumber){
        displayMessage(`Guessed number is TOOOO low like your life`);
    }
    else if(guess > randomNumber){
        displayMessage(`Guessed number is TOOOO high like your last roll`);
    }
}

function displayMessage(message){
    loHi.innerHTML=`<h4>${message}</h4>`;

}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h3 id='newGame'>Start New Game</h3>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();

}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    if (newGameButton) {
        newGameButton.addEventListener("click", function (e) {
            randomNumber = parseInt(Math.random() * 100 + 1);
            prevGuesses = [];
            numOfGuesses = 1;
            prevGuess.innerHTML = '';  
            remaining.innerHTML = `${11 - numOfGuesses}`;
            loHi.innerHTML = '';  
            userInput.removeAttribute('disabled');  
            submit.removeAttribute('disabled');   
            startOver.removeChild(p); 
            playGame = true;
        });
}
}


