// Файл: task_content.js
let questions = [
    {
        id: 1,
        question: "В урне находится 3 красных шара и 7 синих шаров. Какова вероятность вытащить красный шар?",
        options: [
            "0,1 или 10%",
            "0,3 или 30%", 
            "0,5 или 50%",
            "0,7 или 70%"
        ],
        correct: 1,
        solution: "Решение:\nОбщее количество шаров = 3 + 7 = 10\nКоличество благоприятных исходов (красные шары) = 3\n\nВероятность = Количество благоприятных исходов / Общее количество исходов\nP(красный) = 3/10 = 0,3\n\nОтвет: 0,3 или 30%",
        explanation: "Вероятность вычисляется как отношение числа благоприятных исходов к общему числу исходов. Здесь 3 красных шара из 10."
    },
    {
        id: 2,
        question: "Найдите вероятность того, что при бросании игральной кости выпадет число, больше 4.",
        options: [
            "1/2 или 50%",
            "1/3 или ≈33,3%",
            "1/6 или ≈16,7%", 
            "2/3 или ≈66,7%"
        ],
        correct: 1,
        solution: "Решение:\nПри бросании кости возможны исходы: 1, 2, 3, 4, 5, 6\nОбщее количество исходов = 6\n\nИсходы, больше 4: это 5 и 6\nКоличество благоприятных исходов = 2\n\nВероятность = 2/6 = 1/3 ≈ 0,333\n\nОтвет: 1/3 или ≈ 0,333 или ≈ 33,3%",
        explanation: "На стандартной игральной кости 6 граней. Числа больше 4 — это только 5 и 6, то есть 2 благоприятных исхода."
    },
    {
        id: 3,
        question: "Какова вероятность выпадения решки при однократном бросании монеты?",
        options: [
            "0,25 или 25%",
            "0,5 или 50%",
            "0,75 или 75%",
            "1 или 100%"
        ],
        correct: 1,
        solution: "Решение:\nПри бросании монеты возможны 2 исхода: орёл и решка\nОбщее количество исходов = 2\nКоличество благоприятных исходов (решка) = 1\n\nВероятность = 1/2 = 0,5\n\nОтвет: 0,5 или 50%",
        explanation: "У идеальной монеты два равновероятных исхода: орёл и решка. Вероятность каждого равна 1/2."
    },
    {
        id: 4,
        question: "В колоде 52 карты. Какова вероятность вытащить туза?",
        options: [
            "1/13 или ≈7,7%",
            "1/26 или ≈3,8%",
            "1/52 или ≈1,9%",
            "1/4 или 25%"
        ],
        correct: 0,
        solution: "Решение:\nОбщее количество карт = 52\nТузов в колоде = 4 (туз пик, туз крестей, туз бубен, туз червей)\n\nВероятность = Количество тузов / Общее количество карт\nP(туз) = 4/52 = 1/13 ≈ 0,077\n\nОтвет: 1/13 или ≈ 0,077 или ≈ 7,7%",
        explanation: "В стандартной колоде 4 туза из 52 карт, что упрощается до 1/13."
    },
    {
        id: 5,
        question: "Найдите вероятность того, что две независимые монеты упадут обе орлом вверх.",
        options: [
            "1/2 или 50%",
            "1/3 или ≈33,3%",
            "1/4 или 25%",
            "1/8 или 12,5%"
        ],
        correct: 2,
        solution: "Решение:\nДля независимых событий используем формулу:\nP(A и B) = P(A) × P(B)\n\nВероятность выпадения орла на первой монете = 1/2\nВероятность выпадения орла на второй монете = 1/2\n\nВероятность обоих орлов = 1/2 × 1/2 = 1/4 = 0,25\n\nОтвет: 1/4 или 0,25 или 25%",
        explanation: "Для независимых событий вероятность их совместного наступления равна произведению вероятностей каждого события."
    },
    {
        id: 6,
        question: "В ящике 5 красных и 3 синих кубика. Какова вероятность вытащить два красных кубика подряд без возвращения?",
        options: [
            "5/14 или ≈35,7%",
            "5/8 или 62,5%",
            "3/8 или 37,5%",
            "25/64 или ≈39,1%"
        ],
        correct: 0,
        solution: "Решение:\nОбщее количество кубиков = 5 + 3 = 8\n\nПервое вытаскивание:\nВероятность вытащить красный = 5/8\n\nВторое вытаскивание (без возвращения):\nОсталось красных кубиков = 4\nОсталось всего кубиков = 7\nВероятность вытащить красный = 4/7\n\nВероятность обоих событий:\nP = 5/8 × 4/7 = 20/56 = 5/14 ≈ 0,357\n\nОтвет: 5/14 или ≈ 0,357 или ≈ 35,7%",
        explanation: "Это задача на условную вероятность. При вытаскивании без возвращения общее количество кубиков и количество красных уменьшается."
    },
    {
        id: 7,
        question: "Какова вероятность того, что при бросании двух кубиков сумма выпадет равной 7?",
        options: [
            "1/6 или ≈16,7%",
            "1/12 или ≈8,3%",
            "1/36 или ≈2,8%",
            "5/36 или ≈13,9%"
        ],
        correct: 0,
        solution: "Решение:\nОбщее количество исходов при бросании двух кубиков = 6 × 6 = 36\n\nИсходы, дающие сумму 7:\n(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\nКоличество благоприятных исходов = 6\n\nВероятность = 6/36 = 1/6 ≈ 0,167\n\nОтвет: 1/6 или ≈ 0,167 или ≈ 16,7%",
        explanation: "Сумма 7 — наиболее вероятная сумма при бросании двух кубиков, для неё существует 6 комбинаций из 36 возможных."
    },
    {
        id: 8,
        question: "В классе 15 мальчиков и 10 девочек. Какова вероятность того, что случайно выбранный ученик — девочка?",
        options: [
            "2/5 или 40%",
            "3/5 или 60%",
            "1/3 или ≈33,3%",
            "2/3 или ≈66,7%"
        ],
        correct: 0,
        solution: "Решение:\nОбщее количество учеников = 15 + 10 = 25\nКоличество девочек = 10\n\nВероятность = Количество девочек / Общее количество учеников\nP(девочка) = 10/25 = 2/5 = 0,4\n\nОтвет: 2/5 или 0,4 или 40%",
        explanation: "Вероятность = число девочек / общее число учеников. Упрощаем дробь 10/25 = 2/5."
    },
    {
        id: 9,
        question: "Найдите вероятность того, что число на случайно выбранной странице (от 1 до 100) содержит цифру 5.",
        options: [
            "1/5 или 20%",
            "19/100 или 19%",
            "1/10 или 10%",
            "9/100 или 9%"
        ],
        correct: 1,
        solution: "Решение:\nВсего страниц = 100\n\nСтраницы, содержащие цифру 5:\n- В разряде единиц: 5, 15, 25, 35, 45, 55, 65, 75, 85, 95 (10 страниц)\n- В разряде десятков: 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 (10 страниц)\n- Заметим, что 55 считается дважды, поэтому: 10 + 10 - 1 = 19\n\nВероятность = 19/100 = 0,19\n\nОтвет: 19/100 или 0,19 или 19%",
        explanation: "Нужно аккуратно посчитать все числа от 1 до 100, содержащие цифру 5, избегая двойного подсчета числа 55."
    },
    {
        id: 10,
        question: "При бросании кубика найдите вероятность выпадения чётного числа ИЛИ числа больше 4.",
        options: [
            "2/3 или ≈66,7%",
            "1/2 или 50%",
            "5/6 или ≈83,3%",
            "1/3 или ≈33,3%"
        ],
        correct: 0,
        solution: "Решение:\nПри бросании кубика возможны исходы: 1, 2, 3, 4, 5, 6\n\nЧётные числа: 2, 4, 6 (3 исхода)\nЧисла больше 4: 5, 6 (2 исхода)\n\nДля события A или B используем формулу:\nP(A или B) = P(A) + P(B) - P(A и B)\n\nЧисла, которые И чётные И больше 4: только 6 (1 исход)\n\nСчитаем все благоприятные исходы: 2, 4, 5, 6 (4 исхода)\n\nВероятность = 4/6 = 2/3 ≈ 0,667\n\nОтвет: 2/3 или ≈ 0,667 или ≈ 66,7%",
        explanation: "Используем формулу вероятности объединения событий: P(A∪B) = P(A) + P(B) - P(A∩B)"
    }
];

