document.addEventListener('DOMContentLoaded', function() {
    // Для основной навигации
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                navMenu.style.opacity = '0';
                navMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    navMenu.style.opacity = '1';
                    navMenu.style.transform = 'translateY(0)';
                }, 10);
            }
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
    const main = document.querySelector('main');  // Теперь query main без class (как в вашем HTML)

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            const isActive = sidebar.classList.toggle('active');
            sidebarToggle.classList.toggle('active', isActive);
            if (main) main.classList.toggle('shifted', isActive);  // Сдвиг main (опционально)

            if (isActive) {
                sidebar.style.left = '0';
            } else {
                sidebar.style.left = '-var(--sidebar-width)';
            }
        });

        document.addEventListener('click', function(event) {
            if (!sidebarToggle.contains(event.target) && !sidebar.contains(event.target)) {
                sidebar.classList.remove('active');
                sidebarToggle.classList.remove('active');
                if (main) main.classList.remove('shifted');
                sidebar.style.left = '-var(--sidebar-width)';
            }
        });
    }
});