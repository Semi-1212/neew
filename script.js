// List of background images
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/cbe.avif"
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");
const dots = document.querySelectorAll(".dot");

// Function to change the background image with fade effect
function updateBackground() {
    heroSection.classList.remove("fade-in");
    setTimeout(() => {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        heroSection.classList.add("fade-in");
    }, 200); // Small delay for smooth fade-in effect

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

// Function to manually change slide
function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateBackground();
}

// Function to change slide using dots
function setSlide(index) {
    currentIndex = index;
    updateBackground();
}

// Auto-slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initialize background on page load
updateBackground();

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
