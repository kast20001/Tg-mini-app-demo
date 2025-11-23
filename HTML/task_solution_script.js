const params = new URLSearchParams(window.location.search);
const currentQuestionNumber = parseInt(params.get("question")) || 2;

const currentQuestion = questions.find(
    q => q.number === currentQuestionNumber
);

document.getElementById("questionNumber").textContent =
    `Вопрос №${currentQuestion.number}`;

document.getElementById("questionText").textContent =
    `Текст задачи\n${currentQuestion.question}`;

document.getElementById("solutionText").textContent =
    `Решение задачи\n${currentQuestion.solution}`;
