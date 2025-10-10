document.addEventListener('DOMContentLoaded', function() {
    // Для основной навигации (header nav)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            // Анимация: добавляем fade-in для меню
            if (navMenu.classList.contains('active')) {
                navMenu.style.opacity = '0';
                navMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    navMenu.style.opacity = '1';
                    navMenu.style.transform = 'translateY(0)';
                }, 10);
            }
        });

        // Закрытие меню при клике вне
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Для сайдбара (aside) с плавным выдвижением
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content'); // Для сдвига контента (опционально)

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebarToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
            // mainContent.classList.toggle('shifted'); // Если хотите сдвигать контент (раскомментируйте)

            // Плавная анимация выдвижения
            if (sidebar.classList.contains('active')) {
                sidebar.style.left = '-var(--sidebar-width)'; // Стартовое положение
                setTimeout(() => {
                    sidebar.style.left = '0'; // Выдвигаем
                }, 10);
            } else {
                sidebar.style.left = '-var(--sidebar-width)'; // Скрываем
            }
        });

        // Закрытие сайдбара при клике вне
        document.addEventListener('click', function(event) {
            if (!sidebarToggle.contains(event.target) && !sidebar.contains(event.target)) {
                sidebarToggle.classList.remove('active');
                sidebar.classList.remove('active');
                // mainContent.classList.remove('shifted');
                sidebar.style.left = '-var(--sidebar-width)';
            }
        });
    }
});