const icon = document.querySelector(".icon");
const nav_ul = document.getElementById("nav-ul");
icon.addEventListener("click", (event) => {
  icon.classList.toggle("open");
  nav_ul.classList.toggle("show-ul");
});
