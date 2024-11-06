function toggleMenu() {
    document.querySelector('nav').classList.toggle('active');
}

function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
}

const resources = [
    { type: 'Book', title: 'Effective Parenting Strategies' },
    { type: 'Book', title: 'Marriage and Communication' },
    { type: 'Article', title: 'Building Strong Marriages' },
    { type: 'Article', title: 'The Role of Family Environment' },
    { type: 'PDF', title: 'Family Dynamics Guide' },
    { type: 'PDF', title: 'Parenting Through the Years' },
    { type: 'Reading', title: 'Child Development Basics' },
    { type: 'Reading', title: 'The Science of Relationships' }
];

function searchResources() {
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (query) {
        const filteredResources = resources.filter(resource => 
            resource.title.toLowerCase().includes(query) ||
            resource.type.toLowerCase().includes(query)
        );

        filteredResources.forEach(resource => {
            const resultItem = document.createElement('li');
            resultItem.textContent = `${resource.type}: ${resource.title}`;
            searchResults.appendChild(resultItem);
        });
    }
}

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