import home from "./views/index.html?raw";
import product from "./views/products.html?raw";
import productDetails from "./views/product_details.html?raw";
import about from "./views/about.html?raw";
import work from "./views/work.html?raw";
import team from "./views/team.html?raw";
import blog from "./views/blog.html?raw";
import contact from "./views/contact.html?raw";
import data from "./views/data.html?raw";
import demo from "./views/demo.html?raw";
import faq from "./views/faq.html?raw";
import solution from "./views/solution.html?raw";
import deletePage from "./views/deletePlaystore.html?raw";
import robot from "./views/robot.html?raw"

import "./index.css";

const routes: Record<string, string> = {
  "/": home,
  "/#home": home,
  "/#about": about,
  "/#product": product,
  "/#product-details": productDetails,
  "/#work": work,
  "/#team": team,
  "/#blog": blog,
  "/#contact": contact,
  "/#solution": solution,
  "/#data": data,
  "/#demo": demo,
  "/#faq": faq,
  "/#robot": robot,
  "/#404": data,
  "/#delete": deletePage,
};

const rootDiv: any = document.getElementById("app");
rootDiv.innerHTML = routes[window.location.pathname.split("?")[0]];

const onNavigate = (pathname: string): void => {
  window.scrollTo(0, 0);
  window.history.pushState({}, pathname, window.location.origin + pathname);
  try {
    const element = document.querySelector(
      pathname.split("?")[0].replace("/", "")
    )!;
    const element2 = document.querySelector("#home");
    if (element2)
      element2.className =
        "!text-white !font-semibold font-medium  py-3 md:py-6 !text-blue-600 !font-semibold";
    if (element) {
      console.log(pathname, "path");
      if (pathname)
        Object.keys(routes).forEach((routeName) => {
          try {
            const element = document.querySelector(
              routeName.split("?")[0].replace("/", "") ?? "home"
            )!;
            if (element)
              element.className =
                "!text-gray-600 hover:!text-gray-800 font-medium  py-3 md:py-6 !font-semibold";
          } catch (error) {}
        });
      element.className =
        " font-medium  py-3 md:py-6 !text-blue-600 !font-semibold";
    }
  } catch (e) {
    if (pathname.split("?")[0].replace("/", "") === "home" || pathname) {
      Object.keys(routes).forEach((routeName) => {
        try {
          const element = document.querySelector(
            routeName.split("?")[0].replace("/", "") ?? "home"
          )!;
          if (element)
            element.className =
              "font-medium !text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500";
        } catch (error) {}
      });
      const element2 = document.querySelector("#home");
      if (element2)
        element2.className =
          "font-medium  py-3 md:py-6 !text-blue-600 !font-semibold";
    }
  }

  rootDiv.innerHTML =
    routes[pathname.split("?")[0]] ||
    `<section class="bg-white dark:bg-gray-900 ">
    <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
            <p class="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

            <div class="flex items-center mt-6 gap-x-3">
                <a    
                href=""  class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </a>

            </div>
        </div>

        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img class="w-full max-w-lg lg:mx-auto" src="/svg/application.svg" alt="">
        </div>
    </div>
</section>`;
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

document.addEventListener("DOMContentLoaded", () => {
  console.log(window.location.href);
  console.log(window.location.hash);
  onNavigate("/" + window.location.hash);
  return;
});

window.addEventListener("hashchange", () => {
  console.log(window.location.hash);
  onNavigate("/" + window.location.hash);
  return false;
});

(window as any).onNavigate = onNavigate;
