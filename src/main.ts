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
  console.log(email);
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

(window as any).submitNewsLetter = submitNewsLetter;
