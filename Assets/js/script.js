// Questions array
var questions = [
    {
        question: "what? 1",
        choices: ["no", "yes", "maybe", "none"],
        answer: "none"
    },
    {
        question: "what? 2",
        choices: ["no", "yes", "maybe", "none"],
        answer: "none"
    },
    {
        question: "what? 3",
        choices: ["no", "yes", "maybe", "none"],
        answer: "none"
    },
    {
        question: "what? 4",
        choices: ["no", "yes", "maybe", "none"],
        answer: "none"
    },
    {
        question: "what? 5",
        choices: ["no", "yes", "maybe", "none"],
        answer: "none"
    }

];

console.log(questions)


// Global variables on HTML
var startBtnEl = document.querySelector("#start")
var questionsEL = document.querySelector("#questions")
var timerEl = document.querySelector("#time")
var choicesEl = document.querySelector('#choices')
var sumbitBtn = document.querySelector('#sumbit')
var initialsEl = document.querySelector('#initials')
var feedbackEl = document.querySelector('#feedback')

// Global variable to track time and array
var qIndex = 0;
var time = 25 * questions.length;
var timerId;



// Im hiding the start page container, unhide the questions, and starting the timer: setInterval(clock,1000) callout function #2
function startQuiz() {
    var startScreenEl = document.getElementById("startPage")
    startScreenEl.setAttribute("class", "hide");

    questionsEL.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;

    getQuestion();
}

// Second function this is a reusable function. This while display a question and button choices
// Identify ID question-title textcontent = questions[qIndex].question
// forLoop
function getQuestion() {

}



// Need to create seperate function for a clock to define how time should run 
function clock() {
    time--;
    // display the value of time because its been impacted
}



















// This is my click button that will hide my my start screen
startBtnEl.addEventListener("click", startQuiz)

