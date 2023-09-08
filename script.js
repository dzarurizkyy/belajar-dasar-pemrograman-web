// Variable
const navbarIconList = document.getElementById("navbar-icon-list");
const navbarListContent = document.getElementById("navbar-list-content");
const openAnimation = document.querySelectorAll(".open-animation");

// Functions
navbarIconList.addEventListener("click", () => {
  navbarListContent.classList.toggle("hidden");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

openAnimation.forEach((el) => observer.observe(el));
