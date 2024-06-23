document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksMobile = document.querySelector('.nav-links-mobile');

    navToggle.addEventListener('click', function() {
        navLinksMobile.classList.toggle('active');
    });
});