let currentQuestionNumber = 1;
let userAnswers = {}; // Храним ответы пользователя: {questionId: selectedOptionIndex}

// Функция инициализации страницы
function initPage() {
    console.log('initPage вызвана');
    
    // Получаем номер вопроса из URL
    const urlParams = new URLSearchParams(window.location.search);
    const questionParam = parseInt(urlParams.get('question'));
    
    console.log('Параметр из URL:', questionParam);
    
    if (questionParam && questionParam >= 1 && questionParam <= questions.length) {
        currentQuestionNumber = questionParam;
    }
    
    console.log('Текущий вопрос:', currentQuestionNumber);
    
    // Загружаем сохраненные ответы
    loadSavedAnswers();
    
    // Отображаем текущий вопрос
    displayQuestion();
    
    // Настраиваем кнопки навигации
    setupNavigation();
    
    // Настраиваем модальное окно подсказки
    setupHintModal();
    
    // Обновляем прогресс
    updateProgress();
}

// Отображение текущего вопроса
function displayQuestion() {
    console.log('displayQuestion вызвана для вопроса:', currentQuestionNumber);
    
    const question = questions[currentQuestionNumber - 1];
    
    // Обновляем номер вопроса
    const questionNumberElement = document.getElementById('question-number');
    if (questionNumberElement) {
        questionNumberElement.textContent = `Вопрос №${currentQuestionNumber}`;
    }
    
    // Обновляем текст вопроса
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Обновляем подсказку в модальном окне
    const hintTextElement = document.getElementById('hintText');
    if (hintTextElement) {
        hintTextElement.textContent = question.explanation;
    }
    
    // Отображаем варианты ответов
    displayOptions(question);
}

