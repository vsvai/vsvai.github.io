import navbar from "./navbar.html?raw";
import footbar from "./footbar.html?raw";

import mobileNav from "./mobileNav.html?raw";

const navElement = document.querySelector<HTMLDivElement>("#navbar");
if (navElement) {
  navElement.innerHTML = navbar;
}

const footbarElement = document.querySelector<HTMLDivElement>("#footbar");
if (footbarElement) {
  footbarElement.innerHTML = footbar;
}
const mobileNavElement = document.querySelector<HTMLDivElement>("#mobileNav");
if (mobileNavElement) {
  mobileNavElement.innerHTML = mobileNav;
}
