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