// Отображение вариантов ответов
function displayOptions(question) {
    const optionsContainer = document.getElementById('options-container');
    if (!optionsContainer) {
        console.error('Не найден контейнер options-container');
        return;
    }
    
    // Очищаем контейнер
    optionsContainer.innerHTML = '';
    
    // Получаем сохраненный ответ для этого вопроса
    const savedAnswerIndex = userAnswers[question.id];
    console.log('Сохраненный ответ для вопроса', question.id, ':', savedAnswerIndex);
    
    // Создаем варианты ответов
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        // Проверяем, выбран ли этот вариант
        if (savedAnswerIndex === index) {
            optionDiv.classList.add('selected');
        }
        
        // Создаем радио-кнопку (скрытую)
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = index;
        radio.id = `option-${question.id}-${index}`;
        radio.style.display = 'none';
        
        // Устанавливаем checked, если это сохраненный ответ
        if (savedAnswerIndex === index) {
            radio.checked = true;
        }
        
        // Создаем label для текста
        const label = document.createElement('div');
        label.className = 'option-label';
        label.textContent = option;
        
        // Создаем иконку раскрытия
        const expandIcon = document.createElement('svg');
        expandIcon.className = 'expand-icon';
        expandIcon.setAttribute('viewBox', '0 0 24 24');
        expandIcon.innerHTML = '<path d="M12 4l8 8-8 8" stroke="#000028" stroke-width="2" fill="none"/>';
        
        // Собираем структуру
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        optionDiv.appendChild(expandIcon);
        
        // Обработчик клика на весь вариант
        optionDiv.addEventListener('click', function(e) {
            // Если кликнули на иконку раскрытия - не выбираем вариант
            if (e.target.closest('.expand-icon')) {
                return;
            }
            
            // Снимаем выделение со всех вариантов
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
                const optRadio = opt.querySelector('input[type="radio"]');
                if (optRadio) optRadio.checked = false;
            });
            
            // Добавляем выделение текущему варианту
            optionDiv.classList.add('selected');
            
            // Устанавливаем радио-кнопку
            radio.checked = true;
            
            console.log('Выбран вариант:', index, 'для вопроса', question.id);
            
            // Сохраняем ответ
            saveAnswer(question.id, index);
        });
        
        // Обработчик клика на иконку раскрытия
        expandIcon.addEventListener('click', function(e) {
            e.stopPropagation(); // Останавливаем всплытие, чтобы не выбирался вариант
            label.classList.toggle('expanded');
            
            // Поворачиваем иконку
            expandIcon.style.transform = label.classList.contains('expanded') ? 'rotate(90deg)' : 'rotate(0deg)';
        });
        
        optionsContainer.appendChild(optionDiv);
    });
}

// Настройка модального окна подсказки
function setupHintModal() {
    const hintBtn = document.getElementById('hint-btn');
    const hintModal = document.getElementById('hintModal');
    const closeHintModal = document.getElementById('closeHintModal');
    
    if (hintBtn && hintModal) {
        hintBtn.addEventListener('click', function() {
            hintModal.classList.add('active');
        });
    }
    
    if (closeHintModal && hintModal) {
        closeHintModal.addEventListener('click', function() {
            hintModal.classList.remove('active');
        });
    }
    
    // Закрытие модального окна при клике на оверлей
    if (hintModal) {
        hintModal.addEventListener('click', function(e) {
            if (e.target === hintModal) {
                hintModal.classList.remove('active');
            }
        });
    }
}

// Сохранение ответа
function saveAnswer(questionId, answerIndex) {
    console.log('Сохранение ответа:', questionId, answerIndex);
    userAnswers[questionId] = answerIndex;
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    console.log('Ответы сохранены в localStorage:', userAnswers);
    updateProgress();
}

