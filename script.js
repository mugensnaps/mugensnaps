let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel-images");

function showSlide(index) {
    // Prevent the carousel from sliding out of range
    if (index >= slides.length) {
        slideIndex = 0; // Go back to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    }

    // Use transform to slide the images (like a horizontal scroll effect)
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the first slide by default
showSlide(slideIndex);
