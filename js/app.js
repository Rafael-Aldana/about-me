'use strict';

console.log('Hello world!');

// 1. Get name and give greeting
let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}. Please answer the remaining questions in a yes/no or y/n format.`);
// 2. prompt for 5 y/n q's and alert user to correct/incorrect
let q1Guess = prompt('Am I a Navy veteran?');
if (q1Guess[0].toLowerCase() === 'y') {
  // console.log('Wrong!');
  alert('Wrong!');
} else {
  // console.log('Correct!');
  alert('Correct!');
}
let q2Guess = prompt('Am I from New York?');
if (q2Guess[0].toLowerCase() === 'y') {
  // console.log('Wrong!');
  alert('Wrong!');
} else {
  // console.log('Correct!');
  alert('Correct!');
}
let q3Guess = prompt('Am I a college graduate?');
if (q3Guess[0].toLowerCase() === 'y') {
  // console.log('Wrong!');
  alert('Wrong!');
} else {
  // console.log('Correct!');
  alert('Correct!');
}
let q4Guess = prompt('Have I ever lived in Scotland?');
if (q4Guess[0].toLowerCase() === 'y') {
  // console.log('Wrong!');
  alert('Wrong!');
} else {
  // console.log('Correct!');
  alert('Correct!');
}
let q5Guess = prompt('Am I technologically literate?');
if (q5Guess[0].toLowerCase() === 'y') {
  // console.log('Wrong!');
  alert('Wrong!');
} else {
  // console.log('Correct!');
  alert('Correct!');
}
// 3. give personalized message
alert(`Thanks for playing ${userName}`);
