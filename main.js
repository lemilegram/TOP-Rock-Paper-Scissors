// Rock, Paper, Scissors Game

function computerPlay() {
    let gameOption = ["ROCK", "PAPER", "SCISSORS"];
    return(gameOption[Math.floor(Math.random() * 3)])
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let winStatement = `You win! ${playerSelection} beats ${computerSelection}`;
    let loseStatement = `You lose! ${computerSelection} beats ${playerSelection}`;
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return loseStatement; 
        } 
        else if (computerSelection === 'SCISSORS') {
            return winStatement;
        }
    }
    if (playerSelection === 'PAPER') {
        if (computerSelection === 'SCISSORS') {
            return loseStatement; 
        } 
        else if (computerSelection === 'ROCK') {
            return winStatement;
        }
    }
    if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return loseStatement; 
        } 
        else if (computerSelection === 'PAPER') {
            return winStatement;} 
    }
    else {return 'Input a valid answer! (Rock, paper or scissors)';}
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset')
let roundNum = 0;
let playerScore = 0;
let computerScore = 0;



function roundClick(element) {
    if (playerScore === 5 || computerScore === 5) {
        gameOver();
        return;
    }
    document.getElementById('round').querySelector('h3').textContent = `Round ${++roundNum}:`;
    document.getElementById('round').querySelector('p').textContent = playRound(element.textContent, computerPlay())
    if (document.getElementById('round').querySelector('p').textContent.substring(0, 6) === 'You wi') {
        document.getElementById('player').querySelector('p').textContent = ++playerScore;
    }
    else if (document.getElementById('round').querySelector('p').textContent.substring(0,6) === 'You lo') {
        document.getElementById('computer').querySelector('p').textContent = ++computerScore;
    }
}


function startGame() {
    rockBtn.addEventListener("click", function roundRock() {
        roundClick(rockBtn);
    })

    paperBtn.addEventListener("click", function roundPaper() {
        roundClick(paperBtn);
    })

    scissorsBtn.addEventListener("click", function roundScissors() {
        roundClick(scissorsBtn);
    })
    playerScore = 0
    computerScore = 0
    roundNum = 0
    
    document.getElementById('round').querySelector('h3').textContent = '';
    document.getElementById('round').querySelector('p').textContent = '';
    document.getElementById('player').querySelector('p').textContent = 0;
    document.getElementById('computer').querySelector('p').textContent = 0;
}

function gameOver() {
    rockBtn.removeEventListener("click", function roundRock() {
        roundClick(rockBtn)
    })
    
    paperBtn.removeEventListener("click", function roundPaper() {
        roundClick(paperBtn)
    })
    
    scissorsBtn.removeEventListener("click", function roundScissors() {
        roundClick(scissorsBtn)
    })

    if (playerScore === 5) {
        document.getElementById('round').querySelector('h3').textContent = 'YOU WON THE GAME!'
        document.getElementById('round').querySelector('p').textContent = ''
    }

    else if (computerScore === 5) {
        document.getElementById('round').querySelector('h3').textContent = 'YOU LOST THE GAME!'
        document.getElementById('round').querySelector('p').textContent = ''
    }
}

startGame();
