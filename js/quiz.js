// 1. Create a multidimensional array to hold quiz questions and answers

const questions = [
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']
];

// 2. Store the number of questions answered correctly and incorrectly
// Create two empty arrays. One to hold correct answers. The other to store incorrect answers.
const correct = [];
const incorrect = [];
let correctAnswers = 0;



/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);

  if (response === answer) {
    correctAnswers++;
    correct.push(question); //Push the question of the correct answer to the correct array.
  } else {
    incorrect.push(question); //Push the question of the incorrect answer to the incorrect array.
  }
}

// Add a function to display the values inside the correct and incorrect arrays in HTML ordered lists.

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}



// 4. Display the number of correct answers to the user
// Display which questions the user got correct, and which ones the user got wrong.

let html = `
<h1>You got ${correctAnswers} question(s) correct.</h1>
<h2>You got these questions right:</h2>
<ol>${ createListItems(correct)}</ol>

<h2>You got these question(s) wrong:</h2>
<ol>${createListItems(incorrect)}</ol>


`;

document.querySelector('main').innerHTML = html;
