'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number has been selected'
    } else if (guess === secretNumber) {
        // When player wins
        document.querySelector('.message').textContent = 'Correct Number'
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'    // It needs to be in a string.


        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore
        }

        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0;

            //     }
            // }
            // else if (guess > secretNumber) {
            //     // When guess is too high
            //     if (score > 1) {
            //         document.querySelector('.message').textContent = 'Too high'
            //         score--;
            //         document.querySelector('.score').textContent = score;
            //     } else {
            //         document.querySelector('.message').textContent = 'You lost the game'
            //         document.querySelector('.score').textContent = 0;

        }
        // When is guess is too low
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low';
        score--;
        document.querySelector('body').style.backgroundColor = "#FF0000";
        document.querySelector('.score').textContent = score

    }


});



document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = " ";

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';


})