// Reusable function to display details dynamically
function showDrinkDetails(name, price, description = "No description available.") {
    const detailsBox = document.getElementById("detailsBox");

    // Update details box content
    detailsBox.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;

    // Show the details box
    detailsBox.style.display = "block";

    // Auto-hide the details box after 5 seconds
    setTimeout(() => {
        detailsBox.style.display = "none";
    }, 5000);
}

// Optional: Add hover effect for interactive feedback
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".Container img");
    images.forEach(image => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.1)";
            image.style.transition = "transform 0.3s";
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    });
});