// Загрузка сохраненных ответов
function loadSavedAnswers() {
    const saved = localStorage.getItem('userAnswers');
    console.log('Загружено из localStorage:', saved);
    if (saved) {
        try {
            userAnswers = JSON.parse(saved);
            console.log('Ответы загружены:', userAnswers);
        } catch (e) {
            console.error('Ошибка загрузки ответов:', e);
            userAnswers = {};
        }
    }
}

// Настройка кнопок навигации
function setupNavigation() {
    console.log('setupNavigation вызвана');
    
    // ИСПРАВЛЕНО: используем правильные ID (prevBtn и nextBtn вместо prev-btn и next-btn)
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!prevBtn || !nextBtn) {
        console.error('Не найдены кнопки навигации:', {prevBtn, nextBtn});
        return;
    }
    
    console.log('Кнопки навигации найдены');
    
    // Удаляем старые обработчики
    prevBtn.onclick = null;
    nextBtn.onclick = null;
    
    if (prevBtn) {
        if (currentQuestionNumber > 1) {
            prevBtn.onclick = function() {
                console.log('Переход к предыдущему вопросу');
                // Сохраняем текущий ответ перед переходом
                saveCurrentAnswer();
                window.location.href = `Task_content.html?question=${currentQuestionNumber - 1}`;
            };
        } else {
            prevBtn.onclick = function() {
                console.log('Переход к Tests_prob.html');
                saveCurrentAnswer();
                window.location.href = '../Tests/Tests_prob.html';
            };
        }
    }
    
    if (nextBtn) {
        if (currentQuestionNumber < questions.length) {
            nextBtn.onclick = function() {
                console.log('Переход к следующему вопросу');
                // Сохраняем текущий ответ перед переходом
                saveCurrentAnswer();
                window.location.href = `Task_content.html?question=${currentQuestionNumber + 1}`;
            };
        } else {
            nextBtn.onclick = function() {
                console.log('Переход к результатам');
                // Сохраняем текущий ответ
                saveCurrentAnswer();
                
                // Рассчитываем результаты
                const results = calculateResults();
                console.log('Результаты рассчитаны:', results);
                
                // Сохраняем результаты в localStorage
                localStorage.setItem('quizResults', JSON.stringify(results));
                
                // Переходим на страницу результатов
                console.log('Переход к out_results.html');
                window.location.href = '../out_results/out_results.html';
            };
        }
    }
}

// Сохранение текущего ответа
function saveCurrentAnswer() {
    console.log('saveCurrentAnswer вызвана');
    const selectedOption = document.querySelector('.option.selected');
    
    if (selectedOption) {
        const radio = selectedOption.querySelector('input[type="radio"]');
        if (radio) {
            const questionId = questions[currentQuestionNumber - 1].id;
            const answerValue = parseInt(radio.value);
            console.log('Сохранение ответа для вопроса', questionId, ':', answerValue);
            userAnswers[questionId] = answerValue;
            localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        } else {
            console.log('Радио-кнопка не найдена в выбранном варианте');
        }
    } else {
        console.log('Выбранный вариант не найден');
    }
}

// Расчет результатов
function calculateResults() {
    let correctCount = 0;
    const detailedResults = [];
    
    questions.forEach(question => {
        const userAnswerIndex = userAnswers[question.id];
        const isCorrect = userAnswerIndex === question.correct;
        
        if (isCorrect) {
            correctCount++;
        }
        
        detailedResults.push({
            question: question.question,
            userAnswer: userAnswerIndex !== undefined ? question.options[userAnswerIndex] : 'Не отвечено',
            correctAnswer: question.options[question.correct],
            isCorrect: isCorrect,
            explanation: question.explanation
        });
    });
    
    return {
        total: questions.length,
        correct: correctCount,
        percentage: Math.round((correctCount / questions.length) * 100),
        detailed: detailedResults
    };
}

// Обновление индикатора прогресса
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    if (progressBar) {
        const progressPercent = (currentQuestionNumber / questions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
    
    if (progressText) {
        const answeredCount = Object.keys(userAnswers).length;
        progressText.textContent = `Отвечено: ${answeredCount} из ${questions.length}`;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initPage);

// Для отладки - добавим глобальные функции
window.getUserAnswers = function() {
    console.log('userAnswers:', userAnswers);
    console.log('localStorage userAnswers:', localStorage.getItem('userAnswers'));
    return userAnswers;
};

window.clearAnswers = function() {
    userAnswers = {};
    localStorage.removeItem('userAnswers');
    localStorage.removeItem('quizResults');
    console.log('Ответы очищены');
    location.reload();
};