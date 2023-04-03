document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll
    var scroll = new SmoothScroll('nav a[href*="#"]', {
        speed: 800
    });

    // AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out'
    });
});
