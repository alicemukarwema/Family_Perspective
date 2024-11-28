// JavaScript to filter PDFs based on the search input
function searchPDFs() {
    const searchBar = document.getElementById("searchBar");
    const filter = searchBar.value.toLowerCase();

    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        const pdfList = category.querySelector(".pdf-list");
        const pdfLinks = pdfList.querySelectorAll("li");

        pdfLinks.forEach(link => {
            const text = link.textContent || link.innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                link.style.display = "";
            } else {
                link.style.display = "none";
            }
        });
    });
}
