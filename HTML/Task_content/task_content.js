// task_content.js

// Функция для получения текущего номера вопроса из URL
function getCurrentQuestionNumber() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("question")) || 1;
}

// Функция для обновления отображения вопроса
function updateQuestionDisplay() {
    const questionNumber = getCurrentQuestionNumber();
    const currentQuestion = questions.find(q => q.number === questionNumber);
    
    if (!currentQuestion) {
        console.error("Вопрос не найден!");
        return;
    }
    
    // Обновляем номер вопроса
    const questionNumberElement = document.querySelector('.question-number');
    if (questionNumberElement) {
        questionNumberElement.textContent = `Вопрос №${questionNumber}`;
    }
    
    // Обновляем текст задачи
    const taskTextElement = document.querySelector('.task-text');
    if (taskTextElement) {
        taskTextElement.textContent = currentQuestion.question;
    }
    
    // Обновляем кнопки навигации
    updateNavigationButtons(questionNumber);
    
    // Обновляем текст подсказки в модальном окне
    const hintTextElement = document.querySelector('.modal-body');
    if (hintTextElement) {
        // Здесь можно добавить подсказку для каждого вопроса
        // Например, показывать общую формулу или совет
        hintTextElement.textContent = getHintForQuestion(questionNumber);
    }
}

// Функция для получения подсказки для вопроса
function getHintForQuestion(questionNumber) {
    const hints = {
        1: "Вероятность = (благоприятные исходы) / (все возможные исходы). В урне 3 красных и 7 синих шаров, всего 10 шаров.",
        2: "На кубике 6 граней. Числа больше 4: это 5 и 6.",
        3: "У монеты 2 равновероятных исхода: орёл и решка.",
        4: "В колоде 52 карты, из них 4 туза.",
        5: "Для независимых событий: P(A и B) = P(A) × P(B).",
        6: "При последовательном извлечении без возвращения общее количество предметов уменьшается.",
        7: "При бросании двух кубиков всего 36 возможных исходов.",
        8: "Вероятность = (количество девочек) / (всего учеников).",
        9: "Страницы с цифрой 5: смотрим отдельно единицы и десятки, не забывая про пересечение (55).",
        10: "Используйте формулу P(A∪B) = P(A) + P(B) - P(A∩B)."
    };
    
    return hints[questionNumber] || "Используйте формулу вероятности: P = благоприятные исходы / все возможные исходы";
}

// Функция для обновления кнопок навигации
function updateNavigationButtons(currentQuestionNumber) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
    if (currentQuestionNumber > 1) {
        prevBtn.onclick = function() {
            window.location.href = `Task_content.html?question=${currentQuestionNumber - 1}`;
        };
    } else {
        prevBtn.onclick = function() {
            // Переход к Tests_prob.html в папке Tests, которая на уровень выше
            window.location.href = '../Tests/Tests_prob.html';
        };
    }
}

if (nextBtn) {
    if (currentQuestionNumber < questions.length) {
        nextBtn.onclick = function() {
            window.location.href = `Task_content.html?question=${currentQuestionNumber + 1}`;
        };
    } else {
        nextBtn.onclick = function() {
            // Переход к out_results.html в папке out_results, которая на уровень выше
            window.location.href = '../out_results/out_results.html';
        };
    }
}
}

// Функция для инициализации расширяемых вариантов ответа
function initExpandableOptions() {
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        const text = option.querySelector('.option-text');
        const icon = option.querySelector('.expand-icon');
        
        if (!text || !icon) return;
        
        // Проверяем, нужно ли показывать значок раскрытия
        const needsExpand = text.scrollWidth > text.clientWidth;
        
        if (needsExpand) {
            icon.style.opacity = '0.5';
            icon.style.cursor = 'pointer';
            
            // Добавляем обработчик клика на иконку
            icon.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (text.classList.contains('expanded')) {
                    text.classList.remove('expanded');
                    // Возвращаем иконку к стрелке вниз
                    icon.innerHTML = '<path d="M12 4l8 8-8 8" stroke="#000028" stroke-width="2" fill="none"/>';
                } else {
                    text.classList.add('expanded');
                    // Меняем иконку на стрелку вверх
                    icon.innerHTML = '<path d="M12 20l-8-8 8-8" stroke="#000028" stroke-width="2" fill="none"/>';
                }
            });
        } else {
            icon.style.display = 'none';
        }
    });
}

