const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNumber = 0;
let numAttempts = 5;

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function askRange() {
    rl.question('Enter a min number: ', minNumber => {
        
        rl.question('Enter a max number: ', maxNumber => {
            console.log("I'm thinking of a number between " + minNumber + " and " + maxNumber + "...")
            
            secretNumber = randomInRange(Number(minNumber), Number(maxNumber));

            askGuess();
        });
})};


function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
};

function askGuess() {
    rl.question("Enter a guess: ", (guess) => {
        if (checkGuess(Number(guess))) {
            console.log("You win!");
            rl.close();
        } else if (numAttempts > 1) {
            numAttempts--;
            console.log("Only " + numAttempts + " attempts left!");
            askGuess();
        } else {
            console.log("Out of guesses!");
            rl.close();
        };    
    });
};


askRange();