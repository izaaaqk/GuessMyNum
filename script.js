'use strict';

let SecretNumber = Math.floor(Math.random() * 20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
const displayNumber = function(number) {
    document.querySelector('.number').message = number
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        displayMessage('🚫 No Number!!');
    } else if (guess === SecretNumber){
        displayMessage('Correct Number!🎈🎆');
        displayNumber(SecretNumber);
        document.querySelector('body').style.backgroundColor = '#60b547';
        displayNumber(SecretNumber);
        document.querySelector('.number').style.widht = '30rem';
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess !== SecretNumber) {
        if (score > 1){
            displayMessage(guess > SecretNumber ? 'Number to High! 💹':'Number to Low 📉')
            score--;
            document.querySelector('.score').textContent = score;
            } else {
            displayMessage('Game Over!! 🕹');
            document.querySelector('.score').textContent = 0;
        }
    }});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    displayMessage('Start Guessing...!');
    document.querySelector('.score').textContent = score;
    displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
});