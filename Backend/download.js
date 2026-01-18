      // Ждем полной загрузки страницы
      window.addEventListener('load', function() {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        
        // Показываем контент с анимацией
        setTimeout(function() {
          content.classList.add('show');
        }, 300);
        
        // Скрываем анимацию загрузки
        setTimeout(function() {
          loader.classList.add('hidden');
          
          // Удаляем элемент из DOM после завершения анимации
          setTimeout(function() {
            loader.style.display = 'none';
          }, 500); // Должно совпадать с временем transition
        }, 1000); // Показываем анимацию минимум 1 секунду, потому что ну не зря же мы страдали
      });
      
      // На случай, если страница загрузилась быстро, но DOM еще не готов
      document.addEventListener('DOMContentLoaded', function() {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        
        // Уже показываем контент, но анимация загрузки останется сверху
        content.classList.add('show');
      });