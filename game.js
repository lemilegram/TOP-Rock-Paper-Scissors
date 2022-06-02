function computerPlay() {
    let gameOption = ["ROCK", "PAPER", "SCISSORS"];
    return(gameOption[Math.floor(Math.random() * 3)])
}

function playGame(playerSelection, computerSelection) {
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
        else {return winStatement;} 
    }
    if (playerSelection === 'PAPER') {
        if (computerSelection === 'SCISSORS') {
            return loseStatement; 
        } 
        else {return winStatement;} 
    }
    if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return loseStatement; 
        } 
        else {return winStatement;} 
    }
}

console.log(playGame(computerPlay(), computerPlay()));

