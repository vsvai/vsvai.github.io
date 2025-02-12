// import "./routes.ts";
import "./views/components/main.ts";
import "./index.css";
import "../node_modules/preline/dist/preline.js";
import "../node_modules/flowbite/dist/flowbite.min.js";
import "./routes.ts";

// for new letter
interface HTMLDivElement extends HTMLElement {
  value: string;
}

const heroInput = <HTMLDivElement>document.getElementById("hero-input");
const subscribeButton = <HTMLDivElement>(
  document.getElementById("subscribe-button")
);
const submitNewsLetter = async (): Promise<void> => {
  const email = heroInput?.value;
  subscribeButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

  Sending`;
  // target="_blank" action="https://formsubmit.co/d9400981c02e58081d725662d150f3eb" method="POST"
  await fetch("https://formsubmit.co/a77931a3ad6784ff5a6da617d277a64f", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((res) => {
      console.log(res);
      subscribeButton.style.backgroundColor = "#10b981";
      subscribeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 Subscribed`;
    })
    .catch((err) => {
      console.log(err);
      subscribeButton.innerHTML = `Failed`;
    });
};

const submitContactLetter = async (): Promise<void> => {
  const contactForm = <HTMLDivElement | any>(
    document.getElementById("contact-form")
  );
  const contactButton = <HTMLDivElement | any>(
    document.getElementById("contact-button")
  );

  const first_name = contactForm.first_name;
  const last_name = contactForm.last_name;
  const email = contactForm.email;
  const details = contactForm.details;
  const phone = contactForm.phone;

  contactButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

  Sending`;
  // target="_blank" action="https://formsubmit.co/d9400981c02e58081d725662d150f3eb" method="POST"

  await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: "service_7xa5tqi",
      template_id: "template_t7jwhdf",
      user_id: "7Fopngk117L_VVFZz",
      template_params: {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        details: details.value,
        phone: phone.value,
      },
    }),
  })
    .then((res) => {
      console.log(res);
      contactButton.style.backgroundColor = "#10b981";
      contactButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 Subscribed`;
    })
    .catch((err) => {
      console.log(err);
      contactButton.innerHTML = `Failed`;
    });
};

const submitDeleteLetter = async (): Promise<void> => {
  const contactForm = <HTMLDivElement | any>(
    document.getElementById("delete-form")
  );
  const contactButton = <HTMLDivElement | any>(
    document.getElementById("delete-button")
  );

  const first_name = contactForm.first_name;
  const phone = contactForm.phone;

  contactButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

  Sending`;
  // target="_blank" action="https://formsubmit.co/d9400981c02e58081d725662d150f3eb" method="POST"

  await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: "service_7xa5tqi",
      template_id: "template_t7jwhdf",
      user_id: "7Fopngk117L_VVFZz",
      template_params: {
        first_name: first_name.value,
        phone: phone.value,
      },
    }),
  })
    .then((res) => {
      console.log(res);
      contactButton.style.backgroundColor = "#10b981";
      contactButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 Delete request send`;
    })
    .catch((err) => {
      console.log(err);
      contactButton.innerHTML = `Failed`;
    });
};

(window as any).submitDeleteLetter = submitDeleteLetter;

(window as any).submitNewsLetter = submitNewsLetter;
(window as any).submitContactLetter = submitContactLetter;


// let curpage = 1;
// let slidinpm, rng = false;
// let click = true;
// let left = document.getElementById("left");
// let right = document.getElementById("right");
// let pagePrefix = "slide";
// let transitionPrefix = "circle";
// let svg = true;

// function leftSlide() {
//   if (click) {
//     if (curpage == 1) curpage = 5;
//     console.log("woek");
//     sliding = true;
//     curpage--;
//     svg = true;
//     click = false;
//     for (let k = 1; k <= 4; k++) {
//       let a1 = document.getElementById(pagePrefix + k);
//       a1!.className += " tran";
//     }
//     setTimeout(() => {
//       move();
//     }, 200);
//     setTimeout(() => {
//       for (let k = 1; k <= 4; k++) {
//         let a1 = document.getElementById(pagePrefix + k);
//         a1!.classList.remove("tran");
//       }
//     }, 1400);
//   }
// }

// function rightSlide() {
//   if (click) {
//     if (curpage == 4) curpage = 0;
//     console.log("woek");
//     sliding = true;
//     curpage++;
//     svg = false;
//     click = false;
//     for (let k = 1; k <= 4; k++) {
//       let a1 = document.getElementById(pagePrefix + k);
//       a1!.className += " tran";
//     }
//     setTimeout(() => {
//       move();
//     }, 2000);
//     setTimeout(() => {
//       for (let k = 1; k <= 4; k++) {
//         let a1 = document.getElementById(pagePrefix + k);
//         a1!.classList.remove("tran");
//       }
//     }, 1400);
//   }
// }

// function move() {
//   if (sliding) {
//     sliding = false;
//     if (svg) {
//       for (let j = 1; j <= 9; j++) {
//         let c = document.getElementById(transitionPrefix + j);
//         c!.classList.remove("steap");
//         c!.setAttribute("class", transitionPrefix + j + " streak");
//         console.log("streak");
//       }
//     } else {
//       for (let j = 10; j <= 18; j++) {
//         let c = document.getElementById(transitionPrefix + j);
//         c!.classList.remove("steap");
//         c!.setAttribute("class", transitionPrefix + j + " streak");
//         console.log("streak");
//       }
//     }
//     setTimeout(() => {
//       for (let i = 1; i <= 4; i++) {
//         if (i == curpage) {
//           let a = document.getElementById(pagePrefix + i);
//           a!.className += " up1";
//         } else {
//           let b = document.getElementById(pagePrefix + i);
//           b!.classList.remove("up1");
//         }
//       }
//       sliding = true;
//     }, 2000);
//     setTimeout(() => {
//       click = true;
//     }, 1700);

//     setTimeout(() => {
//       if (svg) {
//         for (let j = 1; j <= 9; j++) {
//           let c = document.getElementById(transitionPrefix + j);
//           c!.classList.remove("streak");
//           c!.setAttribute("class", transitionPrefix + j + " steap");
//         }
//       } else {
//         for (let j = 10; j <= 18; j++) {
//           let c = document.getElementById(transitionPrefix + j);
//           c!.classList.remove("streak");
//           c!.setAttribute("class", transitionPrefix + j + " steap");
//         }
//         sliding = true;
//       }
//     }, 2000);
//     setTimeout(() => {
//       click = true;
//     }, 1700);
//   }
// }

// left!.onmousedown = () => {
//   leftSlide();
// };

// right!.onmousedown = () => {
//   rightSlide();
// };

// document.onkeydown = (e) => {
//   if (e.keyCode == 37) {
//     leftSlide();
//   } else if (e.keyCode == 39) {
//     rightSlide();
//   }
// }

// for codepen header
// setTimeout(() => {
// 	rightSlide();
// }, 500);

// setInterval(() => {
//   rightSlide();
// }, 2500);



window.addEventListener("scroll", () => {
  const firstNav = document.getElementById("first-nav") as HTMLElement;
  const secondNav = document.getElementById("second-nav") as HTMLElement;

  if (window.scrollY > 10) {
    firstNav.classList.add("hidden"); // Hide the first nav
    secondNav.classList.add("visible"); // Show the second nav
  } else {
    firstNav.classList.remove("hidden"); // Show the first nav when scrolled back up
    secondNav.classList.remove("visible"); // Hide the second nav when scrolled back up
  }
});

//redirecting qr to page
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('id')) {
    // Redirect to the #robot section
    window.location.href = "https://www.sudoyantra.com/#robot";
}
