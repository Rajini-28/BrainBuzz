const questions = [
    {
        question: "What does AI stand for?",
        options: [
            "Artificial Intelligence",
            "Automated Information",
            "Advanced Internet",
            "Artificial Integration"
        ],
        answer: "Artificial Intelligence"
    },

    {
        question: "Which language is commonly used in Data Science?",
        options: [
            "HTML",
            "Python",
            "CSS",
            "XML"
        ],
        answer: "Python"
    },

    {
        question: "What does ML stand for?",
        options: [
            "Machine Learning",
            "Manual Logic",
            "Machine Language",
            "Modern Learning"
        ],
        answer: "Machine Learning"
    },

    {
        question: "Which of these is a Python data type?",
        options: [
            "String",
            "HTML",
            "CSS",
            "Browser"
        ],
        answer: "String"
    },

    {
        question: "Which symbol is used for comments in Python?",
        options: [
            "//",
            "#",
            "/*",
            "<!--"
        ],
        answer: "#"
    },

    {
        question: "What is the full form of CPU?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing Utility"
        ],
        answer: "Central Processing Unit"
    },

    {
        question: "Which technology is used to store data in rows and columns?",
        options: [
            "Database",
            "Compiler",
            "Browser",
            "Operating System"
        ],
        answer: "Database"
    },

    {
        question: "Which one is an example of supervised learning?",
        options: [
            "Classification",
            "Random guessing",
            "File compression",
            "Web browsing"
        ],
        answer: "Classification"
    },

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which field focuses on extracting useful information from data?",
        options: [
            "Data Science",
            "Web Design",
            "Networking",
            "Graphic Design"
        ],
        answer: "Data Science"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result");
const scoreElement = document.getElementById("score");

function showQuestion() {

    const current = questions[currentQuestion];

    questionElement.textContent =
        `${currentQuestion + 1}. ${current.question}`;

    optionsElement.innerHTML = "";

    current.options.forEach(option => {

        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(button, option);
        });

        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedButton, selectedAnswer) {

    const correctAnswer = questions[currentQuestion].answer;

    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }
}

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {

    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    scoreElement.textContent =
        `You scored ${score} out of ${questions.length}!`;
}

document.getElementById("restart-btn").addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;

    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");

    showQuestion();
});

showQuestion();