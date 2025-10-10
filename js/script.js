document.addEventListener('DOMContentLoaded', function() {
    // Для основной навигации
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Для сайдбара
    const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
        const isActive = sidebar.classList.toggle('active');
        sidebarToggle.classList.toggle('active');
            
            // Сдвигаем и уменьшаем основной контент
            if (mainContent) mainContent.classList.toggle('shifted', isActive);
        });

        // Закрытие при клике вне сайдбара
        document.addEventListener('click', function(event) {
            if (sidebar.classList.contains('active') && 
                !sidebarToggle.contains(event.target) && 
                !sidebar.contains(event.target)) {
                sidebar.classList.remove('active');
                sidebarToggle.classList.remove('active');
                if (mainContent) mainContent.classList.remove('shifted');
            }
        });

        // Закрытие при нажатии Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                sidebarToggle.classList.remove('active');
                if (mainContent) mainContent.classList.remove('shifted');
            }
        });
    }
});