//  use this quizData in your app.
const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

let totalPoints = 40;
let points = 0;
let count = 0;

let para = document.getElementById("questions");
let optn0 = document.getElementById("0");
let optn1 = document.getElementById("1");
let optn2 = document.getElementById("2");
let optn3 = document.getElementById("3");
let nextBtn = document.getElementById("nxtQ");
let countdownInterval; // <-- add this line at the top
let time = 10;

// Load the question
function loadQuestion() {
    time = 10;
    para.innerText = quizData[count].question;
    optn0.innerText = quizData[count].a;
    optn1.innerText = quizData[count].b;
    optn2.innerText = quizData[count].c;
    optn3.innerText = quizData[count].d;
  
    enableOptions();
    resetButtonStyles();
    nextBtn.disabled = true;
  
    // Clear previous timer
    clearInterval(countdownInterval);
  
    // Start new timer
    const countDownEl = document.getElementById("countdown");
    countDownEl.innerText = time;
  
    countdownInterval = setInterval(() => {
      time--;
      countDownEl.innerText = time;
      if (time === 0) {
        clearInterval(countdownInterval);
        disableOptions(); // auto-disable on timeout
        nextBtn.disabled = false;
      }
    }, 1000);
  }
  

// Reset button background
function resetButtonStyles() {
  optn0.style.backgroundColor = '';
  optn1.style.backgroundColor = '';
  optn2.style.backgroundColor = '';
  optn3.style.backgroundColor = '';
}

// Answer checking
function checkAnswer(option) {
  const selected = option.innerText;
  const correct = quizData[count][quizData[count].correct];

  if (selected === correct) {
    points += 10;
    option.style.backgroundColor = 'green';
  } else {
    option.style.backgroundColor = 'red';
  }

  disableOptions();
  nextBtn.disabled = false; // Enable "Next" button after answering
}

// Option disabling/enabling
function disableOptions() {
  optn0.disabled = true;
  optn1.disabled = true;
  optn2.disabled = true;
  optn3.disabled = true;
}

function enableOptions() {
  optn0.disabled = false;
  optn1.disabled = false;
  optn2.disabled = false;
  optn3.disabled = false;
}

// Move to next question manually
nextBtn.addEventListener("click", () => {
    if (count < quizData.length - 1) {
      count++;
      if (count === quizData.length - 1) {
        nextBtn.innerText = "Submit";
      }
      loadQuestion();
    } else {
      alert("Quiz complete! Your score: " + points);
    }
  });
  

// Add event listeners
optn0.addEventListener("click", () => checkAnswer(optn0));
optn1.addEventListener("click", () => checkAnswer(optn1));
optn2.addEventListener("click", () => checkAnswer(optn2));
optn3.addEventListener("click", () => checkAnswer(optn3));

// Start quiz
loadQuestion();





