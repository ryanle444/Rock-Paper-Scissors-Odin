// Randomly returns an integer between "min" and "max", inclusively
// Taken from MDN
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

/** 
 * @returns a random choice between "Rock", "Paper", or "Scissors"
 */
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = getRandomIntInclusive(0, 2);

    return choices[random];
}

// Global variable to keep track of player's score and computer's score
let playerScore = 0;
let computerScore = 0;

/**
 * Function to return the outcome of the round depending on the choice of the
 * player and the computer
 * @param {*} playerSelection The choice of the player
 * @param {*} computerSelection The choice of the computer
 * @returns A message about the outcome of the round
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerScore++;
            return "You Win This Round! Rock beats Scissors";
        }
        else if (computerSelection === "Paper") {
            computerScore++;
            return "You Lose This Round! Paper beats Rock";
        }
        else {
            return "You Tied This Round! Both Got Rock!";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return "You Win This Round! Paper beats Rock";
        }
        else if (computerSelection === "Scissors") {
            computerScore++;
            return "You Lose This Round! Scissors beat Paper";
        }
        else {
            return "You Tied This Round! Both Got Paper!";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerScore++;
            return "You Win This Round! Scissors beat Paper";
        }
        else if (computerSelection === "Rock") {
            computerScore++;
            return "You Lose This Round! Rock beats Scissors";
        }
        else {
            return "You Tied This Round! Both got Scissors!"
        }
    }
    else {
        return "Error, player selection has to be 'Rock', 'Paper', or 'Scissors'";
    }
}

/**
 * Plays the game
 */
function game() {
    // Resets the scores
    playerScore = 0;
    computerScore = 0;

    // Plays 5 rounds 
    for (let i = 0; i < 5; i++) {
        // Prompts the player for their selection
        let playerSelection = prompt("What is your choice?");

        // Gets the selection from the computer
        let computerSelection = getComputerChoice();

        // Plays the round
        console.log(playRound(playerSelection, computerSelection));
    }

    // Reports the final result
    if (playerScore < computerScore) {
        console.log("Unfortunately, you lost... Better luck next time.");
    }
    else if (playerScore > computerScore) {
        console.log("Congratulations, you won!");
    }
    else {
        console.log("You tied!");
    }
}

console.log(game());