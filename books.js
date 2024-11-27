// Function to scroll to a specific category when clicking on the "Explore" button
function scrollToCategories() {
    document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
}

// Function to show a specific book category when clicked
function showCategory(categoryId) {
    const sections = document.querySelectorAll('.book-section');
    sections.forEach(section => {
        if (section.id === categoryId) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
}