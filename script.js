// script.js

let currentCategory = '';
let currentQuizData = [];
let currentQuestion = 0;
let score = 0;


const quoteBox = document.getElementById('quote');
const optionsBox = document.getElementById('options');
const resultBox = document.getElementById('result');
const scoreBox = document.getElementById('score');

function showQuestion() {
    if (currentQuestion >= currentQuizData.length) {
        showGameOver();
        return;
    }

    const q = currentQuizData[currentQuestion];
    quoteBox.textContent = `"${q.quote}"`;
    optionsBox.innerHTML = '';
    resultBox.textContent = '';
    resultBox.classList.remove("visible");

    scoreBox.textContent = `Score: ${score} | Question: ${currentQuestion + 1} of ${currentQuizData.length}`;

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option));
        optionsBox.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = currentQuizData[currentQuestion].answer;
    if (selected === correct) {
        resultBox.textContent = "✅ Correct!";
        resultBox.style.color = "lightgreen";
        score++;
    } else {
        resultBox.textContent = `❌ Nope! It was "${correct}"`;
        resultBox.style.color = "salmon";
    }

    resultBox.classList.add("visible");

    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 1500);
}

function showGameOver() {
    quoteBox.textContent = "🎉 Quiz Complete!";
    optionsBox.innerHTML = '';
    resultBox.textContent = `Your final score: ${score} / ${quizData.length}`;
    resultBox.style.color = "#fff";
    scoreBox.textContent = '';

    const restartBtn = document.createElement('button');
    restartBtn.textContent = "Play Again";
    restartBtn.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        showQuestion();
    });
    optionsBox.appendChild(restartBtn);
}

function startQuiz(category) {
  currentCategory = category;
  currentQuizData = quizData[category];
  currentQuestion = 0;
  score = 0;

  document.getElementById("category-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";

  showQuestion();
}
