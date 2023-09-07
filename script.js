// Variable
const navbarIconList = document.getElementById("navbar-icon-list");
const navbarListContent = document.getElementById("navbar-list-content");

// Functions
navbarIconList.addEventListener("click", () => {
  navbarListContent.classList.toggle("hidden");
});
