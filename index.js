document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const burgerMenu = document.getElementById('burgerMenu');
    const navList = document.getElementById('navList');
    const scrollToTop = document.getElementById('scrollToTop');

    function updateMenuVisibility() {
        if (window.innerWidth <= 768) {
            burgerMenu.style.display = 'block';
            navList.style.display = 'none';
        } else {
            burgerMenu.style.display = 'none';
            navList.style.display = 'flex';
        }
    }

    updateMenuVisibility();

    window.addEventListener('resize', updateMenuVisibility);

    burgerMenu.addEventListener('click', function() {
        if (navList.style.display === 'none') {
            navList.style.display = 'flex';
        } else {
            navList.style.display = 'none';
        }
    });

    scrollToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTop.style.display = 'block';
        } else {
            scrollToTop.style.display = 'none';
        }
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
