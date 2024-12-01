// scripts.js

// Initialize ScrollReveal
document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.hero-section h1', { 
        origin: 'top', 
        distance: '50px', 
        duration: 1000, 
        delay: 200 
    });

    ScrollReveal().reveal('.hero-section p', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 400 
    });

    ScrollReveal().reveal('section h2', { 
        origin: 'left', 
        distance: '50px', 
        duration: 800, 
        delay: 200 
    });

    ScrollReveal().reveal('.card', { 
        origin: 'bottom', 
        distance: '40px', 
        duration: 1000, 
        interval: 200 
    });

    ScrollReveal().reveal('.address', { 
        origin: 'top', 
        distance: '30px', 
        duration: 1000, 
        delay: 300 
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Collapse on Scroll (Optional)
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

 document.addEventListener("DOMContentLoaded", function () {
            var myCarousel = document.querySelector('#coursesCarousel');
            var carousel = new bootstrap.Carousel(myCarousel, {
                interval: 3000,  // Slide transition interval (3 seconds)
                ride: 'carousel', // Auto start the carousel
                pause: 'hover',   // Pause on hover
            });
        });
