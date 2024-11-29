// Function to show the selected podcast section and hide others
function showPodcastSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.podcast-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// By default, show the "Latest Episodes" section when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showPodcastSection('newEpisodes');
});
