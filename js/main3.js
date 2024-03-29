const toggleButton = document.getElementById("js-navbar-toggle");
const menu = document.getElementById("js-menu");
let isMenuOpen = false;
const navLinks = document.querySelectorAll(".navs");

toggleButton.addEventListener("click", () => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  function openMenu() {
    menu.style.display = "flex";
    isMenuOpen = true;
  }

  function closeMenu() {
    menu.style.display = "none";
    isMenuOpen = false;
  }
});