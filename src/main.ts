// import "./routes.ts";
import "./views/components/main.ts";
import "./index.css";
import "../node_modules/preline/dist/preline.js";
import "../node_modules/flowbite/dist/flowbite.min.js";

const nav = document.querySelector("#nav");
const menu: any = document.querySelector("#menu");
const menuToggle: any = document.querySelector(".nav__toggle");
let isMenuOpen = false;

menuToggle?.addEventListener("click", (e: any) => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // toggle a11y attributes and active class
  menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
  if (menu) {
    menu.hidden = !isMenuOpen;
  }
  nav?.classList.toggle("nav--open");
});

document.querySelectorAll('[href^="/"]').forEach((el) =>
  el?.addEventListener("click", (e) => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;

    // toggle a11y attributes and active class
    menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
    if (menu) {
      menu.hidden = !isMenuOpen;
    }
    nav?.classList.toggle("nav--open");
  })
);

// TRAP TAB INSIDE NAV WHEN OPEN
nav?.addEventListener("keydown", (e: any) => {
  if (!e) return;
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu?.querySelectorAll(".nav__link");
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (menuLinks && document.activeElement === menuLinks[0]) {
        // menuToggle?.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      //   menuLinks?[0].focus();
      e.preventDefault();
    }
  }
});
