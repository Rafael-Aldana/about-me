'use strict';

// establish variables, Console logs for troubleshooting
console.log('Hello world!');
let score = 0;
let rando = Math.floor(Math.random() * 10) + 1;
console.log(rando);

// Get name and give greeting
let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}. Please answer the remaining questions in a yes/no or y/n format.`);

// Prompt for 5 y/n q's, Alert user to correct/incorrect, Increment score for correct answers

function q1Func() {
  let q1Guess = prompt('Am I a Navy veteran?');
  if (q1Guess[0].toLowerCase() === 'y') {
    // console.log('Wrong!');
    alert('Wrong!');
  } else {
    // console.log('Correct!');
    alert('Correct!');
    score++;
  }
}
q1Func();

function q2Func() {
  let q2Guess = prompt('Am I from New York?');
  if (q2Guess[0].toLowerCase() === 'y') {
  // console.log('Wrong!');
    alert('Wrong!');
  } else {
  // console.log('Correct!');
    alert('Correct!');
    score++;
  }
}
q2Func();

function q3Func() {
  let q3Guess = prompt('Do I have a bachelor\'s degree?');
  if (q3Guess[0].toLowerCase() === 'y') {
    // console.log('Wrong!');
    alert('Wrong!');
  } else {
    // console.log('Correct!');
    alert('Correct!');
    score++;
  }
}
q3Func();

function q4Func() {
  let q4Guess = prompt('Have I ever lived in Scotland?');
  if (q4Guess[0].toLowerCase() === 'y') {
    // console.log('Wrong!');
    alert('Wrong!');
  } else {
    // console.log('Correct!');
    alert('Correct!');
    score++;
  }
}
q4Func();

function q5Func() {
  let q5Guess = prompt('Am I technologically literate?');
  if (q5Guess[0].toLowerCase() === 'y') {
    // console.log('Wrong!');
    alert('Wrong!');
  } else {
    // console.log('Correct!');
    alert('Correct!');
    score++;
  }
}
q5Func();
// Prompt user to guess a number 1-10, Check against rando, Report high/low, Increment score for correct, Decrement tries

// give user 4 tries
function q6Func() {
  for (let i = 3; i >= 0; i--) {
    // take user guess for each try
    let q6Guess = prompt('Guess a number between 1-10');
    // Convert q6Guess into num-type, Check against rando
    if (parseInt(q6Guess) === rando) {
      // If correct tell user, Increment Score, Break loop
      alert('Wow you got it!');
      score++;
      break;
    } else if (parseInt(q6Guess) < rando && i > 0) {
      // If guesss low && tries left report, Restart loop
      alert(`Too low sucka. Please try again. You have ${i} tries remaining`);
    } else if (parseInt(q6Guess) > rando && i > 0) {
      // If guess high && tries left report, Restart loop
      alert(`Ooph too high. Please try again. You have ${i} tries remaining`);
    } else {
      // Out of tries, Give answer and move on
      alert(`Sorry, the correct answer was ${rando}.`);
    }
  }
}
q6Func();
// Create array of fav pokemon, prompt user for answer, Check answer against array
function q7Func() {
  const favPokemon = ['bulbasaur', 'squirtle', 'charmander'];
  for (let i = 5; i >=0; i--) {
    let q7Guess = prompt('What is one of my favorite pokemon?').toLowerCase();
    if (favPokemon.indexOf(q7Guess) !== -1) {
      alert(`That's one of them! here's the full list: ${favPokemon}`);
      score++;
      break;
    } else if (favPokemon.indexOf(q7Guess) === -1 && i > 0) {
      alert(`Sorry please try again. You have ${i} tries remaining.`);
    } else {
      alert(`Sorry. You're out of tries so here the correct answers: ${favPokemon}`);
    }
  }
}
q7Func();
//  Give personalized message and report score
alert(`Thanks for playing ${userName}! Your score this round was ${score}`);
