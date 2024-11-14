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

// Navbar button 
const navButton = document.getElementById("navButton") as HTMLElement;
const navMenu = document.getElementsByClassName("nav-menu")[0] as HTMLElement;
const closeNavButton = document.getElementById("closeBtn") as HTMLElement;

navButton.addEventListener('click', () => {
  navMenu.classList.remove("hidden");
  document.body.classList.add("no-scroll"); // Disable scroll
});

// Closing navbar menu
closeNavButton.addEventListener('click', () => {
  navMenu.classList.add("hidden");
  document.body.classList.remove("no-scroll"); // Enable scroll
});

const secondNavButton = document.getElementById("secondNavButton") as HTMLElement;
secondNavButton.addEventListener("click", ()=>{
  navMenu.classList.remove("hidden")
  document.body.classList.add("no-scroll"); // Disable scroll
})
