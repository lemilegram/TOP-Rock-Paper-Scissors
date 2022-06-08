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

function game() {
    let playerScore = 0 
    let computerScore = 0

    while (playerScore < 3 && computerScore < 3) {
        let gameResult = playRound(prompt('Input your choice'), computerPlay());
        if (gameResult.substring(0, 6) === 'You wi') {playerScore++;}
        else if (gameResult.substring(0,6) === 'You lo') {computerScore++;}
        return gameResult;
    }

    if (playerScore > computerScore) {
        return 'You win the game! Congrats';
    }
    else {return 'You lost the game! Try again';}
}
