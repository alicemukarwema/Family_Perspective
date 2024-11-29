// JavaScript for toggling FAQ sections
function showFAQSection(sectionId) {
    const sections = document.querySelectorAll('.faq-section');
    sections.forEach(section => section.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
