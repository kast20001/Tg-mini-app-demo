// out_results_script.js
document.addEventListener('DOMContentLoaded', function() {
    displayResults();
    setupResultButtons();
});

// Отображение результатов
function displayResults() {
    // Получаем результаты из localStorage
    const results = JSON.parse(localStorage.getItem('quizResults'));
    
    if (!results) {
        // Если результатов нет, показываем сообщение
        document.querySelector('.result-container').innerHTML = 
            '<div class="no-results"><p>Результаты не найдены. Пройдите тест сначала.</p></div>';
        return;
    }
    
    // Отображаем время (если есть) или заглушку
    displayTime();
    
    // Отображаем оценку
    displayGrade(results);
    
    // Отображаем иконку в зависимости от результата
    displayResultIcon(results);
    
    // Отображаем подсветку ответов в сетке
    displayAnswersGrid(results);
}

// Отображение времени (заглушка, если не реализовано)
function displayTime() {
    const timeElement = document.getElementById('resultTime');
    if (timeElement) {
        // У нас пока нет норм таймера, поэтому просто заглушка, потом обновим
        timeElement.textContent = 'Время прохождения: --:--';
    }
}

// Отображение оценки
function displayGrade(results) {
    const gradeElement = document.getElementById('resultGrade');
    if (gradeElement) {
        gradeElement.textContent = `${results.correct}/${results.total}`;
    }
}

// Отображение иконки результата
function displayResultIcon(results) {
    const iconElement = document.getElementById('resultIcon');
    if (!iconElement) return;
    
    const correctCount = results.correct;
    
    if (correctCount >= 9) {
        iconElement.innerHTML = '<img src="../../Vis_content/Goblet.svg" alt="Отлично">';
    } else if (correctCount >= 7) {
        iconElement.innerHTML = '<img src="../../Vis_content/Fire.svg" alt="Хорошо">';
    } else if (correctCount >= 4) {
        iconElement.innerHTML = '<img src="../../Vis_content/Owl.svg" alt="Нормально">';
    } else {
        iconElement.innerHTML = '<img src="../../Vis_content/Wilted_rose.svg" alt="Плохо">';
    }
}

// Отображение подсветки ответов в сетке
function displayAnswersGrid(results) {
    const answerItems = document.querySelectorAll('.answer-item');
    
    answerItems.forEach((item, index) => {
        // Проверяем, есть ли данные для этого вопроса
        if (index < results.detailed.length) {
            const questionResult = results.detailed[index];
            
            if (questionResult.isCorrect) {
                item.classList.add('correct');
                item.classList.remove('incorrect');
            } else {
                item.classList.add('incorrect');
                item.classList.remove('correct');
            }
            
            // Добавляем обработчик клика для отображения деталей
            item.addEventListener('click', function() {
                showQuestionDetails(questionResult, index + 1);
            });
        }
    });
}

// Показ деталей вопроса при клике на номер
function showQuestionDetails(questionResult, questionNumber) {
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'question-modal-overlay';
    modal.innerHTML = `
        <div class="question-modal">
            <div class="question-modal-header">
                <h3>Вопрос ${questionNumber}</h3>
                <button class="close-modal">×</button>
            </div>
            <div class="question-modal-content">
                <p><strong>Вопрос:</strong> ${questionResult.question}</p>
                <p><strong>Ваш ответ:</strong> ${questionResult.userAnswer}</p>
                <p><strong>Правильный ответ:</strong> ${questionResult.correctAnswer}</p>
                ${questionResult.explanation ? `<p><strong>Объяснение:</strong> ${questionResult.explanation}</p>` : ''}
                <div class="question-status ${questionResult.isCorrect ? 'correct' : 'incorrect'}">
                    ${questionResult.isCorrect ? '✅ Правильно' : '❌ Неправильно'}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие модального окна
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Закрытие при клике на оверлей
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Настройка кнопок
function setupResultButtons() {
    const buttons = document.querySelectorAll('.result-buttons-container .btn');
    
    if (buttons.length >= 1) {
        buttons[0].addEventListener('click', function() {
            window.location.href = '../../index.html';
        });
    }
    
    if (buttons.length >= 2) {
        buttons[1].addEventListener('click', function() {
            window.location.href = '../../Tests/Tests_prob.html';
        });
    }
    
    if (buttons.length >= 3) {
        buttons[2].addEventListener('click', function() {
            // Очищаем сохраненные ответы и результаты
            localStorage.removeItem('userAnswers');
            localStorage.removeItem('quizResults');
            window.location.href = '../../Task_content/Task_content.html?question=1';
        });
    }
}

// Добавление стилей для модального окна и подсветки
function addResultStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Стили для подсветки ответов */
        .answer-item {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .answer-item.correct {
            background-color: #4CAF50 !important;
            color: white !important;
            border-color: #4CAF50 !important;
        }
        
        .answer-item.incorrect {
            background-color: #f44336 !important;
            color: white !important;
            border-color: #f44336 !important;
        }
        
        .answer-item:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        /* Стили для модального окна */
        .question-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .question-modal {
            background-color: white;
            border-radius: 12px;
            padding: 24px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            animation: fadeIn 0.3s ease;
        }
        
        .question-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 2px solid #333;
        }
        
        .question-modal-header h3 {
            margin: 0;
            color: #333;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 24px;
            color: #333;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .close-modal:hover {
            color: #f44336;
            transform: scale(1.1);
        }
        
        .question-modal-content {
            line-height: 1.6;
            color: rgb(51, 51, 51);
        }
        
        .question-modal-content p {
            margin: 10px 0;
        }
        
        .question-status {
            font-weight: bold;
            margin-top: 15px;
            padding: 8px 12px;
            border-radius: 5px;
            display: inline-block;
        }
        
        .question-status.correct {
            background-color: #4CAF50;
            color: white;
        }
        
        .question-status.incorrect {
            background-color: #f44336;
            color: white;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Сообщение об отсутствии результатов */
        .no-results {
            text-align: center;
            padding: 40px;
            background: #f8f9fa;
            border-radius: 10px;
            margin: 20px 0;
            grid-column: 1 / -1;
        }
        
        /* Иконка результата */
        .result-icon img {
            width: 80px;
            height: 80px;
            object-fit: contain;
        }
    `;
    document.head.appendChild(style);
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    addResultStyles();
    displayResults();
    setupResultButtons();
});