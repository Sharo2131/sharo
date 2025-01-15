// Add event listeners to enhance user interaction
document.addEventListener("DOMContentLoaded", () => {
    // Add hover effects for images
    const images = document.querySelectorAll(".image img");
    images.forEach(image => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.1)";
            image.style.transition = "transform 0.3s";
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    });

    // Add click tracking to links
    const links = document.querySelectorAll(".image a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const destination = link.getAttribute("href");
            console.log(`Navigating to: ${destination}`);
            // Optional: Add your analytics code here
        });
    });

    // Optional: Add tooltips for each image
    const tooltips = {
        "Coffe.html": "Explore our coffee menu!",
        "Drinks.html": "Check out our refreshing drinks!",
        "Salat.html": "Discover our healthy salads!"
    };

    links.forEach(link => {
        link.addEventListener("mouseenter", (e) => {
            const tooltipText = tooltips[link.getAttribute("href")] || "Learn more!";
            showTooltip(e, tooltipText);
        });

        link.addEventListener("mouseleave", hideTooltip);
    });
});

// Show tooltip
function showTooltip(event, text) {
    let tooltip = document.getElementById("tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "tooltip";
        tooltip.style.position = "absolute";
        tooltip.style.padding = "10px";
        tooltip.style.background = "rgba(0, 0, 0, 0.8)";
        tooltip.style.color = "#fff";
        tooltip.style.borderRadius = "5px";
        tooltip.style.fontSize = "14px";
        tooltip.style.pointerEvents = "none";
        document.body.appendChild(tooltip);
    }

    tooltip.textContent = text;
    tooltip.style.top = `${event.pageY + 10}px`;
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.display = "block";
}

// Hide tooltip
function hideTooltip() {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
        tooltip.style.display = "none";
    }
}
