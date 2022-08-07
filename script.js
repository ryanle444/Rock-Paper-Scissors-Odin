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
    choices = ["Rock", "Paper", "Scissors"];
    random = getRandomIntInclusive(0, 2);
    return choices[random];
}

