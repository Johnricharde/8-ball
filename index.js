// MODEL //////////////////////////////////////////////////////////////////
let ball8Text = document.getElementById('ball8-text');
let previousAnswer = '';

// List of potential answers
const answerArray = [
    'Yes.',
    'Sure.',
    'Mhm.',
    'Absolutely.',
    'Ask again later.',
];

// VIEW ///////////////////////////////////////////////////////////////////
// Updates textcontent with new answer when clicked
function updateView() {
    generateRandomNumber();
    if (randomNumber !== previousAnswer) {
        ball8Text.textContent = answerArray[randomNumber];
        previousAnswer = randomNumber;
    } else {
        generateRandomNumber();
        updateView();
    }
}

// CONTROLLER /////////////////////////////////////////////////////////////
// Generates a random number from "0-5"
function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 5 );
}