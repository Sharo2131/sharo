function showDetails(item) {
    const details = item.getAttribute("data-details");
    const detailsBox = document.getElementById("detailsBox");

    // Set the details text
    detailsBox.textContent = details;

    // Show the details box
    detailsBox.style.display = "block";

    // Optional: Automatically hide the details box after 5 seconds
    setTimeout(() => {
        detailsBox.style.display = "none";
    }, 5000);
}
