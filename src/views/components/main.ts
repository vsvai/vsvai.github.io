import "../../index.css";
import navbar from "./navbar.html?raw";
import footbar from "./footbar.html?raw";

// import mobileNav from "./mobileNav.html?raw";

const navElement = document.querySelector<HTMLDivElement>("#navbar");
if (navElement) {
  navElement.innerHTML = navbar;
}

const footbarElement = document.querySelector<HTMLDivElement>("#footbar");
if (footbarElement) {
  footbarElement.innerHTML = footbar;
}
// const mobileNavElement = document.querySelector<HTMLDivElement>("#mobileNav");
// if (mobileNavElement) {
//   mobileNavElement.innerHTML = mobileNav;
// }

// Select elements
const navButton = document.getElementById("navButton")!;
const secondNavButton = document.getElementById("secondNavButton")
const closeNavButton = document.getElementById("closeBtn")!;
const navMenu = document.querySelector(".nav-menu")!;
const navLinks = document.querySelectorAll(".nav-menu a");

// Function to open the navigation menu
function openMenu() {
  navMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Disable scrolling
}

// Function to close the navigation menu
function closeMenu() {
  navMenu.classList.add("hidden");
  document.body.style.overflow = ""; // Enable scrolling
}

// Event listeners
navButton.addEventListener("click", openMenu);
secondNavButton?.addEventListener("click", openMenu);
closeNavButton.addEventListener("click", closeMenu);
navLinks.forEach((link) => link.addEventListener("click", closeMenu));
