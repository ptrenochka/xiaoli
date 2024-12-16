// Добавление обработчика событий после загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
    // Обработка кнопки "Записаться"
    const scrollToLessonsButton = document.querySelector('.cta-button[href="#lessons"]');
    
    if (scrollToLessonsButton) {
        scrollToLessonsButton.addEventListener('click', (event) => {
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            const lessonsSection = document.querySelector('#lessons');
            
            if (lessonsSection) {
                lessonsSection.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                });
            }
        });
    }

    // Логика для бургер-меню
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav');

    // При клике на бургер, меняем классы для анимации и видимости меню
    burger.addEventListener('click', () => {
        burger.classList.toggle('active'); // Переключаем класс active для бургер-меню
        navMenu.classList.toggle('active'); // Показываем/скрываем меню
    });

    // Закрытие меню при клике на пункт навигации (только на мобильных устройствах)
    const navLinks = navMenu.querySelectorAll('li');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) { // Закрываем меню только на мобильных устройствах
                burger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
});
