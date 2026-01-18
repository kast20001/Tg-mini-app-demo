const params = new URLSearchParams(window.location.search);
const currentQuestionNumber = parseInt(params.get("question")) || 1;

const currentQuestion = questions.find(
    q => q.number === currentQuestionNumber
);

document.getElementById("questionNumber").textContent =
    `Вопрос №${currentQuestion.number}`;

document.getElementById("questionText").textContent =
    `Текст задачи\n${currentQuestion.question}`;

document.getElementById("solutionText").textContent =
    `Решение задачи\n${currentQuestion.solution}`;

// Обработчик кнопки "К вопросам"
const backToQuestionsBtn = document.getElementById('backToQuestionsBtn');
if (backToQuestionsBtn) {
    backToQuestionsBtn.addEventListener('click', function() {
        window.location.href = '../Task_content/Task_content.html?question=' + currentQuestionNumber;
    });
}

// Обработчик кнопки "Заново"
const restartBtn = document.getElementById('restartBtn');
if (restartBtn) {
    restartBtn.addEventListener('click', function() {
        window.location.href = '../Tests/Tests_prob.html';
    });
}