// Функция для инициализации модального окна с подсказкой
function initHintModal() {
    const hintButton = document.querySelector('.hint-button');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeButton = document.querySelector('.close-button');
    
    if (!hintButton || !modalOverlay) return;
    
    hintButton.addEventListener('click', function() {
        modalOverlay.classList.add('active');
    });
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
        });
    }
    
    // Закрытие модального окна при клике вне его содержимого
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
}

// Функция для инициализации обработки выбора вариантов ответа
function initOptionSelection() {
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Убираем выделение у всех вариантов
            options.forEach(opt => {
                opt.style.backgroundColor = '#fff';
                opt.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            });
            
            // Выделяем выбранный вариант
            this.style.backgroundColor = '#e6f7ff';
            this.style.boxShadow = '0 0 0 2px var(--accent-color)';
            
            // Можно добавить логику проверки правильности ответа
            // checkAnswer(this.querySelector('.option-text').textContent);
        });
    });
}

// Функция для проверки правильности ответа (заглушка - можно расширить)
function checkAnswer(selectedAnswer) {
    const questionNumber = getCurrentQuestionNumber();
    const currentQuestion = questions.find(q => q.number === questionNumber);
    
    // Здесь можно добавить логику проверки правильности ответа
    // Например, сравнить selectedAnswer с правильным ответом из массива questions
    console.log(`Выбран ответ: ${selectedAnswer} для вопроса ${questionNumber}`);
    
    // Временное решение: показываем правильное решение
    // alert(`Правильное решение:\n\n${currentQuestion.solution}`);
    
    // Можно добавить кнопку "Показать решение" вместо alert
}

// Функция для добавления клавиатурной навигации
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        const currentQuestionNumber = getCurrentQuestionNumber();
        
        if (e.key === 'ArrowLeft') {
            // Переход к предыдущему вопросу
            if (currentQuestionNumber > 1) {
                window.location.href = `Task_content.html?question=${currentQuestionNumber - 1}`;
            }
        } else if (e.key === 'ArrowRight') {
            // Переход к следующему вопросу
            if (currentQuestionNumber < questions.length) {
                window.location.href = `Task_content.html?question=${currentQuestionNumber + 1}`;
            }
        } else if (e.key === 'h' || e.key === 'H') {
            // Показать подсказку по нажатию H
            const modalOverlay = document.querySelector('.modal-overlay');
            if (modalOverlay) {
                modalOverlay.classList.add('active');
            }
        } else if (e.key === 'Escape') {
            // Закрыть модальное окно по Escape
            const modalOverlay = document.querySelector('.modal-overlay');
            if (modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        }
    });
}

// Функция для инициализации страницы
function initPage() {
    updateQuestionDisplay();
    initExpandableOptions();
    initHintModal();
    initOptionSelection();
    initKeyboardNavigation();
    
    // Обновляем заголовок страницы
    const questionNumber = getCurrentQuestionNumber();
    document.title = `Вопрос ${questionNumber} - Основы теории вероятностей`;
}

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, что переменная questions доступна
    if (typeof questions === 'undefined') {
        console.error('Ошибка: массив questions не загружен!');
        
        // Показываем сообщение об ошибке
        const taskTextElement = document.querySelector('.task-text');
        if (taskTextElement) {
            taskTextElement.textContent = 'Ошибка загрузки вопросов. Пожалуйста, проверьте подключение файла с вопросами.';
        }
        return;
    }
    
    // Инициализируем страницу
    initPage();
    
    // Добавляем прогресс-бар (опционально)
    addProgressBar();
});

// Функция для добавления прогресс-бара (опционально)
function addProgressBar() {
    const questionNumber = getCurrentQuestionNumber();
    const totalQuestions = questions.length;
    const progress = (questionNumber / totalQuestions) * 100;
    
    // Создаем прогресс-бар если его еще нет
    const header = document.querySelector('.header');
    if (header && !document.querySelector('.progress-bar')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.cssText = `
            width: 100%;
            height: 4px;
            background: #e0e0e0;
            border-radius: 2px;
            margin-top: 10px;
            overflow: hidden;
        `;
        
        const progressFill = document.createElement('div');
        progressFill.style.cssText = `
            width: ${progress}%;
            height: 100%;
            background: var(--accent-color);
            transition: width 0.3s ease;
        `;
        
        progressBar.appendChild(progressFill);
        header.appendChild(progressBar);
    }
}

// Обработка изменения размера окна (для адаптивности)
window.addEventListener('resize', function() {
    // Переинициализируем расширяемые опции при изменении размера окна
    initExpandableOptions();
});

// Экспортируем функции для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCurrentQuestionNumber,
        updateQuestionDisplay,
        initExpandableOptions,
        initHintModal,
        initPage
    };
}