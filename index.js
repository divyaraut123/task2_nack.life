document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery-container");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const images = galleryContainer.querySelectorAll("img");
    let currentImageIndex = 0;

    // Function to show the current image
    function showCurrentImage() {
        images.forEach((img, index) => {
            img.style.display = index === currentImageIndex ? "block" : "none";
        });
    }

    // Event listener for the previous button
    prevBtn.addEventListener("click", function () {
        currentImageIndex = Math.max(0, currentImageIndex - 1);
        showCurrentImage();
    });

    // Event listener for the next button
    nextBtn.addEventListener("click", function () {
        currentImageIndex = Math.min(images.length - 1, currentImageIndex + 1);
        showCurrentImage();
    });

    // Show the initial image
    showCurrentImage();
    
});
