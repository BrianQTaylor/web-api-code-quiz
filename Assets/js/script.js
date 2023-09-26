// Questions array
var questions = [
    {
        question: "Which command will show the committed history?",
        choices: ["git -help", "git pull", "git log", "none"],
        answer: "git log"
    },
    {
        question: "Which method in javascript allows you to merge two or more arrays?",
        choices: ["concat", "slice", "forEach", "pop"],
        answer: "concat"
    },
    {
        question: "Which Chrome tools allows you to inspect the HTML, CSS, Javascript?",
        choices: ["My Tools", "Engineering Tools", "Chrome Tools", "Developer Tools"],
        answer: "Developer Tools"
    },
    {
        question: "What expression can be used as compact version of traditional expressions?",
        choices: ["Regulator", "Arrow Function", "Grouping", "Async"],
        answer: "Arrow Function"
    },
    {
        question: "Which choice is a free front end framework for the creation of websites? ",
        choices: ["Github", "Bootstrap", "MDN Web Docs", "None"],
        answer: "Bootstrap"
    }

];

// console.log(questions)
// console.log(questions[0])
// console.log(questions[0].question)
// console.log(questions[0].choices[0])

// Global variables on HTML
var startBtnEl = document.querySelector("#start")
var questionsEl = document.querySelector("#questions")
var timerEl = document.querySelector("#timer")
var choicesEl = document.querySelector('#choices')
var sumbitBtnEl = document.querySelector('#submit')
var initialsEl = document.querySelector('#initials')
var feedbackEl = document.querySelector('#feedback')

// Global variable to track time and array
var qIndex = 0;
var time = 25 * questions.length;

var timerId;
var incorrect= 0;


// Im hiding the start page container, unhide the questions, and starting the timer: setInterval(clock,1000) callout function #2
function startQuiz() {

    var startScreenEl = document.getElementById("startPage")
    startScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    timerId = setInterval(clock, 1000);

    timerEl.textContent = time;

    getQuestion();
}

// Second function this is a reusable function. This while display a question and button choices
// Identify ID question-title textcontent = questions[qIndex].question
// forLoop
function getQuestion() {
    console.log("getquestion")
    var currentQuestion = questions[qIndex].question;

    var titleEl = document.getElementById("question-title");

    titleEl.textContent = currentQuestion;

    choicesEl.innerHTML = "";

    for (var i = 0; i < 4; i++) {
        var choiceNode = document.createElement("button");
        choiceNode.textContent = questions[qIndex].choices[i]

        choiceNode.setAttribute('class', 'choice');
        choiceNode.addEventListener("click", click)
        choicesEl.appendChild(choiceNode);
    }
}

// Here I will create a function that will penalize test takers for getting questions wrong
function click() {
    // console.log(this)
    // console.log(this.innerHTML)
// console.log(questions[qIndex].answer)
    if (this.innerHTML !== questions[qIndex].answer) {
        time -= 15;
        if (time <= 0) {
            time = 0;
       
            endQuiz();
        }
        incorrect++;
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong";
        feedbackEl.style.fontSize = "150px";
    }
    else {
        feedbackEl.textContent = "Correct";
        feedbackEl.style.fontSize = "150px";
    }
    //hides the the correc or wrong response 
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");

    }, 1500)

    //move on to the next question
    qIndex++

    if (qIndex === questions.length) {
        console.log("endQuiz")
        endQuiz();
    }
    else {
        console.log("next questions")
        getQuestion();
    }
}

// This function will end the quiz,stop the timer, and show your final score
function endQuiz() {
    clearInterval(timerId)
    if(incorrect >= 4){
        time = 0
    }
    var lastPage = document.getElementById("last-page")
    lastPage.removeAttribute("class")

    var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;

    questionsEl.setAttribute("class", "hide");
}


// Need to create seperate function for a clock to define how time should run 
function clock() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        console.log("stop time")
  
        endQuiz();
    }
}

function saveHighscore() {
    var initials = initialsEl.value.trim()

    if (initials !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("highscore")) || [];

        var newScore = {
            score: time,
            initials: initials
        };

        highscores.push(newScore)
        window.localStorage.setItem("highscore", JSON.stringify(highscores))

        window.location.href = "highscore.html"
    }
}

function checkForEnter() {
    if (event.key === "Enter") {
        saveHighscore();
    }
}

// This is my click button that will save the highscores
sumbitBtnEl.addEventListener("click", saveHighscore);

// This is my click button that will hide my my start screen
startBtnEl.addEventListener("click", startQuiz);

initialsEl.onkeyup = checkForEnter;