// Вывод времени в формате mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

const resultTimeInSeconds = 70;

document.getElementById('resultTime').textContent = 'Время прохождения: ' + formatTime(resultTimeInSeconds);

// Массив с правильными ответами и покраска соответствующих заданий
const answersStatus = [false, true, false, false, true, false, false, false, false, false];

const answerItems = document.querySelectorAll('.answer-item');

answerItems.forEach((item, index) => {
    if (answersStatus[index]) {
        item.classList.add('correct');
        item.classList.remove('incorrect');
    } else {
        item.classList.add('incorrect');
        item.classList.remove('correct');
    }

    // Получение числа правильных ответов из массива
    const correctCount = answersStatus.filter(value => value).length;

    document.getElementById('resultGrade').textContent = correctCount + '/10';

    // Задаём картинку в зависимости от количества правильных ответов
    const iconElement = document.getElementById('resultIcon');
    if (correctCount >= 9) {
        iconElement.innerHTML = '<img src="../Vis_content/Goblet.svg" alt="Отлично">';
    } else if (correctCount >= 7) {
        iconElement.innerHTML = '<img src="../Vis_content/Fire.svg" alt="Хорошо">';
    } else if (correctCount >= 4) {
        iconElement.innerHTML = '<img src="../Vis_content/Owl.svg" alt="Нормально">';
    } else {
        iconElement.innerHTML = '<img src="../Vis_content/Wilted_rose.svg" alt="Плохо">';
    }});