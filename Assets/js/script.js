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
var timerEl = document.querySelector("#timer")
var choicesEl = document.querySelector('#choices')
var sumbitBtnEl = document.querySelector('#sumbit')
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

    var currentQuestion = questions[currentQuestionIndex];

    var titleEl = document.getElementById("question-title");

    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {

        var choiceNode = document.createElement("button");
        
        choiceNode.setAttribute('class','choice');

        choiceNode.setAttribute('value', choice);

choiceNode.onClick = click;

choicesEl.appendChild(choiceNode);

    });
}

// Here I will create a function that will penalize test takers for getting questions wrong
function click () {
if (this.value !== questions[qIndex].answer){
    time -= 15;
    if(time < 0) {
        time = 0
    }

    timerEl.textContent = time
    feedbackEl.textContent = "Wrong";
    feedbackEl.style.fontSize = "150px";
  } 
  else {
    feedbackEl.textContent = "Correct";
    feedbackEl.style.fontSize = "150px";
}

feedbackEl.setAttribute("class", "feedback");
setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");

},1500)

qIndex++

if (qIndex === question.length) {
    endQuiz();}
    else {
        getQuestion();
    }
}




// Need to create seperate function for a clock to define how time should run 
function clock() {
    time--;
    // display the value of time because its been impacted
}
















// This is my click button that will save the highscores
startBtnEl.addEventListener("click", saveHighscore)


// This is my click button that will hide my my start screen
startBtnEl.addEventListener("click", startQuiz)

