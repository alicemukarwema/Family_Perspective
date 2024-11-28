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

