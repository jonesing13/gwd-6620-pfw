// a 5-question quiz on the Hitchhiker's Guide to the Galaxy
let currentQuestion;
let input;
let response;
let responseColor = 'white';
let incorrectCount = 0;
let quizItems = [
    {
        question: "what is the answer to the ultimate question of life, the universe and everything?",
        answer: "42",
    },
    {
        question: "if time is an illusion, what is doubly so?",
        answer: "lunchtime",
    },
    {
        question: "what day could arthur never get the hang of?",
        answer: "thursday",
    },
    {
        question: "fill in the blank: anyone who is capable of getting themselves made _______ should on no account be allowed to do the job",
        answer: "president",
    },
    {
        question: "fill in the blank: \'don\'t _______!\'",
        answer: "panic",
    }
]

// randomize the next question shown to the user
function nextQuestion() {
    // check if they won (got 5 right)
    if(quizItems.length < 1) {
        window.alert('you won!');
        return;
    } else if(incorrectCount > 4) {
        window.alert('what a bummer! looks like you lost :-((((');
        return;
    }
    const randomItemSelector = Math.floor(Math.random() * quizItems.length);
    return quizItems[randomItemSelector];
}

// validate the user's input against the 'answer'
function validateQuestion() {
    if (currentQuestion.answer === input.value()) {
        // TODO ideal to transform both answer and value to lowercase
        // remove correct answer from array
        quizItems = quizItems.filter(quizItemsObj => {
            return currentQuestion.answer !== quizItemsObj.answer;
        });
        // this is the feedback for 'correct' user input
        response = 'nailed it! next question';
        responseColor = 'white';
    } else {
        // this is the feedback for 'incorrect' user input
        incorrectCount += 1;
        console.log(incorrectCount);
        response = 'darn, that\'s not the answer we were looking for! try another question\nremember to use all lowercase letters';
        responseColor = 'yellow';
    }
    currentQuestion = nextQuestion();
    input.value(''); // empties input field after submission
    if(currentQuestion) { // if currentQuestion isn't empty (user has more questions to answer correctly), keep going
        message = currentQuestion.question;
    }
}
currentQuestion = nextQuestion();
let message = currentQuestion.question;


// reset incorrect count, 'restart' quiz
function startOver() {
    incorrectCount = 0;
    response = '';
    currentQuestion = nextQuestion();
    message = currentQuestion.question;
    input.value ('');
}

function setup() {
    createCanvas(800, 600);
    heading = createElement('h1', ['A Hitchhiker\'s Guide to the Galaxy Quiz &#128077;']);
    heading.position(100, 50);
    input = createInput('');
    input.size(250, 24);
    input.position(100, 280);
    submitButton = createButton('submit response');
    submitButton.size(160, 24);
    submitButton.position(100, 310);
    submitButton.mousePressed(validateQuestion);
    resetButton = createButton('start over');
    resetButton.size(110, 24);
    resetButton.position (94, 530);
    resetButton.mousePressed(startOver);
}

function draw() {
    background('#275363');
    textSize(24);
    textWrap(WORD);
    text(message, 65, 150, 600); // third number sets max width to ensure textWrap works
    fill(responseColor);
    text(response, 65, 320, 600);
    textSize(16);
    fill('white');
    text('watch out! if you submit 5 wrong answers, you\'ll lose!!\nyou currently have ' + incorrectCount + ' wrong answers.', 65, 450, 600);
}