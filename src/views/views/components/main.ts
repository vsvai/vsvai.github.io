import navbar from "./navbar.html?raw";
import footbar from "./footbar.html?raw";
// import arrowRight from "./svg/arrowRight.svg";
import mobileNav from "./mobileNav.html?raw";

// import "../../style.css";

// console.log("navbar", navbar); mobileNav

document.querySelector<HTMLDivElement>("#navbar")!.innerHTML = navbar;
document.querySelector<HTMLDivElement>("#mobileNav")!.innerHTML = mobileNav;

document.querySelector<HTMLDivElement>("#footbar")!.innerHTML = footbar;

// document.querySelector("#arrowRight")!.innerHTML = arrowRight;
