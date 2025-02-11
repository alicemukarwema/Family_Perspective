// JavaScript for slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000; // 5 seconds per slide

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, slideInterval);

// Show the first slide
showSlide(currentSlide);

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle the mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hide dropdown instantly when the mouse leaves the parent
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    const menu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseleave', () => {
        menu.style.display = 'none';
    });

    dropdown.addEventListener('mouseenter', () => {
        menu.style.display = 'block';
    });
});
