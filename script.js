const icon = document.querySelector(".icon");
const nav_ul = document.getElementById("nav-ul");
icon.addEventListener("click", (event) => {
  icon.classList.toggle("open");
  nav_ul.classList.toggle("show-ul");
});

const container = document.querySelector(".particle-container");

for (let i = 0; i < 200; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const topPosition = Math.random() * 100;
  const leftPosition = Math.random() * 100;
  particle.style.top = `${topPosition}%`;
  particle.style.left = `${leftPosition}%`;

  const animationDuration = Math.random() * 10 + 2;
  particle.style.animationDuration = `${animationDuration}s`;

  container.appendChild(particle);
}

const carouselImages = document.querySelector(".carousel-items");
const cards = document.querySelectorAll(".carousel-items .carousel-card");
const prevButton = document.querySelector(".carousel-button.left");
const nextButton = document.querySelector(".carousel-button.right");

let currentIndex = 0;
let visibleImagesCount = 1;

function updateCarousel() {
  const imageWidth = cards[0].clientWidth;
  carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

function updateVisibleImagesCount() {
  // Get the screen width and adjust the number of visible images
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    visibleImagesCount = 4; // Desktop: 4 images visible
  } else if (screenWidth >= 768) {
    visibleImagesCount = 2; // Tablet: 2 images visible
  } else {
    visibleImagesCount = 1; // Mobile: 1 image visible
  }
  updateCarousel();
}

nextButton.addEventListener("click", () => {
  if (currentIndex < cards.length - visibleImagesCount) {
    currentIndex += 1;
  }
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
  }
  updateCarousel();
});

// Update carousel on window resize to ensure proper alignment
window.addEventListener("resize", updateVisibleImagesCount);

// Initial setup
updateVisibleImagesCount();
