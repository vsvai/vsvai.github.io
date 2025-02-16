(function(){const st=document.createElement("link").relList;if(st&&st.supports&&st.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))gt(R);new MutationObserver(R=>{for(const Y of R)if(Y.type==="childList")for(const b of Y.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&gt(b)}).observe(document,{childList:!0,subtree:!0});function Et(R){const Y={};return R.integrity&&(Y.integrity=R.integrity),R.referrerPolicy&&(Y.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?Y.credentials="include":R.crossOrigin==="anonymous"?Y.credentials="omit":Y.credentials="same-origin",Y}function gt(R){if(R.ep)return;R.ep=!0;const Y=Et(R);fetch(R.href,Y)}})();const mn=`<header
  class="absolute md:top-5 flex flex-wrap flex-col md:justify-start md:flex-nowrap z-40 w-full bg-transparent text-sm py-3 md:py-0 dark:bg-gray-800"
>
  <nav
    id="first-nav"
    class="min-w-full mx-auto px-2 md:px-6 lg:px-8"
    aria-label="Global"
  >
    <div class="relative md:flex md:items-center md:justify-between">
      <div class="w-full flex items-center justify-between gap-4">
        <a href="#" onclick="onNavigate('/'); return false;">
          <img src="./mainlogo.png" alt="" class="n06_logo" width="75px" />
        </a>
        <a
          class="md:absolute left-20 md:text-2xl flex-none text-xl font-semibold text-white dark:text-black"
          href="#"
          onclick="onNavigate('/'); return false;"
          aria-label="Brand"
          >SudoYantra India</a
        >
        <div>
          <button
            type="button"
            id="navButton"
            class="px-4 py-4 rounded-full bg-shade h-12 flex justify-center items-center"
          >
          <img class="invert" width="18px" src="/icons/bars.png" alt="">
          </button>
        </div>
      </div>
    </div>
  </nav>
  <nav
    id="second-nav"
    class="md:max-w-[85rem] w-full self-center px-2 md:px-6 lg:px-8 z-[100] bg-secondary text-black p-2 flex justify-between items-center"
    aria-label="Global"
  >
    <div class="flex items-center gap-x-2 ">
      <a href="#" onclick="onNavigate('/'); return false"
        ><img
          src="./mainlogo.png"
          alt="SudoYantra India Logo"
          class="n06_logo"
          width="45px"
      /></a>
      <h1 class="font-semibold hidden md:block md:text-lg text-black">
        <a href="#" onclick="onNavigate('/'); return false;"
          >SudoYantra India</a
        >
      </h1>
    </div>
    <ul class="flex justify-center items-center list-none md:gap-x-10 gap-x-6 md:text-lg font-medium">
      <li>
        <a
          href="#product"
          class="hover:text-gray-600 transition-colors text-black hidden md:flex items-center gap-x-1"
          ><img class="h-[14px] md:h-[22px] " src="/icons/solar.png" alt=""> Products</a
        >
      </li>
      <li>
        <a href="#contact" class="hover:text-gray-600 text-black transition-colors flex items-center gap-x-1"
          ><img class="h-[14px] md:h-[16px] " src="/icons/demo.png" alt=""> Request Demo</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class="text-black hover:text-gray-600 transition-colors font-semibold flex items-center md:gap-x-1"
          ><img class=" h-[20px] md:h-[26px]" src="/icons/check-out.png" alt=""> Order now </a
        >
      </li>
    </ul>
    <button
      type="button"
      id="secondNavButton"
      class="px-4 py-4 rounded-full bg-transparent h-12 flex justify-center items-center"
    >
    <img class="" width="22px" src="/icons/bars.png" alt="">
    </button>
  </nav>
</header>

<section
  class="nav-menu fixed hidden top-0 z-[100] navbar-menu h-screen w-full text-black"
>
  <div
    class="md:min-h-[20%] min-h-full w-full md:bg-white bg-black p-8 flex md:items-start md:justify-center  text-white md:text-black"
  >
    <button class="absolute md:right-14 right-6 md:top-10 top-9" id="closeBtn">
      <svg
        class="md:bg-inherit bg-white"
        xmlns="http://www.w3.org/2000/svg"
        height="28"
        width="28"
        viewBox="0 0 384 512"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </button>
    <div
      class="md:w-3/4 w-full max-h-full md:grid flex flex-col lg:grid-cols-3 md:px-24 lg:px-24 gap-y-12 md:gap-x-2"
    >
      <div>
        <h2 class="font-semibold text-gray-500 mb-6 text-lg">Tech & Design</h2>
        <ul class="font-semibold flex flex-col items-stretch gap-y-5">
          <li class="hover:text-primary cursor-pointer"><a href="https://play.google.com/store/apps/details?id=com.sudoyantra.admin" target="_blank">App</a></li>
          <li class="hover:text-primary cursor-pointer">
            <a href="http://app.sudoyantra.com" target="_blank">Dashobard</a>
          </li>
          <li class="hover:text-primary cursor-pointer">Performance</li>
        </ul>
      </div>
      <div>
        <h2 class="font-semibold text-gray-500 mb-6 text-lg">Our Services</h2>
        <ul class="font-semibold flex flex-col items-stretch gap-y-5">
          <li class="hover:text-primary cursor-pointer">Solar Cleaner</li>
          <li class="hover:text-primary cursor-pointer">On site installation</li>
          <li class="hover:text-primary cursor-pointer">Other Services</li>
        </ul>
      </div>
      <div>
        <h2 class="font-semibold text-gray-500 mb-6 text-lg">Our Company</h2>
        <ul class="font-semibold flex flex-col items-stretch gap-y-5">
          <li class="hover:text-primary cursor-pointer"><a href="#about">About Us</a></li>
          <li class="hover:text-primary cursor-pointer"><a href="#solution">Solution</a></li>
          <li class="hover:text-primary cursor-pointer"><a href="#work">Work</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div
    class="md:min-h-[80%] md:block hidden w-full bg-[#7C7C7C] md:bg-black md:opacity-50"
  ></div>
</section>

<!-- // onclick="smoothScroll(document.getElementById('solar'))" -->
`,vn=`<footer aria-label="Site Footer" class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      class="flex flex-col items-center gap-4 rounded-lg bg-secondary p-6 shadow-lg sm:flex-row sm:justify-between"
    >
      <strong class="text-xl text-white sm:text-xl flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
        Call us : +91 99840 45295
      </strong>

      <a
        class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-black hover:bg-transparent hover:text-black hover:border hover:border-black hover:bg-white focus:outline-none focus:ring active:bg-white/90"
        href="https://wa.me/919984045295"
        target="_blank"
      >
        <span class="text-sm font-medium"> Request Demo </span>

        <svg
          class="h-5 w-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div class="text-center sm:text-left">
        <p class="text-lg font-medium text-gray-900">About Us</p>

        <nav aria-label="Footer About Nav" class="mt-8">
          <ul class="space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/#about"
              >
                Company
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.linkedin.com/company/sudoyantra/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.linkedin.com/company/sudoyantra/"
                target="_blank"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="text-center sm:text-left">
        <p class="text-lg font-medium text-gray-900">Our Services</p>

        <nav aria-label="Footer Services Nav" class="mt-8">
          <ul class="space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/#product"
              >
                Solar Cleaning Robots
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/#product"
              >
                MQTT charge-controller
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="text-center sm:text-left">
        <p class="text-lg font-medium text-gray-900">Resources</p>

        <nav aria-label="Footer Resources Nav" class="mt-8">
          <ul class="space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="#blog"
                target="_blank"
              >
                Online Guides
              </a>
            </li>
            <!-- 
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="https://store.sudoyantra.com/collections/frontpage"
              >
                Online Store
              </a>
            </li> -->

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/#faq"
              >
                Forum
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/#work"
              >
                Downloads
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="text-center sm:text-left">
        <p class="text-lg font-medium text-gray-900">Helpful Links</p>

        <nav aria-label="Footer Helpful Nav" class="mt-8">
          <ul class="space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/#faq"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/#contact"
              >
                Support
              </a>
            </li>

            <li>
              <a
                class="group flex justify-center md:justify-start gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="/"
              >
                <span
                  class="text-gray-700 transition group-hover:text-gray-700/75"
                >
                  Live Chat
                </span>

                <span class="relative flex h-2 w-2">
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex h-2 w-2 rounded-full bg-teal-500"
                  ></span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="mt-16">
      <ul class="flex justify-center md:justify-start gap-6 sm:justify-start">
        <li>
          <a
            href="https://www.youtube.com/@sudoyantra"
            rel="noreferrer"
            target="_blank"
            class="text-teal-700 transition hover:text-teal-700/75"
          >
            <span class="sr-only">Youtube</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              class="w-10 h-10"
              viewBox="0 0 256 256"
              xml:space="preserve"
            >
              <defs></defs>
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(255, 0, 0);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <polygon
                  points="36,58.5 59.38,45 36,31.5 "
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(255, 255, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="  matrix(1 0 0 1 0 0) "
                />
              </g>
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/sudoyantra/"
            rel="noreferrer"
            target="_blank"
            class="text-teal-700 transition hover:text-teal-700/75"
          >
            <span class="sr-only">Instagram</span>
            <svg
              class="h-10 w-10"
              fill="black"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/sudoyantra"
            rel="noreferrer"
            target="_blank"
            class="text-teal-700 transition hover:text-teal-700/75"
          >
            <span class="sr-only">Twitter</span>
            <svg class="h-10 w-10" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/company/sudoyantra/"
            target="_blank"
            class="text-teal-700 transition hover:text-teal-700/75"
          >
            <span class="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              class="h-8 w-8"
              fill="black"
              viewBox="0 0 256 256"
              xml:space="preserve"
            >
              <defs></defs>
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: black;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: black;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
`,an=document.querySelector("#navbar");an&&(an.innerHTML=mn);const ln=document.querySelector("#footbar");ln&&(ln.innerHTML=vn);const yn=document.getElementById("navButton"),en=document.getElementById("secondNavButton"),bn=document.getElementById("closeBtn"),hn=document.querySelector(".nav-menu"),wn=document.querySelectorAll(".nav-menu a");function fn(){hn.classList.remove("hidden"),document.body.style.overflow="hidden"}function gn(){hn.classList.add("hidden"),document.body.style.overflow=""}yn.addEventListener("click",fn);en==null||en.addEventListener("click",fn);bn.addEventListener("click",gn);wn.forEach(nt=>nt.addEventListener("click",gn));var cn={},xn={get exports(){return cn},set exports(nt){cn=nt}};(function(nt,st){(function(Et,gt){nt.exports=gt()})(self,()=>(()=>{var Et={492:(Y,b,y)=>{y.r(b),y.d(b,{afterMain:()=>B,afterRead:()=>I,afterWrite:()=>at,applyStyles:()=>$t,arrow:()=>Oe,auto:()=>h,basePlacements:()=>c,beforeMain:()=>m,beforeRead:()=>l,beforeWrite:()=>G,bottom:()=>x,clippingParents:()=>t,computeStyles:()=>ve,createPopper:()=>Qe,createPopperBase:()=>Ee,createPopperLite:()=>Xe,detectOverflow:()=>oe,end:()=>o,eventListeners:()=>de,flip:()=>ie,hide:()=>Be,left:()=>k,main:()=>O,modifierPhases:()=>wt,offset:()=>Me,placements:()=>r,popper:()=>n,popperGenerator:()=>fe,popperOffsets:()=>ke,preventOverflow:()=>_e,read:()=>u,reference:()=>i,right:()=>v,start:()=>a,top:()=>g,variationPlacements:()=>s,viewport:()=>e,write:()=>q});var g="top",x="bottom",v="right",k="left",h="auto",c=[g,x,v,k],a="start",o="end",t="clippingParents",e="viewport",n="popper",i="reference",s=c.reduce(function(w,d){return w.concat([d+"-"+a,d+"-"+o])},[]),r=[].concat(c,[h]).reduce(function(w,d){return w.concat([d,d+"-"+a,d+"-"+o])},[]),l="beforeRead",u="read",I="afterRead",m="beforeMain",O="main",B="afterMain",G="beforeWrite",q="write",at="afterWrite",wt=[l,u,I,m,O,B,G,q,at];function mt(w){return w?(w.nodeName||"").toLowerCase():null}function it(w){if(w==null)return window;if(w.toString()!=="[object Window]"){var d=w.ownerDocument;return d&&d.defaultView||window}return w}function lt(w){return w instanceof it(w).Element||w instanceof Element}function ct(w){return w instanceof it(w).HTMLElement||w instanceof HTMLElement}function vt(w){return typeof ShadowRoot<"u"&&(w instanceof it(w).ShadowRoot||w instanceof ShadowRoot)}const $t={name:"applyStyles",enabled:!0,phase:"write",fn:function(w){var d=w.state;Object.keys(d.elements).forEach(function(p){var f=d.styles[p]||{},C=d.attributes[p]||{},_=d.elements[p];ct(_)&&mt(_)&&(Object.assign(_.style,f),Object.keys(C).forEach(function(E){var S=C[E];S===!1?_.removeAttribute(E):_.setAttribute(E,S===!0?"":S)}))})},effect:function(w){var d=w.state,p={popper:{position:d.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(d.elements.popper.style,p.popper),d.styles=p,d.elements.arrow&&Object.assign(d.elements.arrow.style,p.arrow),function(){Object.keys(d.elements).forEach(function(f){var C=d.elements[f],_=d.attributes[f]||{},E=Object.keys(d.styles.hasOwnProperty(f)?d.styles[f]:p[f]).reduce(function(S,L){return S[L]="",S},{});ct(C)&&mt(C)&&(Object.assign(C.style,E),Object.keys(_).forEach(function(S){C.removeAttribute(S)}))})}},requires:["computeStyles"]};function xt(w){return w.split("-")[0]}var ht=Math.max,St=Math.min,jt=Math.round;function Dt(){var w=navigator.userAgentData;return w!=null&&w.brands&&Array.isArray(w.brands)?w.brands.map(function(d){return d.brand+"/"+d.version}).join(" "):navigator.userAgent}function Gt(){return!/^((?!chrome|android).)*safari/i.test(Dt())}function Ht(w,d,p){d===void 0&&(d=!1),p===void 0&&(p=!1);var f=w.getBoundingClientRect(),C=1,_=1;d&&ct(w)&&(C=w.offsetWidth>0&&jt(f.width)/w.offsetWidth||1,_=w.offsetHeight>0&&jt(f.height)/w.offsetHeight||1);var E=(lt(w)?it(w):window).visualViewport,S=!Gt()&&p,L=(f.left+(S&&E?E.offsetLeft:0))/C,T=(f.top+(S&&E?E.offsetTop:0))/_,j=f.width/C,A=f.height/_;return{width:j,height:A,top:T,right:L+j,bottom:T+A,left:L,x:L,y:T}}function qt(w){var d=Ht(w),p=w.offsetWidth,f=w.offsetHeight;return Math.abs(d.width-p)<=1&&(p=d.width),Math.abs(d.height-f)<=1&&(f=d.height),{x:w.offsetLeft,y:w.offsetTop,width:p,height:f}}function Zt(w,d){var p=d.getRootNode&&d.getRootNode();if(w.contains(d))return!0;if(p&&vt(p)){var f=d;do{if(f&&w.isSameNode(f))return!0;f=f.parentNode||f.host}while(f)}return!1}function It(w){return it(w).getComputedStyle(w)}function Pt(w){return["table","td","th"].indexOf(mt(w))>=0}function J(w){return((lt(w)?w.ownerDocument:w.document)||window.document).documentElement}function Tt(w){return mt(w)==="html"?w:w.assignedSlot||w.parentNode||(vt(w)?w.host:null)||J(w)}function Qt(w){return ct(w)&&It(w).position!=="fixed"?w.offsetParent:null}function tt(w){for(var d=it(w),p=Qt(w);p&&Pt(p)&&It(p).position==="static";)p=Qt(p);return p&&(mt(p)==="html"||mt(p)==="body"&&It(p).position==="static")?d:p||function(f){var C=/firefox/i.test(Dt());if(/Trident/i.test(Dt())&&ct(f)&&It(f).position==="fixed")return null;var _=Tt(f);for(vt(_)&&(_=_.host);ct(_)&&["html","body"].indexOf(mt(_))<0;){var E=It(_);if(E.transform!=="none"||E.perspective!=="none"||E.contain==="paint"||["transform","perspective"].indexOf(E.willChange)!==-1||C&&E.willChange==="filter"||C&&E.filter&&E.filter!=="none")return _;_=_.parentNode}return null}(w)||d}function Xt(w){return["top","bottom"].indexOf(w)>=0?"x":"y"}function te(w,d,p){return ht(w,St(d,p))}function ae(w){return Object.assign({},{top:0,right:0,bottom:0,left:0},w)}function Te(w,d){return d.reduce(function(p,f){return p[f]=w,p},{})}const Oe={name:"arrow",enabled:!0,phase:"main",fn:function(w){var d,p=w.state,f=w.name,C=w.options,_=p.elements.arrow,E=p.modifiersData.popperOffsets,S=xt(p.placement),L=Xt(S),T=[k,v].indexOf(S)>=0?"height":"width";if(_&&E){var j=function(F,U){return ae(typeof(F=typeof F=="function"?F(Object.assign({},U.rects,{placement:U.placement})):F)!="number"?F:Te(F,c))}(C.padding,p),A=qt(_),P=L==="y"?g:k,z=L==="y"?x:v,$=p.rects.reference[T]+p.rects.reference[L]-E[L]-p.rects.popper[T],Z=E[L]-p.rects.reference[L],H=tt(_),W=H?L==="y"?H.clientHeight||0:H.clientWidth||0:0,Q=$/2-Z/2,K=j[P],N=W-A[T]-j[z],M=W/2-A[T]/2+Q,D=te(K,M,N),V=L;p.modifiersData[f]=((d={})[V]=D,d.centerOffset=D-M,d)}},effect:function(w){var d=w.state,p=w.options.element,f=p===void 0?"[data-popper-arrow]":p;f!=null&&(typeof f!="string"||(f=d.elements.popper.querySelector(f)))&&Zt(d.elements.popper,f)&&(d.elements.arrow=f)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(w){return w.split("-")[1]}var le={top:"auto",right:"auto",bottom:"auto",left:"auto"};function We(w){var d,p=w.popper,f=w.popperRect,C=w.placement,_=w.variation,E=w.offsets,S=w.position,L=w.gpuAcceleration,T=w.adaptive,j=w.roundOffsets,A=w.isFixed,P=E.x,z=P===void 0?0:P,$=E.y,Z=$===void 0?0:$,H=typeof j=="function"?j({x:z,y:Z}):{x:z,y:Z};z=H.x,Z=H.y;var W=E.hasOwnProperty("x"),Q=E.hasOwnProperty("y"),K=k,N=g,M=window;if(T){var D=tt(p),V="clientHeight",F="clientWidth";D===it(p)&&It(D=J(p)).position!=="static"&&S==="absolute"&&(V="scrollHeight",F="scrollWidth"),(C===g||(C===k||C===v)&&_===o)&&(N=x,Z-=(A&&D===M&&M.visualViewport?M.visualViewport.height:D[V])-f.height,Z*=L?1:-1),(C===k||(C===g||C===x)&&_===o)&&(K=v,z-=(A&&D===M&&M.visualViewport?M.visualViewport.width:D[F])-f.width,z*=L?1:-1)}var U,X=Object.assign({position:S},T&&le),et=j===!0?function(rt,dt){var ft=rt.x,yt=rt.y,ot=dt.devicePixelRatio||1;return{x:jt(ft*ot)/ot||0,y:jt(yt*ot)/ot||0}}({x:z,y:Z},it(p)):{x:z,y:Z};return z=et.x,Z=et.y,L?Object.assign({},X,((U={})[N]=Q?"0":"",U[K]=W?"0":"",U.transform=(M.devicePixelRatio||1)<=1?"translate("+z+"px, "+Z+"px)":"translate3d("+z+"px, "+Z+"px, 0)",U)):Object.assign({},X,((d={})[N]=Q?Z+"px":"",d[K]=W?z+"px":"",d.transform="",d))}const ve={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(w){var d=w.state,p=w.options,f=p.gpuAcceleration,C=f===void 0||f,_=p.adaptive,E=_===void 0||_,S=p.roundOffsets,L=S===void 0||S,T={placement:xt(d.placement),variation:ee(d.placement),popper:d.elements.popper,popperRect:d.rects.popper,gpuAcceleration:C,isFixed:d.options.strategy==="fixed"};d.modifiersData.popperOffsets!=null&&(d.styles.popper=Object.assign({},d.styles.popper,We(Object.assign({},T,{offsets:d.modifiersData.popperOffsets,position:d.options.strategy,adaptive:E,roundOffsets:L})))),d.modifiersData.arrow!=null&&(d.styles.arrow=Object.assign({},d.styles.arrow,We(Object.assign({},T,{offsets:d.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:L})))),d.attributes.popper=Object.assign({},d.attributes.popper,{"data-popper-placement":d.placement})},data:{}};var ce={passive:!0};const de={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(w){var d=w.state,p=w.instance,f=w.options,C=f.scroll,_=C===void 0||C,E=f.resize,S=E===void 0||E,L=it(d.elements.popper),T=[].concat(d.scrollParents.reference,d.scrollParents.popper);return _&&T.forEach(function(j){j.addEventListener("scroll",p.update,ce)}),S&&L.addEventListener("resize",p.update,ce),function(){_&&T.forEach(function(j){j.removeEventListener("scroll",p.update,ce)}),S&&L.removeEventListener("resize",p.update,ce)}},data:{}};var Ae={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(w){return w.replace(/left|right|bottom|top/g,function(d){return Ae[d]})}var be={start:"end",end:"start"};function Re(w){return w.replace(/start|end/g,function(d){return be[d]})}function we(w){var d=it(w);return{scrollLeft:d.pageXOffset,scrollTop:d.pageYOffset}}function pe(w){return Ht(J(w)).left+we(w).scrollLeft}function he(w){var d=It(w),p=d.overflow,f=d.overflowX,C=d.overflowY;return/auto|scroll|overlay|hidden/.test(p+C+f)}function xe(w){return["html","body","#document"].indexOf(mt(w))>=0?w.ownerDocument.body:ct(w)&&he(w)?w:xe(Tt(w))}function ue(w,d){var p;d===void 0&&(d=[]);var f=xe(w),C=f===((p=w.ownerDocument)==null?void 0:p.body),_=it(f),E=C?[_].concat(_.visualViewport||[],he(f)?f:[]):f,S=d.concat(E);return C?S:S.concat(ue(Tt(E)))}function ne(w){return Object.assign({},w,{left:w.x,top:w.y,right:w.x+w.width,bottom:w.y+w.height})}function Ce(w,d,p){return d===e?ne(function(f,C){var _=it(f),E=J(f),S=_.visualViewport,L=E.clientWidth,T=E.clientHeight,j=0,A=0;if(S){L=S.width,T=S.height;var P=Gt();(P||!P&&C==="fixed")&&(j=S.offsetLeft,A=S.offsetTop)}return{width:L,height:T,x:j+pe(f),y:A}}(w,p)):lt(d)?function(f,C){var _=Ht(f,!1,C==="fixed");return _.top=_.top+f.clientTop,_.left=_.left+f.clientLeft,_.bottom=_.top+f.clientHeight,_.right=_.left+f.clientWidth,_.width=f.clientWidth,_.height=f.clientHeight,_.x=_.left,_.y=_.top,_}(d,p):ne(function(f){var C,_=J(f),E=we(f),S=(C=f.ownerDocument)==null?void 0:C.body,L=ht(_.scrollWidth,_.clientWidth,S?S.scrollWidth:0,S?S.clientWidth:0),T=ht(_.scrollHeight,_.clientHeight,S?S.scrollHeight:0,S?S.clientHeight:0),j=-E.scrollLeft+pe(f),A=-E.scrollTop;return It(S||_).direction==="rtl"&&(j+=ht(_.clientWidth,S?S.clientWidth:0)-L),{width:L,height:T,x:j,y:A}}(J(w)))}function Fe(w,d,p,f){var C=d==="clippingParents"?function(L){var T=ue(Tt(L)),j=["absolute","fixed"].indexOf(It(L).position)>=0&&ct(L)?tt(L):L;return lt(j)?T.filter(function(A){return lt(A)&&Zt(A,j)&&mt(A)!=="body"}):[]}(w):[].concat(d),_=[].concat(C,[p]),E=_[0],S=_.reduce(function(L,T){var j=Ce(w,T,f);return L.top=ht(j.top,L.top),L.right=St(j.right,L.right),L.bottom=St(j.bottom,L.bottom),L.left=ht(j.left,L.left),L},Ce(w,E,f));return S.width=S.right-S.left,S.height=S.bottom-S.top,S.x=S.left,S.y=S.top,S}function Ge(w){var d,p=w.reference,f=w.element,C=w.placement,_=C?xt(C):null,E=C?ee(C):null,S=p.x+p.width/2-f.width/2,L=p.y+p.height/2-f.height/2;switch(_){case g:d={x:S,y:p.y-f.height};break;case x:d={x:S,y:p.y+p.height};break;case v:d={x:p.x+p.width,y:L};break;case k:d={x:p.x-f.width,y:L};break;default:d={x:p.x,y:p.y}}var T=_?Xt(_):null;if(T!=null){var j=T==="y"?"height":"width";switch(E){case a:d[T]=d[T]-(p[j]/2-f[j]/2);break;case o:d[T]=d[T]+(p[j]/2-f[j]/2)}}return d}function oe(w,d){d===void 0&&(d={});var p=d,f=p.placement,C=f===void 0?w.placement:f,_=p.strategy,E=_===void 0?w.strategy:_,S=p.boundary,L=S===void 0?t:S,T=p.rootBoundary,j=T===void 0?e:T,A=p.elementContext,P=A===void 0?n:A,z=p.altBoundary,$=z!==void 0&&z,Z=p.padding,H=Z===void 0?0:Z,W=ae(typeof H!="number"?H:Te(H,c)),Q=P===n?i:n,K=w.rects.popper,N=w.elements[$?Q:P],M=Fe(lt(N)?N:N.contextElement||J(w.elements.popper),L,j,E),D=Ht(w.elements.reference),V=Ge({reference:D,element:K,strategy:"absolute",placement:C}),F=ne(Object.assign({},K,V)),U=P===n?F:D,X={top:M.top-U.top+W.top,bottom:U.bottom-M.bottom+W.bottom,left:M.left-U.left+W.left,right:U.right-M.right+W.right},et=w.modifiersData.offset;if(P===n&&et){var rt=et[C];Object.keys(X).forEach(function(dt){var ft=[v,x].indexOf(dt)>=0?1:-1,yt=[g,x].indexOf(dt)>=0?"y":"x";X[dt]+=rt[yt]*ft})}return X}const ie={name:"flip",enabled:!0,phase:"main",fn:function(w){var d=w.state,p=w.options,f=w.name;if(!d.modifiersData[f]._skip){for(var C=p.mainAxis,_=C===void 0||C,E=p.altAxis,S=E===void 0||E,L=p.fallbackPlacements,T=p.padding,j=p.boundary,A=p.rootBoundary,P=p.altBoundary,z=p.flipVariations,$=z===void 0||z,Z=p.allowedAutoPlacements,H=d.options.placement,W=xt(H),Q=L||(W===H||!$?[ye(H)]:function(Ct){if(xt(Ct)===h)return[];var pt=ye(Ct);return[Re(Ct),pt,Re(pt)]}(H)),K=[H].concat(Q).reduce(function(Ct,pt){return Ct.concat(xt(pt)===h?function(kt,Bt){Bt===void 0&&(Bt={});var bt=Bt,At=bt.placement,se=bt.boundary,Rt=bt.rootBoundary,Ut=bt.padding,ge=bt.flipVariations,Yt=bt.allowedAutoPlacements,Jt=Yt===void 0?r:Yt,re=ee(At),Kt=re?ge?s:s.filter(function(Lt){return ee(Lt)===re}):c,Ft=Kt.filter(function(Lt){return Jt.indexOf(Lt)>=0});Ft.length===0&&(Ft=Kt);var Nt=Ft.reduce(function(Lt,_t){return Lt[_t]=oe(kt,{placement:_t,boundary:se,rootBoundary:Rt,padding:Ut})[xt(_t)],Lt},{});return Object.keys(Nt).sort(function(Lt,_t){return Nt[Lt]-Nt[_t]})}(d,{placement:pt,boundary:j,rootBoundary:A,padding:T,flipVariations:$,allowedAutoPlacements:Z}):pt)},[]),N=d.rects.reference,M=d.rects.popper,D=new Map,V=!0,F=K[0],U=0;U<K.length;U++){var X=K[U],et=xt(X),rt=ee(X)===a,dt=[g,x].indexOf(et)>=0,ft=dt?"width":"height",yt=oe(d,{placement:X,boundary:j,rootBoundary:A,altBoundary:P,padding:T}),ot=dt?rt?v:k:rt?x:g;N[ft]>M[ft]&&(ot=ye(ot));var ut=ye(ot),Ot=[];if(_&&Ot.push(yt[et]<=0),S&&Ot.push(yt[ot]<=0,yt[ut]<=0),Ot.every(function(Ct){return Ct})){F=X,V=!1;break}D.set(X,Ot)}if(V)for(var Vt=function(Ct){var pt=K.find(function(kt){var Bt=D.get(kt);if(Bt)return Bt.slice(0,Ct).every(function(bt){return bt})});if(pt)return F=pt,"break"},Wt=$?3:1;Wt>0&&Vt(Wt)!=="break";Wt--);d.placement!==F&&(d.modifiersData[f]._skip=!0,d.placement=F,d.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function je(w,d,p){return p===void 0&&(p={x:0,y:0}),{top:w.top-d.height-p.y,right:w.right-d.width+p.x,bottom:w.bottom-d.height+p.y,left:w.left-d.width-p.x}}function Pe(w){return[g,v,x,k].some(function(d){return w[d]>=0})}const Be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(w){var d=w.state,p=w.name,f=d.rects.reference,C=d.rects.popper,_=d.modifiersData.preventOverflow,E=oe(d,{elementContext:"reference"}),S=oe(d,{altBoundary:!0}),L=je(E,f),T=je(S,C,_),j=Pe(L),A=Pe(T);d.modifiersData[p]={referenceClippingOffsets:L,popperEscapeOffsets:T,isReferenceHidden:j,hasPopperEscaped:A},d.attributes.popper=Object.assign({},d.attributes.popper,{"data-popper-reference-hidden":j,"data-popper-escaped":A})}},Me={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(w){var d=w.state,p=w.options,f=w.name,C=p.offset,_=C===void 0?[0,0]:C,E=r.reduce(function(j,A){return j[A]=function(P,z,$){var Z=xt(P),H=[k,g].indexOf(Z)>=0?-1:1,W=typeof $=="function"?$(Object.assign({},z,{placement:P})):$,Q=W[0],K=W[1];return Q=Q||0,K=(K||0)*H,[k,v].indexOf(Z)>=0?{x:K,y:Q}:{x:Q,y:K}}(A,d.rects,_),j},{}),S=E[d.placement],L=S.x,T=S.y;d.modifiersData.popperOffsets!=null&&(d.modifiersData.popperOffsets.x+=L,d.modifiersData.popperOffsets.y+=T),d.modifiersData[f]=E}},ke={name:"popperOffsets",enabled:!0,phase:"read",fn:function(w){var d=w.state,p=w.name;d.modifiersData[p]=Ge({reference:d.rects.reference,element:d.rects.popper,strategy:"absolute",placement:d.placement})},data:{}},_e={name:"preventOverflow",enabled:!0,phase:"main",fn:function(w){var d=w.state,p=w.options,f=w.name,C=p.mainAxis,_=C===void 0||C,E=p.altAxis,S=E!==void 0&&E,L=p.boundary,T=p.rootBoundary,j=p.altBoundary,A=p.padding,P=p.tether,z=P===void 0||P,$=p.tetherOffset,Z=$===void 0?0:$,H=oe(d,{boundary:L,rootBoundary:T,padding:A,altBoundary:j}),W=xt(d.placement),Q=ee(d.placement),K=!Q,N=Xt(W),M=N==="x"?"y":"x",D=d.modifiersData.popperOffsets,V=d.rects.reference,F=d.rects.popper,U=typeof Z=="function"?Z(Object.assign({},d.rects,{placement:d.placement})):Z,X=typeof U=="number"?{mainAxis:U,altAxis:U}:Object.assign({mainAxis:0,altAxis:0},U),et=d.modifiersData.offset?d.modifiersData.offset[d.placement]:null,rt={x:0,y:0};if(D){if(_){var dt,ft=N==="y"?g:k,yt=N==="y"?x:v,ot=N==="y"?"height":"width",ut=D[N],Ot=ut+H[ft],Vt=ut-H[yt],Wt=z?-F[ot]/2:0,Ct=Q===a?V[ot]:F[ot],pt=Q===a?-F[ot]:-V[ot],kt=d.elements.arrow,Bt=z&&kt?qt(kt):{width:0,height:0},bt=d.modifiersData["arrow#persistent"]?d.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},At=bt[ft],se=bt[yt],Rt=te(0,V[ot],Bt[ot]),Ut=K?V[ot]/2-Wt-Rt-At-X.mainAxis:Ct-Rt-At-X.mainAxis,ge=K?-V[ot]/2+Wt+Rt+se+X.mainAxis:pt+Rt+se+X.mainAxis,Yt=d.elements.arrow&&tt(d.elements.arrow),Jt=Yt?N==="y"?Yt.clientTop||0:Yt.clientLeft||0:0,re=(dt=et==null?void 0:et[N])!=null?dt:0,Kt=ut+ge-re,Ft=te(z?St(Ot,ut+Ut-re-Jt):Ot,ut,z?ht(Vt,Kt):Vt);D[N]=Ft,rt[N]=Ft-ut}if(S){var Nt,Lt=N==="x"?g:k,_t=N==="x"?x:v,Mt=D[M],zt=M==="y"?"height":"width",me=Mt+H[Lt],qe=Mt-H[_t],Le=[g,k].indexOf(W)!==-1,Se=(Nt=et==null?void 0:et[M])!=null?Nt:0,He=Le?me:Mt-V[zt]-F[zt]-Se+X.altAxis,Ne=Le?Mt+V[zt]+F[zt]-Se-X.altAxis:qe,Ve=z&&Le?function(Ye,tn,ze){var Ie=te(Ye,tn,ze);return Ie>ze?ze:Ie}(He,Mt,Ne):te(z?He:me,Mt,z?Ne:qe);D[M]=Ve,rt[M]=Ve-Mt}d.modifiersData[f]=rt}},requiresIfExists:["offset"]};function Ze(w,d,p){p===void 0&&(p=!1);var f,C,_=ct(d),E=ct(d)&&function(A){var P=A.getBoundingClientRect(),z=jt(P.width)/A.offsetWidth||1,$=jt(P.height)/A.offsetHeight||1;return z!==1||$!==1}(d),S=J(d),L=Ht(w,E,p),T={scrollLeft:0,scrollTop:0},j={x:0,y:0};return(_||!_&&!p)&&((mt(d)!=="body"||he(S))&&(T=(f=d)!==it(f)&&ct(f)?{scrollLeft:(C=f).scrollLeft,scrollTop:C.scrollTop}:we(f)),ct(d)?((j=Ht(d,!0)).x+=d.clientLeft,j.y+=d.clientTop):S&&(j.x=pe(S))),{x:L.left+T.scrollLeft-j.x,y:L.top+T.scrollTop-j.y,width:L.width,height:L.height}}function Ke(w){var d=new Map,p=new Set,f=[];function C(_){p.add(_.name),[].concat(_.requires||[],_.requiresIfExists||[]).forEach(function(E){if(!p.has(E)){var S=d.get(E);S&&C(S)}}),f.push(_)}return w.forEach(function(_){d.set(_.name,_)}),w.forEach(function(_){p.has(_.name)||C(_)}),f}var Ue={placement:"bottom",modifiers:[],strategy:"absolute"};function De(){for(var w=arguments.length,d=new Array(w),p=0;p<w;p++)d[p]=arguments[p];return!d.some(function(f){return!(f&&typeof f.getBoundingClientRect=="function")})}function fe(w){w===void 0&&(w={});var d=w,p=d.defaultModifiers,f=p===void 0?[]:p,C=d.defaultOptions,_=C===void 0?Ue:C;return function(E,S,L){L===void 0&&(L=_);var T,j,A={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ue,_),modifiersData:{},elements:{reference:E,popper:S},attributes:{},styles:{}},P=[],z=!1,$={state:A,setOptions:function(H){var W=typeof H=="function"?H(A.options):H;Z(),A.options=Object.assign({},_,A.options,W),A.scrollParents={reference:lt(E)?ue(E):E.contextElement?ue(E.contextElement):[],popper:ue(S)};var Q,K,N=function(M){var D=Ke(M);return wt.reduce(function(V,F){return V.concat(D.filter(function(U){return U.phase===F}))},[])}((Q=[].concat(f,A.options.modifiers),K=Q.reduce(function(M,D){var V=M[D.name];return M[D.name]=V?Object.assign({},V,D,{options:Object.assign({},V.options,D.options),data:Object.assign({},V.data,D.data)}):D,M},{}),Object.keys(K).map(function(M){return K[M]})));return A.orderedModifiers=N.filter(function(M){return M.enabled}),A.orderedModifiers.forEach(function(M){var D=M.name,V=M.options,F=V===void 0?{}:V,U=M.effect;if(typeof U=="function"){var X=U({state:A,name:D,instance:$,options:F}),et=function(){};P.push(X||et)}}),$.update()},forceUpdate:function(){if(!z){var H=A.elements,W=H.reference,Q=H.popper;if(De(W,Q)){A.rects={reference:Ze(W,tt(Q),A.options.strategy==="fixed"),popper:qt(Q)},A.reset=!1,A.placement=A.options.placement,A.orderedModifiers.forEach(function(U){return A.modifiersData[U.name]=Object.assign({},U.data)});for(var K=0;K<A.orderedModifiers.length;K++)if(A.reset!==!0){var N=A.orderedModifiers[K],M=N.fn,D=N.options,V=D===void 0?{}:D,F=N.name;typeof M=="function"&&(A=M({state:A,options:V,name:F,instance:$})||A)}else A.reset=!1,K=-1}}},update:(T=function(){return new Promise(function(H){$.forceUpdate(),H(A)})},function(){return j||(j=new Promise(function(H){Promise.resolve().then(function(){j=void 0,H(T())})})),j}),destroy:function(){Z(),z=!0}};if(!De(E,S))return $;function Z(){P.forEach(function(H){return H()}),P=[]}return $.setOptions(L).then(function(H){!z&&L.onFirstUpdate&&L.onFirstUpdate(H)}),$}}var Ee=fe(),Qe=fe({defaultModifiers:[de,ke,ve,$t,Me,ie,_e,Oe,Be]}),Xe=fe({defaultModifiers:[de,ke,ve,$t]})},190:(Y,b)=>{Object.defineProperty(b,"__esModule",{value:!0}),b.BREAKPOINTS=b.COMBO_BOX_ACCESSIBILITY_KEY_SET=b.SELECT_ACCESSIBILITY_KEY_SET=b.TABS_ACCESSIBILITY_KEY_SET=b.OVERLAY_ACCESSIBILITY_KEY_SET=b.DROPDOWN_ACCESSIBILITY_KEY_SET=b.POSITIONS=void 0,b.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},b.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","Home","End","Enter"],b.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],b.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],b.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Tab"],b.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"],b.BREAKPOINTS={sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},700:function(Y,b,y){var g=this&&this.__importDefault||function(at){return at&&at.__esModule?at:{default:at}};Object.defineProperty(b,"__esModule",{value:!0}),b.HSStaticMethods=b.HSTooltip=b.HSTogglePassword=b.HSToggleCount=b.HSThemeSwitch=b.HSTabs=b.HSStrongPassword=b.HSStepper=b.HSSelect=b.HSScrollspy=b.HSSearchByJson=b.HSRemoveElement=b.HSPinInput=b.HSOverlay=b.HSInputNumber=b.HSDropdown=b.HSComboBox=b.HSCollapse=b.HSCarousel=b.HSAccordion=b.HSCopyMarkup=void 0;var x=y(413);Object.defineProperty(b,"HSCopyMarkup",{enumerable:!0,get:function(){return g(x).default}});var v=y(460);Object.defineProperty(b,"HSAccordion",{enumerable:!0,get:function(){return g(v).default}});var k=y(629);Object.defineProperty(b,"HSCarousel",{enumerable:!0,get:function(){return g(k).default}});var h=y(652);Object.defineProperty(b,"HSCollapse",{enumerable:!0,get:function(){return g(h).default}});var c=y(23);Object.defineProperty(b,"HSComboBox",{enumerable:!0,get:function(){return g(c).default}});var a=y(610);Object.defineProperty(b,"HSDropdown",{enumerable:!0,get:function(){return g(a).default}});var o=y(371);Object.defineProperty(b,"HSInputNumber",{enumerable:!0,get:function(){return g(o).default}});var t=y(770);Object.defineProperty(b,"HSOverlay",{enumerable:!0,get:function(){return g(t).default}});var e=y(659);Object.defineProperty(b,"HSPinInput",{enumerable:!0,get:function(){return g(e).default}});var n=y(139);Object.defineProperty(b,"HSRemoveElement",{enumerable:!0,get:function(){return g(n).default}});var i=y(961);Object.defineProperty(b,"HSSearchByJson",{enumerable:!0,get:function(){return g(i).default}});var s=y(591);Object.defineProperty(b,"HSScrollspy",{enumerable:!0,get:function(){return g(s).default}});var r=y(233);Object.defineProperty(b,"HSSelect",{enumerable:!0,get:function(){return g(r).default}});var l=y(957);Object.defineProperty(b,"HSStepper",{enumerable:!0,get:function(){return g(l).default}});var u=y(983);Object.defineProperty(b,"HSStrongPassword",{enumerable:!0,get:function(){return g(u).default}});var I=y(949);Object.defineProperty(b,"HSTabs",{enumerable:!0,get:function(){return g(I).default}});var m=y(557);Object.defineProperty(b,"HSThemeSwitch",{enumerable:!0,get:function(){return g(m).default}});var O=y(87);Object.defineProperty(b,"HSToggleCount",{enumerable:!0,get:function(){return g(O).default}});var B=y(366);Object.defineProperty(b,"HSTogglePassword",{enumerable:!0,get:function(){return g(B).default}});var G=y(679);Object.defineProperty(b,"HSTooltip",{enumerable:!0,get:function(){return g(G).default}});var q=y(313);Object.defineProperty(b,"HSStaticMethods",{enumerable:!0,get:function(){return g(q).default}})},460:function(Y,b,y){/*
 * HSAccordion
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(a,o){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},g(a,o)},function(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=a}g(a,o),a.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}),v=this&&this.__assign||function(){return v=Object.assign||function(a){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a},v.apply(this,arguments)},k=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=function(a){function o(t,e,n){var i=a.call(this,t,e,n)||this;return i.toggle=i.el.querySelector(".hs-accordion-toggle")||null,i.content=i.el.querySelector(".hs-accordion-content")||null,i.group=i.el.closest(".hs-accordion-group")||null,i.isAlwaysOpened=i.group.hasAttribute("data-hs-accordion-always-open")||!1,i.toggle&&i.content&&i.init(),i}return x(o,a),o.prototype.init=function(){var t=this;this.createCollection(window.$hsAccordionCollection,this),this.toggle.addEventListener("click",function(e){e.stopPropagation(),t.el.classList.contains("active")?t.hide():t.show()})},o.prototype.show=function(){var t=this;if(this.group&&!this.isAlwaysOpened&&this.group.querySelector(":scope > .hs-accordion.active")&&this.group.querySelector(":scope > .hs-accordion.active")!==this.el&&window.$hsAccordionCollection.find(function(e){return e.element.el===t.group.querySelector(":scope > .hs-accordion.active")}).element.hide(),this.el.classList.contains("active"))return!1;this.el.classList.add("active"),this.content.style.display="block",this.content.style.height="0",setTimeout(function(){t.content.style.height="".concat(t.content.scrollHeight,"px")}),(0,h.afterTransition)(this.content,function(){t.content.style.display="block",t.content.style.height="",t.fireEvent("open",t.el),(0,h.dispatch)("open.hs.accordion",t.el,t.el)})},o.prototype.hide=function(){var t=this;if(!this.el.classList.contains("active"))return!1;this.el.classList.remove("active"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout(function(){t.content.style.height="0"}),(0,h.afterTransition)(this.content,function(){t.content.style.display="",t.content.style.height="0",t.fireEvent("close",t.el),(0,h.dispatch)("close.hs.accordion",t.el,t.el)})},o.getInstance=function(t,e){var n=window.$hsAccordionCollection.find(function(i){return i.element.el===(typeof t=="string"?document.querySelector(t):t)});return n?e?n:n.element.el:null},o.show=function(t){var e=window.$hsAccordionCollection.find(function(n){return n.element.el===(typeof t=="string"?document.querySelector(t):t)});e&&e.element.content.style.display!=="block"&&e.element.show()},o.hide=function(t){var e=window.$hsAccordionCollection.find(function(n){return n.element.el===(typeof t=="string"?document.querySelector(t):t)});e&&e.element.content.style.display==="block"&&e.element.hide()},o.autoInit=function(){window.$hsAccordionCollection||(window.$hsAccordionCollection=[]),document.querySelectorAll(".hs-accordion:not(.--prevent-on-load-init)").forEach(function(t){window.$hsAccordionCollection.find(function(e){var n;return((n=e==null?void 0:e.element)===null||n===void 0?void 0:n.el)===t})||new o(t)})},o.treeView=function(){var t=this;if(!document.querySelectorAll(".hs-accordion-treeview-root").length)return!1;this.selectable=[],document.querySelectorAll(".hs-accordion-treeview-root").forEach(function(e){var n=e==null?void 0:e.getAttribute("data-hs-accordion-options"),i=n?JSON.parse(n):{};t.selectable.push({el:e,options:v({},i)})}),this.selectable.length&&this.selectable.forEach(function(e){e.el.querySelectorAll(".hs-accordion-selectable").forEach(function(n){n.addEventListener("click",function(i){i.stopPropagation(),t.toggleSelected(e,n)})})})},o.toggleSelected=function(t,e){e.classList.contains("selected")?e.classList.remove("selected"):(t.el.querySelectorAll(".hs-accordion-selectable").forEach(function(n){return n.classList.remove("selected")}),e.classList.add("selected"))},o.on=function(t,e,n){var i=window.$hsAccordionCollection.find(function(s){return s.element.el===(typeof e=="string"?document.querySelector(e):e)});i&&(i.element.events[t]=n)},o}(k(y(737)).default);window.addEventListener("load",function(){c.autoInit(),document.querySelectorAll(".hs-accordion-treeview-root").length&&c.treeView()}),typeof window<"u"&&(window.HSAccordion=c),b.default=c},737:(Y,b)=>{/*
 * HSBasePlugin
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */Object.defineProperty(b,"__esModule",{value:!0});var y=function(){function g(x,v,k){this.el=x,this.options=v,this.events=k,this.el=x,this.options=v,this.events={}}return g.prototype.createCollection=function(x,v){var k;x.push({id:((k=v==null?void 0:v.el)===null||k===void 0?void 0:k.id)||x.length+1,element:v})},g.prototype.fireEvent=function(x,v){if(v===void 0&&(v=null),this.events.hasOwnProperty(x))return this.events[x](v)},g.prototype.on=function(x,v){this.events[x]=v},g}();b.default=y},629:function(Y,b,y){/*
 * HSCarousel
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(c,a){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])},g(c,a)},function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function o(){this.constructor=c}g(c,a),c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}),v=this&&this.__assign||function(){return v=Object.assign||function(c){for(var a,o=1,t=arguments.length;o<t;o++)for(var e in a=arguments[o])Object.prototype.hasOwnProperty.call(a,e)&&(c[e]=a[e]);return c},v.apply(this,arguments)},k=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(b,"__esModule",{value:!0});var h=function(c){function a(o,t){var e,n,i,s=c.call(this,o,t)||this,r=o.getAttribute("data-hs-carousel"),l=r?JSON.parse(r):{},u=v(v({},l),t);return s.currentIndex=u.currentIndex||0,s.loadingClasses=u.loadingClasses?"".concat(u.loadingClasses).split(","):null,s.loadingClassesRemove=!((e=s.loadingClasses)===null||e===void 0)&&e[0]?s.loadingClasses[0].split(" "):"opacity-0",s.loadingClassesAdd=!((n=s.loadingClasses)===null||n===void 0)&&n[1]?s.loadingClasses[1].split(" "):"",s.afterLoadingClassesAdd=!((i=s.loadingClasses)===null||i===void 0)&&i[2]?s.loadingClasses[2].split(" "):"",s.isAutoPlay=u.isAutoPlay!==void 0&&u.isAutoPlay,s.speed=u.speed||4e3,s.isInfiniteLoop=u.isInfiniteLoop===void 0||u.isInfiniteLoop,s.inner=s.el.querySelector(".hs-carousel-body")||null,s.slides=s.el.querySelectorAll(".hs-carousel-slide")||[],s.prev=s.el.querySelector(".hs-carousel-prev")||null,s.next=s.el.querySelector(".hs-carousel-next")||null,s.dots=s.el.querySelectorAll(".hs-carousel-pagination > *")||null,s.sliderWidth=s.inner.parentElement.clientWidth,s.touchX={start:0,end:0},s.init(),s}return x(a,c),a.prototype.init=function(){var o,t,e=this;this.createCollection(window.$hsCarouselCollection,this),this.inner&&(this.calculateWidth(),this.loadingClassesRemove&&(typeof this.loadingClassesRemove=="string"?this.inner.classList.remove(this.loadingClassesRemove):(o=this.inner.classList).remove.apply(o,this.loadingClassesRemove)),this.loadingClassesAdd&&(typeof this.loadingClassesAdd=="string"?this.inner.classList.add(this.loadingClassesAdd):(t=this.inner.classList).add.apply(t,this.loadingClassesAdd))),this.prev&&this.prev.addEventListener("click",function(){e.goToPrev(),e.isAutoPlay&&(e.resetTimer(),e.setTimer())}),this.next&&this.next.addEventListener("click",function(){e.goToNext(),e.isAutoPlay&&(e.resetTimer(),e.setTimer())}),this.dots&&this.dots.forEach(function(n,i){return n.addEventListener("click",function(){e.goTo(i),e.isAutoPlay&&(e.resetTimer(),e.setTimer())})}),this.slides.length&&(this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass(),this.isAutoPlay&&this.autoPlay()),this.inner&&this.afterLoadingClassesAdd&&setTimeout(function(){var n;typeof e.afterLoadingClassesAdd=="string"?e.inner.classList.add(e.afterLoadingClassesAdd):(n=e.inner.classList).add.apply(n,e.afterLoadingClassesAdd)}),this.el.classList.add("init"),this.el.addEventListener("touchstart",function(n){e.touchX.start=n.changedTouches[0].screenX}),this.el.addEventListener("touchend",function(n){e.touchX.end=n.changedTouches[0].screenX,e.detectDirection()}),this.observeResize()},a.prototype.observeResize=function(){var o=this;new ResizeObserver(function(){return o.recalculateWidth()}).observe(document.querySelector("body"))},a.prototype.calculateWidth=function(){var o=this;this.inner.style.width="".concat(this.sliderWidth*this.slides.length,"px"),this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.slides.forEach(function(t){t.style.width="".concat(o.sliderWidth,"px")})},a.prototype.addCurrentClass=function(){var o=this;this.slides.forEach(function(t,e){e===o.currentIndex?t.classList.add("active"):t.classList.remove("active")}),this.dots&&this.dots.forEach(function(t,e){e===o.currentIndex?t.classList.add("active"):t.classList.remove("active")})},a.prototype.addDisabledClass=function(){if(!this.prev||!this.next)return!1;this.currentIndex===0?(this.next.classList.remove("disabled"),this.prev.classList.add("disabled")):this.currentIndex===this.slides.length-1?(this.prev.classList.remove("disabled"),this.next.classList.add("disabled")):(this.prev.classList.remove("disabled"),this.next.classList.remove("disabled"))},a.prototype.autoPlay=function(){this.setTimer()},a.prototype.setTimer=function(){var o=this;this.timer=setInterval(function(){o.currentIndex===o.slides.length-1?o.goTo(0):o.goToNext()},this.speed)},a.prototype.resetTimer=function(){clearInterval(this.timer)},a.prototype.detectDirection=function(){var o=this.touchX,t=o.start,e=o.end;e<t&&this.goToNext(),e>t&&this.goToPrev()},a.prototype.recalculateWidth=function(){this.sliderWidth=this.inner.parentElement.clientWidth,this.calculateWidth()},a.prototype.goToPrev=function(){this.currentIndex===0&&this.isInfiniteLoop?(this.currentIndex=this.slides.length-1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):this.currentIndex!==0&&(this.currentIndex-=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},a.prototype.goToNext=function(){this.currentIndex===this.slides.length-1&&this.isInfiniteLoop?(this.currentIndex=0,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):this.currentIndex<this.slides.length-1&&(this.currentIndex+=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},a.prototype.goTo=function(o){this.currentIndex=o,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()},a.getInstance=function(o,t){var e=window.$hsCarouselCollection.find(function(n){return n.element.el===(typeof o=="string"?document.querySelector(o):o)});return e?t?e:e.element:null},a.autoInit=function(){window.$hsCarouselCollection||(window.$hsCarouselCollection=[]),document.querySelectorAll("[data-hs-carousel]:not(.--prevent-on-load-init)").forEach(function(o){window.$hsCarouselCollection.find(function(t){var e;return((e=t==null?void 0:t.element)===null||e===void 0?void 0:e.el)===o})||new a(o)})},a}(k(y(737)).default);window.addEventListener("load",function(){h.autoInit()}),window.addEventListener("resize",function(){if(!window.$hsCarouselCollection)return!1;window.$hsCarouselCollection.forEach(function(c){c.element.recalculateWidth()})}),typeof window<"u"&&(window.HSCarousel=h),b.default=h},652:function(Y,b,y){/*
 * HSCollapse
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(c,a){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])},g(c,a)},function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function o(){this.constructor=c}g(c,a),c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}),v=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(b,"__esModule",{value:!0});var k=y(969),h=function(c){function a(o,t,e){var n=c.call(this,o,t,e)||this;return n.contentId=n.el.dataset.hsCollapse,n.content=document.querySelector(n.contentId),n.animationInProcess=!1,n.content&&n.init(),n}return x(a,c),a.prototype.init=function(){var o=this;this.createCollection(window.$hsCollapseCollection,this),this.el.addEventListener("click",function(){o.content.classList.contains("open")?o.hide():o.show()})},a.prototype.hideAllMegaMenuItems=function(){this.content.querySelectorAll(".hs-mega-menu-content.block").forEach(function(o){o.classList.remove("block"),o.classList.add("hidden")})},a.prototype.show=function(){var o=this;if(this.animationInProcess||this.el.classList.contains("open"))return!1;this.animationInProcess=!0,this.el.classList.add("open"),this.content.classList.add("open"),this.content.classList.remove("hidden"),this.content.style.height="0",setTimeout(function(){o.content.style.height="".concat(o.content.scrollHeight,"px"),o.fireEvent("beforeOpen",o.el),(0,k.dispatch)("beforeOpen.hs.collapse",o.el,o.el)}),(0,k.afterTransition)(this.content,function(){o.content.style.height="",o.fireEvent("open",o.el),(0,k.dispatch)("open.hs.collapse",o.el,o.el),o.animationInProcess=!1})},a.prototype.hide=function(){var o=this;if(this.animationInProcess||!this.el.classList.contains("open"))return!1;this.animationInProcess=!0,this.el.classList.remove("open"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout(function(){o.content.style.height="0"}),this.content.classList.remove("open"),(0,k.afterTransition)(this.content,function(){o.content.classList.add("hidden"),o.content.style.height="",o.fireEvent("hide",o.el),(0,k.dispatch)("hide.hs.collapse",o.el,o.el),o.animationInProcess=!1}),this.content.querySelectorAll(".hs-mega-menu-content.block").length&&this.hideAllMegaMenuItems()},a.getInstance=function(o,t){t===void 0&&(t=!1);var e=window.$hsCollapseCollection.find(function(n){return n.element.el===(typeof o=="string"?document.querySelector(o):o)});return e?t?e:e.element.el:null},a.autoInit=function(){window.$hsCollapseCollection||(window.$hsCollapseCollection=[]),document.querySelectorAll(".hs-collapse-toggle:not(.--prevent-on-load-init)").forEach(function(o){window.$hsCollapseCollection.find(function(t){var e;return((e=t==null?void 0:t.element)===null||e===void 0?void 0:e.el)===o})||new a(o)})},a.show=function(o){var t=window.$hsCollapseCollection.find(function(e){return e.element.el===(typeof o=="string"?document.querySelector(o):o)});t&&t.element.content.classList.contains("hidden")&&t.element.show()},a.hide=function(o){var t=window.$hsCollapseCollection.find(function(e){return e.element.el===(typeof o=="string"?document.querySelector(o):o)});t&&!t.element.content.classList.contains("hidden")&&t.element.hide()},a.on=function(o,t,e){var n=window.$hsCollapseCollection.find(function(i){return i.element.el===(typeof t=="string"?document.querySelector(t):t)});n&&(n.element.events[o]=e)},a}(v(y(737)).default);window.addEventListener("load",function(){h.autoInit()}),typeof window<"u"&&(window.HSCollapse=h),b.default=h},23:function(Y,b,y){/*
 * HSComboBox
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(i,s){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,l){r.__proto__=l}||function(r,l){for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(r[u]=l[u])},g(i,s)},function(i,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function r(){this.constructor=i}g(i,s),i.prototype=s===null?Object.create(s):(r.prototype=s.prototype,new r)}),v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var s,r=1,l=arguments.length;r<l;r++)for(var u in s=arguments[r])Object.prototype.hasOwnProperty.call(s,u)&&(i[u]=s[u]);return i},v.apply(this,arguments)},k=this&&this.__awaiter||function(i,s,r,l){return new(r||(r=Promise))(function(u,I){function m(G){try{B(l.next(G))}catch(q){I(q)}}function O(G){try{B(l.throw(G))}catch(q){I(q)}}function B(G){var q;G.done?u(G.value):(q=G.value,q instanceof r?q:new r(function(at){at(q)})).then(m,O)}B((l=l.apply(i,s||[])).next())})},h=this&&this.__generator||function(i,s){var r,l,u,I,m={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return I={next:O(0),throw:O(1),return:O(2)},typeof Symbol=="function"&&(I[Symbol.iterator]=function(){return this}),I;function O(B){return function(G){return function(q){if(r)throw new TypeError("Generator is already executing.");for(;I&&(I=0,q[0]&&(m=0)),m;)try{if(r=1,l&&(u=2&q[0]?l.return:q[0]?l.throw||((u=l.return)&&u.call(l),0):l.next)&&!(u=u.call(l,q[1])).done)return u;switch(l=0,u&&(q=[2&q[0],u.value]),q[0]){case 0:case 1:u=q;break;case 4:return m.label++,{value:q[1],done:!1};case 5:m.label++,l=q[1],q=[0];continue;case 7:q=m.ops.pop(),m.trys.pop();continue;default:if(u=m.trys,!((u=u.length>0&&u[u.length-1])||q[0]!==6&&q[0]!==2)){m=0;continue}if(q[0]===3&&(!u||q[1]>u[0]&&q[1]<u[3])){m.label=q[1];break}if(q[0]===6&&m.label<u[1]){m.label=u[1],u=q;break}if(u&&m.label<u[2]){m.label=u[2],m.ops.push(q);break}u[2]&&m.ops.pop(),m.trys.pop();continue}q=s.call(i,m)}catch(at){q=[6,at],l=0}finally{r=u=0}if(5&q[0])throw q[1];return{value:q[0]?q[1]:void 0,done:!0}}([B,G])}}},c=this&&this.__spreadArray||function(i,s,r){if(r||arguments.length===2)for(var l,u=0,I=s.length;u<I;u++)!l&&u in s||(l||(l=Array.prototype.slice.call(s,0,u)),l[u]=s[u]);return i.concat(l||Array.prototype.slice.call(s))},a=this&&this.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(b,"__esModule",{value:!0});var o=y(969),t=a(y(737)),e=y(190),n=function(i){function s(r,l,u){var I,m,O,B,G,q,at,wt,mt,it,lt,ct,vt,$t,xt,ht,St,jt,Dt,Gt,Ht,qt,Zt,It,Pt,J=i.call(this,r,l,u)||this,Tt=r.getAttribute("data-hs-combo-box"),Qt=Tt?JSON.parse(Tt):{},tt=v(v({},Qt),l);return J.gap=5,J.viewport=(I=typeof(tt==null?void 0:tt.viewport)=="string"?document.querySelector(tt==null?void 0:tt.viewport):tt==null?void 0:tt.viewport)!==null&&I!==void 0?I:null,J.preventVisibility=(m=tt==null?void 0:tt.preventVisibility)!==null&&m!==void 0&&m,J.apiUrl=(O=tt==null?void 0:tt.apiUrl)!==null&&O!==void 0?O:null,J.apiDataPart=(B=tt==null?void 0:tt.apiDataPart)!==null&&B!==void 0?B:null,J.apiQuery=(G=tt==null?void 0:tt.apiQuery)!==null&&G!==void 0?G:null,J.apiSearchQuery=(q=tt==null?void 0:tt.apiSearchQuery)!==null&&q!==void 0?q:null,J.apiHeaders=(at=tt==null?void 0:tt.apiHeaders)!==null&&at!==void 0?at:{},J.apiGroupField=(wt=tt==null?void 0:tt.apiGroupField)!==null&&wt!==void 0?wt:null,J.outputItemTemplate=(mt=tt==null?void 0:tt.outputItemTemplate)!==null&&mt!==void 0?mt:`<div class="cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-hs-combo-box-output-item>
				<div class="flex justify-between items-center w-full">
					<span data-hs-combo-box-search-text></span>
					<span class="hidden hs-combo-box-selected:block">
						<svg class="flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</span>
				</div>
			</div>`,J.outputEmptyTemplate=(it=tt==null?void 0:tt.outputEmptyTemplate)!==null&&it!==void 0?it:'<div class="py-2 px-4 w-full text-sm text-gray-800 rounded-lg dark:bg-neutral-900 dark:text-neutral-200">Nothing found...</div>',J.outputLoaderTemplate=(lt=tt==null?void 0:tt.outputLoaderTemplate)!==null&&lt!==void 0?lt:`<div class="flex justify-center items-center py-2 px-4 text-sm text-gray-800 rounded-lg bg-white dark:bg-neutral-900 dark:text-neutral-200">
				<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
					<span class="sr-only">Loading...</span>
				</div>
			</div>`,J.groupingType=(ct=tt==null?void 0:tt.groupingType)!==null&&ct!==void 0?ct:null,J.groupingTitleTemplate=(vt=tt==null?void 0:tt.groupingTitleTemplate)!==null&&vt!==void 0?vt:J.groupingType==="default"?'<div class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></div>':'<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold whitespace-nowrap rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"></button>',J.tabsWrapperTemplate=($t=tt==null?void 0:tt.tabsWrapperTemplate)!==null&&$t!==void 0?$t:'<div class="overflow-x-auto p-4"></div>',J.preventSelection=(xt=tt==null?void 0:tt.preventSelection)!==null&&xt!==void 0&&xt,J.preventAutoPosition=(ht=tt==null?void 0:tt.preventAutoPosition)!==null&&ht!==void 0&&ht,J.isOpenOnFocus=(St=tt==null?void 0:tt.isOpenOnFocus)!==null&&St!==void 0&&St,J.input=(jt=J.el.querySelector("[data-hs-combo-box-input]"))!==null&&jt!==void 0?jt:null,J.output=(Dt=J.el.querySelector("[data-hs-combo-box-output]"))!==null&&Dt!==void 0?Dt:null,J.itemsWrapper=(Gt=J.el.querySelector("[data-hs-combo-box-output-items-wrapper]"))!==null&&Gt!==void 0?Gt:null,J.items=(Ht=Array.from(J.el.querySelectorAll("[data-hs-combo-box-output-item]")))!==null&&Ht!==void 0?Ht:[],J.tabs=[],J.toggle=(qt=J.el.querySelector("[data-hs-combo-box-toggle]"))!==null&&qt!==void 0?qt:null,J.toggleClose=(Zt=J.el.querySelector("[data-hs-combo-box-close]"))!==null&&Zt!==void 0?Zt:null,J.toggleOpen=(It=J.el.querySelector("[data-hs-combo-box-open]"))!==null&&It!==void 0?It:null,J.outputPlaceholder=null,J.selected=J.value=(Pt=J.el.querySelector("[data-hs-combo-box-input]").value)!==null&&Pt!==void 0?Pt:"",J.isOpened=!1,J.isCurrent=!1,J.animationInProcess=!1,J.selectedGroup="all",J.init(),J}return x(s,i),s.prototype.init=function(){this.createCollection(window.$hsComboBoxCollection,this),this.build()},s.prototype.build=function(){this.buildInput(),this.groupingType&&this.setGroups(),this.buildItems(),this.preventVisibility&&(this.isOpened=!0,this.preventAutoPosition||this.recalculateDirection()),this.toggle&&this.buildToggle(),this.toggleClose&&this.buildToggleClose(),this.toggleOpen&&this.buildToggleOpen()},s.prototype.setResultAndRender=function(r){r===void 0&&(r=""),this.setResults(r),this.apiSearchQuery&&this.itemsFromJson()},s.prototype.buildInput=function(){var r=this;this.isOpenOnFocus&&this.input.addEventListener("focus",function(){r.isOpened||(r.setResultAndRender(),r.open())}),this.input.addEventListener("input",(0,o.debounce)(function(l){r.setResultAndRender(l.target.value),r.isOpened||r.open()}))},s.prototype.buildItems=function(){this.apiUrl?this.itemsFromJson():(this.itemsWrapper?this.itemsWrapper.innerHTML="":this.output.innerHTML="",this.itemsFromHtml())},s.prototype.setResults=function(r){this.value=r,this.resultItems(),this.hasVisibleItems()?this.destroyOutputPlaceholder():this.buildOutputPlaceholder()},s.prototype.isItemExists=function(r){return this.items.some(function(l){return Array.from(l.querySelectorAll("[data-hs-combo-box-search-text]")).some(function(u){return u.getAttribute("data-hs-combo-box-search-text")===r[u.getAttribute("data-hs-combo-box-output-item-field")]})})},s.prototype.isTextExists=function(r,l){var u=l.map(function(I){return I.toLowerCase()});return Array.from(r.querySelectorAll("[data-hs-combo-box-search-text]")).some(function(I){return u.includes(I.getAttribute("data-hs-combo-box-search-text").toLowerCase())})},s.prototype.isTextExistsAny=function(r,l){return Array.from(r.querySelectorAll("[data-hs-combo-box-search-text]")).some(function(u){return u.getAttribute("data-hs-combo-box-search-text").toLowerCase().includes(l.toLowerCase())})},s.prototype.valuesBySelector=function(r){return Array.from(r.querySelectorAll("[data-hs-combo-box-search-text]")).reduce(function(l,u){return c(c([],l,!0),[u.getAttribute("data-hs-combo-box-search-text")],!1)},[])},s.prototype.buildOutputLoader=function(){if(this.outputLoader)return!1;this.outputLoader=(0,o.htmlToElement)(this.outputLoaderTemplate),this.items.length||this.outputPlaceholder?(this.outputLoader.style.position="absolute",this.outputLoader.style.top="0",this.outputLoader.style.bottom="0",this.outputLoader.style.left="0",this.outputLoader.style.right="0",this.outputLoader.style.zIndex="2"):(this.outputLoader.style.position="",this.outputLoader.style.top="",this.outputLoader.style.bottom="",this.outputLoader.style.left="",this.outputLoader.style.right="",this.outputLoader.style.zIndex="",this.outputLoader.style.height="30px"),this.output.append(this.outputLoader)},s.prototype.destroyOutputLoader=function(){this.outputLoader&&this.outputLoader.remove(),this.outputLoader=null},s.prototype.itemsFromJson=function(){return k(this,void 0,void 0,function(){var r,l,u,I,m,O=this;return h(this,function(B){switch(B.label){case 0:this.buildOutputLoader(),B.label=1;case 1:return B.trys.push([1,4,,5]),r="".concat(this.apiQuery),l="".concat(this.apiSearchQuery,"=").concat(this.value.toLowerCase()),u=this.apiUrl,this.apiQuery&&this.apiSearchQuery?u+="?".concat(l,"&").concat(r):this.apiQuery?u+="?".concat(r):this.apiSearchQuery&&(u+="?".concat(l)),[4,fetch(u,this.apiHeaders)];case 2:return[4,B.sent().json()];case 3:return I=B.sent(),this.apiDataPart&&(I=I[this.apiDataPart]),this.apiSearchQuery&&(this.items=[]),this.itemsWrapper?this.itemsWrapper.innerHTML="":this.output.innerHTML="",this.groupingType==="tabs"?(this.setApiGroups(I),this.groupTabsRender(),this.jsonItemsRender(I)):this.groupingType==="default"?(this.setApiGroups(I),this.groups.forEach(function(G){var q=(0,o.htmlToElement)(O.groupingTitleTemplate);q.setAttribute("data-hs-combo-box-group-title",G.name),q.classList.add("--exclude-accessibility"),q.innerText=G.title;var at=I.filter(function(wt){return wt[O.apiGroupField]===G.name});O.itemsWrapper?O.itemsWrapper.append(q):O.output.append(q),O.jsonItemsRender(at)})):this.jsonItemsRender(I),this.setResults(this.input.value),[3,5];case 4:return m=B.sent(),console.error(m),[3,5];case 5:return this.destroyOutputLoader(),[2]}})})},s.prototype.jsonItemsRender=function(r){var l=this;r.forEach(function(u,I){if(l.isItemExists(u))return!1;var m=(0,o.htmlToElement)(l.outputItemTemplate);m.querySelectorAll("[data-hs-combo-box-search-text]").forEach(function(O){var B,G;O.textContent=(B=u[O.getAttribute("data-hs-combo-box-output-item-field")])!==null&&B!==void 0?B:"",O.setAttribute("data-hs-combo-box-search-text",(G=u[O.getAttribute("data-hs-combo-box-output-item-field")])!==null&&G!==void 0?G:"")}),m.querySelectorAll("[data-hs-combo-box-output-item-attr]").forEach(function(O){JSON.parse(O.getAttribute("data-hs-combo-box-output-item-attr")).forEach(function(B){O.setAttribute(B.attr,u[B.valueFrom])})}),m.setAttribute("tabIndex","".concat(I)),l.groupingType!=="tabs"&&l.groupingType!=="default"||m.setAttribute("data-hs-combo-box-output-item",'{"group": {"name": "'.concat(u[l.apiGroupField],'", "title": "').concat(u[l.apiGroupField],'"}}')),l.items=c(c([],l.items,!0),[m],!1),l.preventSelection||m.addEventListener("click",function(){l.close(m.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text")),l.setSelectedByValue(l.valuesBySelector(m))}),l.appendItemsToWrapper(m)})},s.prototype.setGroups=function(){var r=[];this.items.forEach(function(l){var u=JSON.parse(l.getAttribute("data-hs-combo-box-output-item")).group;r.some(function(I){return(I==null?void 0:I.name)===u.name})||r.push(u)}),this.groups=r},s.prototype.setCurrent=function(){window.$hsComboBoxCollection.length&&(window.$hsComboBoxCollection.map(function(r){return r.element.isCurrent=!1}),this.isCurrent=!0)},s.prototype.setApiGroups=function(r){var l=this,u=[];r.forEach(function(I){var m=I[l.apiGroupField];u.some(function(O){return O.name===m})||u.push({name:m,title:m})}),this.groups=u},s.prototype.sortItems=function(){return this.items.sort(function(r,l){var u=r.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),I=l.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text");return u<I?-1:u>I?1:0})},s.prototype.itemRender=function(r){var l=this,u=r.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text");this.itemsWrapper?this.itemsWrapper.append(r):this.output.append(r),this.preventSelection||r.addEventListener("click",function(){l.close(u),l.setSelectedByValue(l.valuesBySelector(r))})},s.prototype.plainRender=function(r){var l=this;r.forEach(function(u){l.itemRender(u)})},s.prototype.groupTabsRender=function(){var r=this,l=(0,o.htmlToElement)(this.tabsWrapperTemplate),u=(0,o.htmlToElement)('<div class="flex flex-nowrap gap-x-2"></div>');l.append(u),this.output.insertBefore(l,this.output.firstChild);var I=(0,o.htmlToElement)(this.groupingTitleTemplate);I.setAttribute("data-hs-combo-box-group-title","all"),I.classList.add("--exclude-accessibility","active"),I.innerText="All",this.tabs=c(c([],this.tabs,!0),[I],!1),u.append(I),I.addEventListener("click",function(){r.selectedGroup="all";var m=r.tabs.find(function(O){return O.getAttribute("data-hs-combo-box-group-title")===r.selectedGroup});r.tabs.forEach(function(O){return O.classList.remove("active")}),m.classList.add("active"),r.setItemsVisibility()}),this.groups.forEach(function(m){var O=(0,o.htmlToElement)(r.groupingTitleTemplate);O.setAttribute("data-hs-combo-box-group-title",m.name),O.classList.add("--exclude-accessibility"),O.innerText=m.title,r.tabs=c(c([],r.tabs,!0),[O],!1),u.append(O),O.addEventListener("click",function(){r.selectedGroup=m.name;var B=r.tabs.find(function(G){return G.getAttribute("data-hs-combo-box-group-title")===r.selectedGroup});r.tabs.forEach(function(G){return G.classList.remove("active")}),B.classList.add("active"),r.setItemsVisibility()})})},s.prototype.groupDefaultRender=function(){var r=this;this.groups.forEach(function(l){var u=(0,o.htmlToElement)(r.groupingTitleTemplate);u.setAttribute("data-hs-combo-box-group-title",l.name),u.classList.add("--exclude-accessibility"),u.innerText=l.title,r.itemsWrapper?r.itemsWrapper.append(u):r.output.append(u);var I=r.sortItems().filter(function(m){return JSON.parse(m.getAttribute("data-hs-combo-box-output-item")).group.name===l.name});r.plainRender(I)})},s.prototype.itemsFromHtml=function(){if(this.groupingType==="default")this.groupDefaultRender();else if(this.groupingType==="tabs"){var r=this.sortItems();this.groupTabsRender(),this.plainRender(r)}else r=this.sortItems(),this.plainRender(r);this.setResults(this.input.value)},s.prototype.buildToggle=function(){var r=this;this.toggle.addEventListener("click",function(){r.isOpened?r.close():r.open(r.toggle.getAttribute("data-hs-combo-box-toggle"))})},s.prototype.buildToggleClose=function(){var r=this;this.toggleClose.addEventListener("click",function(){return r.close()})},s.prototype.buildToggleOpen=function(){var r=this;this.toggleOpen.addEventListener("click",function(){return r.open()})},s.prototype.setSelectedByValue=function(r){var l=this;this.items.forEach(function(u){l.isTextExists(u,r)?u.classList.add("selected"):u.classList.remove("selected")})},s.prototype.setValue=function(r){this.selected=r,this.value=r,this.input.value=r,this.fireEvent("select",this.el),(0,o.dispatch)("select.hs.combobox",this.el,this.value)},s.prototype.setItemsVisibility=function(){var r=this;this.groupingType==="tabs"&&this.selectedGroup!=="all"&&this.items.forEach(function(u){u.style.display="none"});var l=this.groupingType==="tabs"?this.selectedGroup==="all"?this.items:this.items.filter(function(u){return JSON.parse(u.getAttribute("data-hs-combo-box-output-item")).group.name===r.selectedGroup}):this.items;this.groupingType==="tabs"&&this.selectedGroup!=="all"&&l.forEach(function(u){u.style.display="block"}),l.forEach(function(u){r.isTextExistsAny(u,r.value)?u.style.display="block":u.style.display="none"}),this.groupingType==="default"&&this.output.querySelectorAll("[data-hs-combo-box-group-title]").forEach(function(u){var I=u.getAttribute("data-hs-combo-box-group-title");r.items.filter(function(m){return JSON.parse(m.getAttribute("data-hs-combo-box-output-item")).group.name===I&&m.style.display==="block"}).length?u.style.display="block":u.style.display="none"})},s.prototype.hasVisibleItems=function(){return!!this.items.length&&this.items.some(function(r){return r.style.display==="block"})},s.prototype.appendItemsToWrapper=function(r){this.itemsWrapper?this.itemsWrapper.append(r):this.output.append(r)},s.prototype.buildOutputPlaceholder=function(){this.outputPlaceholder||(this.outputPlaceholder=(0,o.htmlToElement)(this.outputEmptyTemplate)),this.appendItemsToWrapper(this.outputPlaceholder)},s.prototype.destroyOutputPlaceholder=function(){this.outputPlaceholder&&this.outputPlaceholder.remove(),this.outputPlaceholder=null},s.prototype.resultItems=function(){if(!this.items.length)return!1;this.setItemsVisibility(),this.setSelectedByValue([this.selected])},s.prototype.setValueAndOpen=function(r){this.value=r,this.items.length&&this.setItemsVisibility()},s.prototype.open=function(r){var l=this;return!this.animationInProcess&&(r!==void 0&&this.setValueAndOpen(r),!this.preventVisibility&&(this.animationInProcess=!0,this.output.style.display="block",this.preventAutoPosition||this.recalculateDirection(),setTimeout(function(){l.el.classList.add("active"),l.animationInProcess=!1}),void(this.isOpened=!0)))},s.prototype.setValueAndClear=function(r){r?this.setValue(r):this.setValue(this.selected),this.outputPlaceholder&&this.destroyOutputPlaceholder()},s.prototype.close=function(r){var l=this;return!this.animationInProcess&&(this.preventVisibility?(this.setValueAndClear(r),!1):(this.animationInProcess=!0,this.el.classList.remove("active"),this.preventAutoPosition||(this.output.classList.remove("bottom-full","top-full"),this.output.style.marginTop="",this.output.style.marginBottom=""),(0,o.afterTransition)(this.output,function(){l.output.style.display="none",l.setValueAndClear(r),l.animationInProcess=!1}),void(this.isOpened=!1)))},s.prototype.recalculateDirection=function(){(0,o.isEnoughSpace)(this.output,this.input,"bottom",this.gap,this.viewport)?(this.output.classList.remove("bottom-full"),this.output.style.marginBottom="",this.output.classList.add("top-full"),this.output.style.marginTop="".concat(this.gap,"px")):(this.output.classList.remove("top-full"),this.output.style.marginTop="",this.output.classList.add("bottom-full"),this.output.style.marginBottom="".concat(this.gap,"px"))},s.getInstance=function(r,l){var u=window.$hsComboBoxCollection.find(function(I){return I.element.el===(typeof r=="string"?document.querySelector(r):r)});return u?l?u:u.element:null},s.autoInit=function(){window.$hsComboBoxCollection||(window.$hsComboBoxCollection=[]),document.querySelectorAll("[data-hs-combo-box]:not(.--prevent-on-load-init)").forEach(function(r){if(!window.$hsComboBoxCollection.find(function(I){var m;return((m=I==null?void 0:I.element)===null||m===void 0?void 0:m.el)===r})){var l=r.getAttribute("data-hs-combo-box"),u=l?JSON.parse(l):{};new s(r,u)}}),window.$hsComboBoxCollection&&(window.addEventListener("click",function(r){var l=r.target;s.closeCurrentlyOpened(l)}),document.addEventListener("keydown",function(r){return s.accessibility(r)}))},s.close=function(r){var l=window.$hsComboBoxCollection.find(function(u){return u.element.el===(typeof r=="string"?document.querySelector(r):r)});l&&l.element.isOpened&&l.element.close()},s.closeCurrentlyOpened=function(r){if(r===void 0&&(r=null),!r.closest("[data-hs-combo-box].active")){var l=window.$hsComboBoxCollection.filter(function(u){return u.element.isOpened})||null;l&&l.forEach(function(u){u.element.close()})}},s.getPreparedItems=function(r,l){return r===void 0&&(r=!1),l?(r?Array.from(l.querySelectorAll(":scope > *:not(.--exclude-accessibility)")).filter(function(u){return u.style.display!=="none"}).reverse():Array.from(l.querySelectorAll(":scope > *:not(.--exclude-accessibility)")).filter(function(u){return u.style.display!=="none"})).filter(function(u){return!u.classList.contains("disabled")}):null},s.setHighlighted=function(r,l,u){l.focus(),u.value=l.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),r&&r.classList.remove("hs-combo-box-output-item-highlighted"),l.classList.add("hs-combo-box-output-item-highlighted")},s.accessibility=function(r){if(window.$hsComboBoxCollection.find(function(l){return l.element.isOpened})&&e.COMBO_BOX_ACCESSIBILITY_KEY_SET.includes(r.code)&&!r.metaKey)switch(r.code){case"Escape":r.preventDefault(),this.onEscape();break;case"ArrowUp":r.preventDefault(),this.onArrow();break;case"ArrowDown":r.preventDefault(),this.onArrow(!1);break;case"Home":r.preventDefault(),this.onStartEnd();break;case"End":r.preventDefault(),this.onStartEnd(!1);break;case"Enter":r.preventDefault(),this.onEnter(r)}},s.onEscape=function(){var r=window.$hsComboBoxCollection.find(function(l){return!l.element.preventVisibility&&l.element.isOpened});r&&(r.element.close(),r.element.input.blur())},s.onArrow=function(r){var l;r===void 0&&(r=!0);var u=window.$hsComboBoxCollection.find(function(q){return q.element.preventVisibility?q.element.isCurrent:q.element.isOpened});if(u){var I=(l=u.element.itemsWrapper)!==null&&l!==void 0?l:u.element.output;if(!I)return!1;var m,O=s.getPreparedItems(r,I),B=I.querySelector(".hs-combo-box-output-item-highlighted");B||O[0].classList.add("hs-combo-box-output-item-highlighted");var G=O.findIndex(function(q){return q===B});G+1<O.length&&G++,m=O[G],s.setHighlighted(B,m,u.element.input)}},s.onStartEnd=function(r){var l;r===void 0&&(r=!0);var u=window.$hsComboBoxCollection.find(function(B){return B.element.preventVisibility?B.element.isCurrent:B.element.isOpened});if(u){var I=(l=u.element.itemsWrapper)!==null&&l!==void 0?l:u.element.output;if(!I)return!1;var m=s.getPreparedItems(r,I),O=I.querySelector(".hs-combo-box-output-item-highlighted");m.length&&s.setHighlighted(O,m[0],u.element.input)}},s.onEnter=function(r){var l=r.target,u=window.$hsComboBoxCollection.find(function(m){return!(0,o.isParentOrElementHidden)(m.element.el)&&r.target.closest("[data-hs-combo-box]")===m.element.el}),I=u.element.el.querySelector(".hs-combo-box-output-item-highlighted a");l.hasAttribute("data-hs-combo-box-input")?(u.element.close(),l.blur()):(u.element.preventSelection||u.element.setSelectedByValue(u.element.valuesBySelector(r.target)),u.element.preventSelection&&I&&window.location.assign(I.getAttribute("href")),u.element.close(u.element.preventSelection?null:r.target.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text")))},s}(t.default);window.addEventListener("load",function(){n.autoInit()}),document.addEventListener("scroll",function(){if(!window.$hsComboBoxCollection)return!1;var i=window.$hsComboBoxCollection.find(function(s){return s.element.isOpened});i&&!i.element.preventAutoPosition&&i.element.recalculateDirection()}),typeof window<"u"&&(window.HSComboBox=n),b.default=n},413:function(Y,b,y){/*
 * HSCopyMarkup
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(a,o){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},g(a,o)},function(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=a}g(a,o),a.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}),v=this&&this.__assign||function(){return v=Object.assign||function(a){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a},v.apply(this,arguments)},k=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=function(a){function o(t,e){var n=a.call(this,t,e)||this,i=t.getAttribute("data-hs-copy-markup"),s=i?JSON.parse(i):{},r=v(v({},s),e);return n.targetSelector=(r==null?void 0:r.targetSelector)||null,n.wrapperSelector=(r==null?void 0:r.wrapperSelector)||null,n.limit=(r==null?void 0:r.limit)||null,n.items=[],n.targetSelector&&n.init(),n}return x(o,a),o.prototype.init=function(){var t=this;this.createCollection(window.$hsCopyMarkupCollection,this),this.setTarget(),this.setWrapper(),this.addPredefinedItems(),this.el.addEventListener("click",function(){return t.copy()})},o.prototype.copy=function(){if(this.limit&&this.items.length>=this.limit)return!1;this.el.hasAttribute("disabled")&&this.el.setAttribute("disabled","");var t=this.target.cloneNode(!0);this.addToItems(t),this.limit&&this.items.length>=this.limit&&this.el.setAttribute("disabled","disabled"),this.fireEvent("copy",t),(0,h.dispatch)("copy.hs.copyMarkup",t,t)},o.prototype.addPredefinedItems=function(){var t=this;Array.from(this.wrapper.children).filter(function(e){return!e.classList.contains("[--ignore-for-count]")}).forEach(function(e){t.addToItems(e)})},o.prototype.setTarget=function(){var t=typeof this.targetSelector=="string"?document.querySelector(this.targetSelector).cloneNode(!0):this.targetSelector.cloneNode(!0);t.removeAttribute("id"),this.target=t},o.prototype.setWrapper=function(){this.wrapper=typeof this.wrapperSelector=="string"?document.querySelector(this.wrapperSelector):this.wrapperSelector},o.prototype.addToItems=function(t){var e=this,n=t.querySelector("[data-hs-copy-markup-delete-item]");this.wrapper?this.wrapper.append(t):this.el.before(t),n&&n.addEventListener("click",function(){return e.delete(t)}),this.items.push(t)},o.prototype.delete=function(t){var e=this.items.indexOf(t);e!==-1&&this.items.splice(e,1),t.remove(),this.fireEvent("delete",t),(0,h.dispatch)("delete.hs.copyMarkup",t,t)},o.getInstance=function(t,e){var n=window.$hsCopyMarkupCollection.find(function(i){return i.element.el===(typeof t=="string"?document.querySelector(t):t)});return n?e?n:n.element:null},o.autoInit=function(){window.$hsCopyMarkupCollection||(window.$hsCopyMarkupCollection=[]),document.querySelectorAll("[data-hs-copy-markup]:not(.--prevent-on-load-init)").forEach(function(t){if(!window.$hsCopyMarkupCollection.find(function(i){var s;return((s=i==null?void 0:i.element)===null||s===void 0?void 0:s.el)===t})){var e=t.getAttribute("data-hs-copy-markup"),n=e?JSON.parse(e):{};new o(t,n)}})},o}(k(y(737)).default);window.addEventListener("load",function(){c.autoInit()}),typeof window<"u"&&(window.HSCopyMarkup=c),b.default=c},610:function(Y,b,y){/*
 * HSDropdown
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(e,n){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,s){i.__proto__=s}||function(i,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(i[r]=s[r])},g(e,n)},function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}g(e,n),e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}),v=this&&this.__spreadArray||function(e,n,i){if(i||arguments.length===2)for(var s,r=0,l=n.length;r<l;r++)!s&&r in n||(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return e.concat(s||Array.prototype.slice.call(n))},k=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=y(492),a=k(y(737)),o=y(190),t=function(e){function n(i,s,r){var l=e.call(this,i,s,r)||this;return l.toggle=l.el.querySelector(":scope > .hs-dropdown-toggle")||l.el.querySelector(":scope > .hs-dropdown-toggle-wrapper > .hs-dropdown-toggle")||l.el.children[0],l.closers=Array.from(l.el.querySelectorAll(":scope .hs-dropdown-close"))||null,l.menu=l.el.querySelector(":scope > .hs-dropdown-menu"),l.eventMode=(0,h.getClassProperty)(l.el,"--trigger","click"),l.closeMode=(0,h.getClassProperty)(l.el,"--auto-close","true"),l.animationInProcess=!1,l.toggle&&l.menu&&l.init(),l}return x(n,e),n.prototype.init=function(){var i=this;if(this.createCollection(window.$hsDropdownCollection,this),this.toggle.disabled)return!1;this.toggle.addEventListener("click",function(s){return i.onClickHandler(s)}),this.closers&&this.buildClosers(),(0,h.isIOS)()||(0,h.isIpadOS)()||(this.el.addEventListener("mouseenter",function(){return i.onMouseEnterHandler()}),this.el.addEventListener("mouseleave",function(){return i.onMouseLeaveHandler()}))},n.prototype.resizeHandler=function(){this.eventMode=(0,h.getClassProperty)(this.el,"--trigger","click")},n.prototype.buildClosers=function(){var i=this;this.closers.forEach(function(s){s.addEventListener("click",function(){return i.close()})})},n.prototype.onClickHandler=function(i){this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?this.close():this.open()},n.prototype.onMouseEnterHandler=function(){if(this.eventMode!=="hover")return!1;this.el._popper&&this.forceClearState(),!this.el.classList.contains("open")&&this.menu.classList.contains("hidden")&&this.open()},n.prototype.onMouseLeaveHandler=function(){if(this.eventMode!=="hover")return!1;this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")&&this.close()},n.prototype.destroyPopper=function(){this.menu.classList.remove("block"),this.menu.classList.add("hidden"),this.menu.style.inset=null,this.menu.style.position=null,this.el&&this.el._popper&&this.el._popper.destroy(),this.animationInProcess=!1},n.prototype.absoluteStrategyModifiers=function(){var i=this;return[{name:"applyStyles",fn:function(s){var r=(window.getComputedStyle(i.el).getPropertyValue("--strategy")||"absolute").replace(" ",""),l=(window.getComputedStyle(i.el).getPropertyValue("--adaptive")||"adaptive").replace(" ","");s.state.elements.popper.style.position=r,s.state.elements.popper.style.transform=l==="adaptive"?s.state.styles.popper.transform:null,s.state.elements.popper.style.top=null,s.state.elements.popper.style.bottom=null,s.state.elements.popper.style.left=null,s.state.elements.popper.style.right=null,s.state.elements.popper.style.margin=0}},{name:"computeStyles",options:{adaptive:!1}}]},n.prototype.open=function(){var i=this;if(this.el.classList.contains("open")||this.animationInProcess)return!1;this.animationInProcess=!0;var s=(window.getComputedStyle(this.el).getPropertyValue("--placement")||"").replace(" ",""),r=(window.getComputedStyle(this.el).getPropertyValue("--flip")||"true").replace(" ",""),l=(window.getComputedStyle(this.el).getPropertyValue("--strategy")||"fixed").replace(" ",""),u=parseInt((window.getComputedStyle(this.el).getPropertyValue("--offset")||"10").replace(" ",""));l!=="static"&&(this.el._popper=(0,c.createPopper)(this.el,this.menu,{placement:o.POSITIONS[s]||"bottom-start",strategy:l,modifiers:v(v([],l!=="fixed"?this.absoluteStrategyModifiers():[],!0),[{name:"flip",enabled:r==="true"},{name:"offset",options:{offset:[0,u]}}],!1)})),this.menu.style.margin=null,this.menu.classList.remove("hidden"),this.menu.classList.add("block"),setTimeout(function(){i.el.classList.add("open"),i.animationInProcess=!1}),this.fireEvent("open",this.el),(0,h.dispatch)("open.hs.dropdown",this.el,this.el)},n.prototype.close=function(i){var s=this;if(i===void 0&&(i=!0),this.animationInProcess||!this.el.classList.contains("open"))return!1;if(this.animationInProcess=!0,i){var r=this.el.querySelector("[data-hs-dropdown-transition]")||this.menu;(0,h.afterTransition)(r,function(){return s.destroyPopper()})}else this.destroyPopper();this.menu.style.margin=null,this.el.classList.remove("open"),this.fireEvent("close",this.el),(0,h.dispatch)("close.hs.dropdown",this.el,this.el)},n.prototype.forceClearState=function(){this.destroyPopper(),this.menu.style.margin=null,this.el.classList.remove("open")},n.getInstance=function(i,s){var r=window.$hsDropdownCollection.find(function(l){return l.element.el===(typeof i=="string"?document.querySelector(i):i)});return r?s?r:r.element.el:null},n.autoInit=function(){if(window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),document.querySelectorAll(".hs-dropdown:not(.--prevent-on-load-init)").forEach(function(s){window.$hsDropdownCollection.find(function(r){var l;return((l=r==null?void 0:r.element)===null||l===void 0?void 0:l.el)===s})||new n(s)}),window.$hsDropdownCollection){document.addEventListener("keydown",function(s){return n.accessibility(s)}),window.addEventListener("click",function(s){var r=s.target;n.closeCurrentlyOpened(r)});var i=window.innerWidth;window.addEventListener("resize",function(){window.innerWidth!==i&&(i=innerWidth,n.closeCurrentlyOpened(null,!1))})}},n.open=function(i){var s=window.$hsDropdownCollection.find(function(r){return r.element.el===(typeof i=="string"?document.querySelector(i):i)});s&&s.element.menu.classList.contains("hidden")&&s.element.open()},n.close=function(i){var s=window.$hsDropdownCollection.find(function(r){return r.element.el===(typeof i=="string"?document.querySelector(i):i)});s&&!s.element.menu.classList.contains("hidden")&&s.element.close()},n.accessibility=function(i){this.history=h.menuSearchHistory;var s=window.$hsDropdownCollection.find(function(r){return r.element.el.classList.contains("open")});if(s&&(o.DROPDOWN_ACCESSIBILITY_KEY_SET.includes(i.code)||i.code.length===4&&i.code[i.code.length-1].match(/^[A-Z]*$/))&&!i.metaKey&&!s.element.menu.querySelector("input:focus")&&!s.element.menu.querySelector("textarea:focus"))switch(i.code){case"Escape":s.element.menu.querySelector(".hs-select.active")||(i.preventDefault(),this.onEscape(i));break;case"Enter":s.element.menu.querySelector(".hs-select button:focus")||s.element.menu.querySelector(".hs-collapse-toggle:focus")||this.onEnter(i);break;case"ArrowUp":i.preventDefault(),this.onArrow();break;case"ArrowDown":i.preventDefault(),this.onArrow(!1);break;case"Home":i.preventDefault(),this.onStartEnd();break;case"End":i.preventDefault(),this.onStartEnd(!1);break;default:i.preventDefault(),this.onFirstLetter(i.key)}},n.onEscape=function(i){var s=i.target.closest(".hs-dropdown.open");if(window.$hsDropdownCollection.find(function(l){return l.element.el===s})){var r=window.$hsDropdownCollection.find(function(l){return l.element.el===s});r&&(r.element.close(),r.element.toggle.focus())}else this.closeCurrentlyOpened()},n.onEnter=function(i){var s=i.target.parentElement;if(window.$hsDropdownCollection.find(function(l){return l.element.el===s})){i.preventDefault();var r=window.$hsDropdownCollection.find(function(l){return l.element.el===s});r&&r.element.open()}},n.onArrow=function(i){i===void 0&&(i=!0);var s=window.$hsDropdownCollection.find(function(m){return m.element.el.classList.contains("open")});if(s){var r=s.element.menu;if(!r)return!1;var l=(i?Array.from(r.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])")).reverse():Array.from(r.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])"))).filter(function(m){return!m.classList.contains("disabled")}),u=r.querySelector("a:focus, button:focus"),I=l.findIndex(function(m){return m===u});I+1<l.length&&I++,l[I].focus()}},n.onStartEnd=function(i){i===void 0&&(i=!0);var s=window.$hsDropdownCollection.find(function(u){return u.element.el.classList.contains("open")});if(s){var r=s.element.menu;if(!r)return!1;var l=(i?Array.from(r.querySelectorAll("a")):Array.from(r.querySelectorAll("a")).reverse()).filter(function(u){return!u.classList.contains("disabled")});l.length&&l[0].focus()}},n.onFirstLetter=function(i){var s=this,r=window.$hsDropdownCollection.find(function(O){return O.element.el.classList.contains("open")});if(r){var l=r.element.menu;if(!l)return!1;var u=Array.from(l.querySelectorAll("a")),I=function(){return u.findIndex(function(O,B){return O.innerText.toLowerCase().charAt(0)===i.toLowerCase()&&s.history.existsInHistory(B)})},m=I();m===-1&&(this.history.clearHistory(),m=I()),m!==-1&&(u[m].focus(),this.history.addHistory(m))}},n.closeCurrentlyOpened=function(i,s){i===void 0&&(i=null),s===void 0&&(s=!0);var r=i&&i.closest(".hs-dropdown")&&i.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")?i.closest(".hs-dropdown").parentElement.closest(".hs-dropdown"):null,l=r?window.$hsDropdownCollection.filter(function(u){return u.element.el.classList.contains("open")&&u.element.menu.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")===r}):window.$hsDropdownCollection.filter(function(u){return u.element.el.classList.contains("open")});i&&i.closest(".hs-dropdown")&&(0,h.getClassPropertyAlt)(i.closest(".hs-dropdown"),"--auto-close")==="inside"&&(l=l.filter(function(u){return u.element.el!==i.closest(".hs-dropdown")})),l&&l.forEach(function(u){if(u.element.closeMode==="false"||u.element.closeMode==="outside")return!1;u.element.close(s)})},n.on=function(i,s,r){var l=window.$hsDropdownCollection.find(function(u){return u.element.el===(typeof s=="string"?document.querySelector(s):s)});l&&(l.element.events[i]=r)},n}(a.default);window.addEventListener("load",function(){t.autoInit()}),window.addEventListener("resize",function(){window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),window.$hsDropdownCollection.forEach(function(e){return e.element.resizeHandler()})}),typeof window<"u"&&(window.HSDropdown=t),b.default=t},371:function(Y,b,y){/*
 * HSInputNumber
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(a,o){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},g(a,o)},function(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=a}g(a,o),a.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}),v=this&&this.__assign||function(){return v=Object.assign||function(a){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a},v.apply(this,arguments)},k=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=function(a){function o(t,e){var n=a.call(this,t,e)||this;n.input=n.el.querySelector("[data-hs-input-number-input]")||null,n.increment=n.el.querySelector("[data-hs-input-number-increment]")||null,n.decrement=n.el.querySelector("[data-hs-input-number-decrement]")||null,n.input&&(n.inputValue=isNaN(parseInt(n.input.value))?0:parseInt(n.input.value));var i=n.el.dataset.hsInputNumber,s=i?JSON.parse(i):{step:1},r=v(v({},s),e);return n.minInputValue="min"in r?r.min:0,n.maxInputValue="max"in r?r.max:null,n.step="step"in r&&r.step>0?r.step:1,n.init(),n}return x(o,a),o.prototype.init=function(){this.createCollection(window.$hsInputNumberCollection,this),this.input&&this.increment&&this.build()},o.prototype.build=function(){this.input&&this.buildInput(),this.increment&&this.buildIncrement(),this.decrement&&this.buildDecrement(),this.inputValue<=0&&this.minInputValue===0&&(this.inputValue=0,this.input.value="0"),(this.inputValue<=0||this.minInputValue<0)&&this.changeValue(),this.input.hasAttribute("disabled")&&this.disableButtons()},o.prototype.buildInput=function(){var t=this;this.input.addEventListener("input",function(){return t.changeValue()})},o.prototype.buildIncrement=function(){var t=this;this.increment.addEventListener("click",function(){t.changeValue("increment")})},o.prototype.buildDecrement=function(){var t=this;this.decrement.addEventListener("click",function(){t.changeValue("decrement")})},o.prototype.changeValue=function(t){var e,n;t===void 0&&(t="none");var i={inputValue:this.inputValue},s=(e=this.minInputValue)!==null&&e!==void 0?e:Number.MIN_SAFE_INTEGER,r=(n=this.maxInputValue)!==null&&n!==void 0?n:Number.MAX_SAFE_INTEGER;switch(this.inputValue=isNaN(this.inputValue)?0:this.inputValue,t){case"increment":var l=this.inputValue+this.step;this.inputValue=l>=s&&l<=r?l:r,this.input.value=this.inputValue.toString();break;case"decrement":var u=this.inputValue-this.step;this.inputValue=u>=s&&u<=r?u:s,this.input.value=this.inputValue.toString();break;default:var I=isNaN(parseInt(this.input.value))?0:parseInt(this.input.value);this.inputValue=I>=r?r:I<=s?s:I,this.inputValue<=s&&(this.input.value=this.inputValue.toString())}i.inputValue=this.inputValue,this.inputValue===s?(this.el.classList.add("disabled"),this.decrement&&this.disableButtons("decrement")):(this.el.classList.remove("disabled"),this.decrement&&this.enableButtons("decrement")),this.inputValue===r?(this.el.classList.add("disabled"),this.increment&&this.disableButtons("increment")):(this.el.classList.remove("disabled"),this.increment&&this.enableButtons("increment")),this.fireEvent("change",i),(0,h.dispatch)("change.hs.inputNumber",this.el,i)},o.prototype.disableButtons=function(t){t===void 0&&(t="all"),t==="all"?(this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.setAttribute("disabled","disabled"),this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.setAttribute("disabled","disabled")):t==="increment"?this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.setAttribute("disabled","disabled"):t==="decrement"&&(this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.setAttribute("disabled","disabled"))},o.prototype.enableButtons=function(t){t===void 0&&(t="all"),t==="all"?(this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.removeAttribute("disabled"),this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.removeAttribute("disabled")):t==="increment"?this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.removeAttribute("disabled"):t==="decrement"&&(this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.removeAttribute("disabled"))},o.getInstance=function(t,e){var n=window.$hsInputNumberCollection.find(function(i){return i.element.el===(typeof t=="string"?document.querySelector(t):t)});return n?e?n:n.element:null},o.autoInit=function(){window.$hsInputNumberCollection||(window.$hsInputNumberCollection=[]),document.querySelectorAll("[data-hs-input-number]:not(.--prevent-on-load-init)").forEach(function(t){window.$hsInputNumberCollection.find(function(e){var n;return((n=e==null?void 0:e.element)===null||n===void 0?void 0:n.el)===t})||new o(t)})},o}(k(y(737)).default);window.addEventListener("load",function(){c.autoInit()}),typeof window<"u"&&(window.HSInputNumber=c),b.default=c},770:function(Y,b,y){/*
 * HSOverlay
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(o,t){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},g(o,t)},function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=o}g(o,t),o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}),v=this&&this.__assign||function(){return v=Object.assign||function(o){for(var t,e=1,n=arguments.length;e<n;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);return o},v.apply(this,arguments)},k=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=y(190),a=function(o){function t(e,n,i){var s,r,l,u=o.call(this,e,n,i)||this,I=e.getAttribute("data-hs-overlay-options"),m=I?JSON.parse(I):{},O=v(v({},m),n);if(u.hiddenClass=(O==null?void 0:O.hiddenClass)||"hidden",u.isClosePrev=(s=O==null?void 0:O.isClosePrev)===null||s===void 0||s,u.backdropClasses=(r=O==null?void 0:O.backdropClasses)!==null&&r!==void 0?r:"hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900",u.backdropExtraClasses=(l=O==null?void 0:O.backdropExtraClasses)!==null&&l!==void 0?l:"",u.openNextOverlay=!1,u.autoHide=null,u.overlayId=u.el.getAttribute("data-hs-overlay"),u.overlay=document.querySelector(u.overlayId),u.overlay){u.isCloseWhenClickInside=(0,h.stringToBoolean)((0,h.getClassProperty)(u.overlay,"--close-when-click-inside","false")||"false"),u.isTabAccessibilityLimited=(0,h.stringToBoolean)((0,h.getClassProperty)(u.overlay,"--tab-accessibility-limited","true")||"true"),u.isLayoutAffect=(0,h.stringToBoolean)((0,h.getClassProperty)(u.overlay,"--is-layout-affect","false")||"false"),u.hasAutofocus=(0,h.stringToBoolean)((0,h.getClassProperty)(u.overlay,"--has-autofocus","true")||"true"),u.hasAbilityToCloseOnBackdropClick=(0,h.stringToBoolean)(u.overlay.getAttribute("data-hs-overlay-keyboard")||"true");var B=(0,h.getClassProperty)(u.overlay,"--auto-close");u.autoClose=!isNaN(+B)&&isFinite(+B)?+B:c.BREAKPOINTS[B]||null;var G=(0,h.getClassProperty)(u.overlay,"--opened");u.openedBreakpoint=(!isNaN(+G)&&isFinite(+G)?+G:c.BREAKPOINTS[G])||null}return u.overlay&&u.init(),u}return x(t,o),t.prototype.init=function(){var e=this;if(this.createCollection(window.$hsOverlayCollection,this),this.isLayoutAffect&&this.openedBreakpoint){var n=t.getInstance(this.el,!0);t.setOpened(this.openedBreakpoint,n)}this.el.addEventListener("click",function(){e.overlay.classList.contains("opened")?e.close():e.open()}),this.overlay.addEventListener("click",function(i){i.target.id&&"#".concat(i.target.id)===e.overlayId&&e.isCloseWhenClickInside&&e.hasAbilityToCloseOnBackdropClick&&e.close()})},t.prototype.hideAuto=function(){var e=this,n=parseInt((0,h.getClassProperty)(this.overlay,"--auto-hide","0"));n&&(this.autoHide=setTimeout(function(){e.close()},n))},t.prototype.checkTimer=function(){this.autoHide&&(clearTimeout(this.autoHide),this.autoHide=null)},t.prototype.buildBackdrop=function(){var e=this,n=this.overlay.classList.value.split(" "),i=parseInt(window.getComputedStyle(this.overlay).getPropertyValue("z-index")),s=this.overlay.getAttribute("data-hs-overlay-backdrop-container")||!1,r=document.createElement("div"),l="".concat(this.backdropClasses," ").concat(this.backdropExtraClasses),u=(0,h.getClassProperty)(this.overlay,"--overlay-backdrop","true")!=="static",I=(0,h.getClassProperty)(this.overlay,"--overlay-backdrop","true")==="false";r.id="".concat(this.overlay.id,"-backdrop"),"style"in r&&(r.style.zIndex="".concat(i-1));for(var m=0,O=n;m<O.length;m++){var B=O[m];(B.startsWith("hs-overlay-backdrop-open:")||B.includes(":hs-overlay-backdrop-open:"))&&(l+=" ".concat(B))}I||(s&&((r=document.querySelector(s).cloneNode(!0)).classList.remove("hidden"),l="".concat(r.classList.toString()),r.classList.value=""),u&&r.addEventListener("click",function(){return e.close()},!0),r.setAttribute("data-hs-overlay-backdrop-template",""),document.body.appendChild(r),setTimeout(function(){r.classList.value=l}))},t.prototype.destroyBackdrop=function(){var e=document.querySelector("#".concat(this.overlay.id,"-backdrop"));e&&(this.openNextOverlay&&(e.style.transitionDuration="".concat(1.8*parseFloat(window.getComputedStyle(e).transitionDuration.replace(/[^\d.-]/g,"")),"s")),e.classList.add("opacity-0"),(0,h.afterTransition)(e,function(){e.remove()}))},t.prototype.focusElement=function(){var e=this.overlay.querySelector("[autofocus]");if(!e)return!1;e.focus()},t.prototype.open=function(){var e=this;if(!this.overlay)return!1;var n=document.querySelectorAll(".hs-overlay.open"),i=window.$hsOverlayCollection.find(function(r){return Array.from(n).includes(r.element.overlay)&&!r.element.isLayoutAffect}),s=(0,h.getClassProperty)(this.overlay,"--body-scroll","false")!=="true";if(this.isClosePrev&&i)return this.openNextOverlay=!0,i.element.close().then(function(){e.open(),e.openNextOverlay=!1});s&&(document.body.style.overflow="hidden"),this.buildBackdrop(),this.checkTimer(),this.hideAuto(),this.overlay.classList.remove(this.hiddenClass),this.overlay.setAttribute("aria-overlay","true"),this.overlay.setAttribute("tabindex","-1"),setTimeout(function(){if(e.overlay.classList.contains("opened"))return!1;e.overlay.classList.add("open","opened"),e.isLayoutAffect&&document.body.classList.add("hs-overlay-body-open"),e.fireEvent("open",e.el),(0,h.dispatch)("open.hs.overlay",e.el,e.el),e.hasAutofocus&&e.focusElement()},50)},t.prototype.close=function(e){var n=this;e===void 0&&(e=!1),this.isLayoutAffect&&document.body.classList.remove("hs-overlay-body-open");var i=function(s){if(n.overlay.classList.contains("open"))return!1;n.overlay.classList.add(n.hiddenClass),n.destroyBackdrop(),n.fireEvent("close",n.el),(0,h.dispatch)("close.hs.overlay",n.el,n.el),document.querySelector(".hs-overlay.opened")||(document.body.style.overflow=""),s(n.overlay)};return new Promise(function(s){if(!n.overlay)return!1;n.overlay.classList.remove("open","opened"),n.overlay.removeAttribute("aria-overlay"),n.overlay.removeAttribute("tabindex"),e?i(s):(0,h.afterTransition)(n.overlay,function(){i(s)})})},t.getInstance=function(e,n){var i=window.$hsOverlayCollection.find(function(s){return s.element.el===(typeof e=="string"?document.querySelector(e):e)||s.element.overlay===(typeof e=="string"?document.querySelector(e):e)});return i?n?i:i.element.el:null},t.autoInit=function(){window.$hsOverlayCollection||(window.$hsOverlayCollection=[]),document.querySelectorAll("[data-hs-overlay]:not(.--prevent-on-load-init)").forEach(function(e){window.$hsOverlayCollection.find(function(n){var i;return((i=n==null?void 0:n.element)===null||i===void 0?void 0:i.el)===e})||new t(e)}),window.$hsOverlayCollection&&document.addEventListener("keydown",function(e){return t.accessibility(e)})},t.open=function(e){var n=window.$hsOverlayCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)||i.element.overlay===(typeof e=="string"?document.querySelector(e):e)});n&&n.element.overlay.classList.contains(n.element.hiddenClass)&&n.element.open()},t.close=function(e){var n=window.$hsOverlayCollection.find(function(i){return i.element.el===(typeof e=="string"?document.querySelector(e):e)||i.element.overlay===(typeof e=="string"?document.querySelector(e):e)});n&&!n.element.overlay.classList.contains(n.element.hiddenClass)&&n.element.close()},t.setOpened=function(e,n){document.body.clientWidth>=e?(document.body.classList.add("hs-overlay-body-open"),n.element.overlay.classList.add("opened")):n.element.close(!0)},t.accessibility=function(e){var n,i,s=window.$hsOverlayCollection.filter(function(m){return m.element.overlay.classList.contains("open")}),r=s[s.length-1],l=(i=(n=r==null?void 0:r.element)===null||n===void 0?void 0:n.overlay)===null||i===void 0?void 0:i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),u=[];l!=null&&l.length&&l.forEach(function(m){(0,h.isParentOrElementHidden)(m)||u.push(m)});var I=r&&!e.metaKey;if(I&&!r.element.isTabAccessibilityLimited&&e.code==="Tab")return!1;I&&u.length&&e.code==="Tab"&&(e.preventDefault(),this.onTab(r,u)),I&&e.code==="Escape"&&(e.preventDefault(),this.onEscape(r))},t.onEscape=function(e){e&&e.element.hasAbilityToCloseOnBackdropClick&&e.element.close()},t.onTab=function(e,n){if(!n.length)return!1;var i=e.element.overlay.querySelector(":focus"),s=Array.from(n).indexOf(i);s>-1?n[(s+1)%n.length].focus():n[0].focus()},t.on=function(e,n,i){var s=window.$hsOverlayCollection.find(function(r){return r.element.el===(typeof n=="string"?document.querySelector(n):n)||r.element.overlay===(typeof n=="string"?document.querySelector(n):n)});s&&(s.element.events[e]=i)},t}(k(y(737)).default);window.addEventListener("load",function(){a.autoInit()}),window.addEventListener("resize",function(){(function(){if(!window.$hsOverlayCollection.length||!window.$hsOverlayCollection.find(function(o){return o.element.autoClose}))return!1;window.$hsOverlayCollection.filter(function(o){return o.element.autoClose}).forEach(function(o){document.body.clientWidth>=o.element.autoClose&&o.element.close(!0)})})(),function(){if(!window.$hsOverlayCollection.length||!window.$hsOverlayCollection.find(function(o){return o.element.openedBreakpoint}))return!1;window.$hsOverlayCollection.filter(function(o){return o.element.openedBreakpoint}).forEach(function(o){a.setOpened(o.element.openedBreakpoint,o)})}()}),typeof window<"u"&&(window.HSOverlay=a),b.default=a},659:function(Y,b,y){/*
 * HSPinInput
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(a,o){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},g(a,o)},function(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=a}g(a,o),a.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}),v=this&&this.__assign||function(){return v=Object.assign||function(a){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a},v.apply(this,arguments)},k=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=function(a){function o(t,e){var n=a.call(this,t,e)||this,i=t.getAttribute("data-hs-pin-input"),s=i?JSON.parse(i):{},r=v(v({},s),e);return n.items=n.el.querySelectorAll("[data-hs-pin-input-item]"),n.currentItem=null,n.currentValue=new Array(n.items.length).fill(""),n.placeholders=[],n.availableCharsRE=new RegExp((r==null?void 0:r.availableCharsRE)||"^[a-zA-Z0-9]+$"),n.init(),n}return x(o,a),o.prototype.init=function(){this.createCollection(window.$hsPinInputCollection,this),this.items.length&&this.build()},o.prototype.build=function(){this.buildInputItems()},o.prototype.buildInputItems=function(){var t=this;this.items.forEach(function(e,n){t.placeholders.push(e.getAttribute("placeholder")||""),e.hasAttribute("autofocus")&&t.onFocusIn(n),e.addEventListener("input",function(i){return t.onInput(i,n)}),e.addEventListener("paste",function(i){return t.onPaste(i)}),e.addEventListener("keydown",function(i){return t.onKeydown(i,n)}),e.addEventListener("focusin",function(){return t.onFocusIn(n)}),e.addEventListener("focusout",function(){return t.onFocusOut(n)})})},o.prototype.checkIfNumber=function(t){return t.match(this.availableCharsRE)},o.prototype.autoFillAll=function(t){var e=this;Array.from(t).forEach(function(n,i){if(!(e!=null&&e.items[i]))return!1;e.items[i].value=n,e.items[i].dispatchEvent(new Event("input",{bubbles:!0}))})},o.prototype.setCurrentValue=function(){this.currentValue=Array.from(this.items).map(function(t){return t.value})},o.prototype.toggleCompleted=function(){this.currentValue.includes("")?this.el.classList.remove("active"):this.el.classList.add("active")},o.prototype.onInput=function(t,e){var n=t.target.value;if(this.currentItem=t.target,this.currentItem.value="",this.currentItem.value=n[n.length-1],!this.checkIfNumber(this.currentItem.value))return this.currentItem.value=this.currentValue[e]||"",!1;if(this.setCurrentValue(),this.currentItem.value){if(e<this.items.length-1&&this.items[e+1].focus(),!this.currentValue.includes("")){var i={currentValue:this.currentValue};this.fireEvent("completed",i),(0,h.dispatch)("completed.hs.pinInput",this.el,i)}this.toggleCompleted()}else e>0&&this.items[e-1].focus()},o.prototype.onKeydown=function(t,e){t.key==="Backspace"&&e>0&&(this.items[e].value===""?(this.items[e-1].value="",this.items[e-1].focus()):this.items[e].value=""),this.setCurrentValue(),this.toggleCompleted()},o.prototype.onFocusIn=function(t){this.items[t].setAttribute("placeholder","")},o.prototype.onFocusOut=function(t){this.items[t].setAttribute("placeholder",this.placeholders[t])},o.prototype.onPaste=function(t){var e=this;t.preventDefault(),this.items.forEach(function(n){document.activeElement===n&&e.autoFillAll(t.clipboardData.getData("text"))})},o.getInstance=function(t,e){var n=window.$hsPinInputCollection.find(function(i){return i.element.el===(typeof t=="string"?document.querySelector(t):t)});return n?e?n:n.element:null},o.autoInit=function(){window.$hsPinInputCollection||(window.$hsPinInputCollection=[]),document.querySelectorAll("[data-hs-pin-input]:not(.--prevent-on-load-init)").forEach(function(t){window.$hsPinInputCollection.find(function(e){var n;return((n=e==null?void 0:e.element)===null||n===void 0?void 0:n.el)===t})||new o(t)})},o}(k(y(737)).default);window.addEventListener("load",function(){c.autoInit()}),typeof window<"u"&&(window.HSPinInput=c),b.default=c},139:function(Y,b,y){/*
 * HSRemoveElement
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(a,o){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},g(a,o)},function(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=a}g(a,o),a.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}),v=this&&this.__assign||function(){return v=Object.assign||function(a){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a},v.apply(this,arguments)},k=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=function(a){function o(t,e){var n=a.call(this,t,e)||this,i=t.getAttribute("data-hs-remove-element-options"),s=i?JSON.parse(i):{},r=v(v({},s),e);return n.removeTargetId=n.el.getAttribute("data-hs-remove-element"),n.removeTarget=document.querySelector(n.removeTargetId),n.removeTargetAnimationClass=(r==null?void 0:r.removeTargetAnimationClass)||"hs-removing",n.removeTarget&&n.init(),n}return x(o,a),o.prototype.init=function(){var t=this;this.createCollection(window.$hsRemoveElementCollection,this),this.el.addEventListener("click",function(){return t.remove()})},o.prototype.remove=function(){var t=this;if(!this.removeTarget)return!1;this.removeTarget.classList.add(this.removeTargetAnimationClass),(0,h.afterTransition)(this.removeTarget,function(){t.removeTarget.remove()})},o.autoInit=function(){window.$hsRemoveElementCollection||(window.$hsRemoveElementCollection=[]),document.querySelectorAll("[data-hs-remove-element]:not(.--prevent-on-load-init)").forEach(function(t){window.$hsRemoveElementCollection.find(function(e){var n;return((n=e==null?void 0:e.element)===null||n===void 0?void 0:n.el)===t})||new o(t)})},o}(k(y(737)).default);window.addEventListener("load",function(){c.autoInit()}),typeof window<"u"&&(window.HSRemoveElement=c),b.default=c},591:function(Y,b,y){/*
 * HSScrollspy
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(c,a){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])},g(c,a)},function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function o(){this.constructor=c}g(c,a),c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}),v=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(b,"__esModule",{value:!0});var k=y(969),h=function(c){function a(o,t){t===void 0&&(t={});var e=c.call(this,o,t)||this;return e.activeSection=null,e.contentId=e.el.getAttribute("data-hs-scrollspy"),e.content=document.querySelector(e.contentId),e.links=e.el.querySelectorAll("[href]"),e.sections=[],e.scrollableId=e.el.getAttribute("data-hs-scrollspy-scrollable-parent"),e.scrollable=e.scrollableId?document.querySelector(e.scrollableId):document,e.init(),e}return x(a,c),a.prototype.init=function(){var o=this;this.createCollection(window.$hsScrollspyCollection,this),this.links.forEach(function(t){o.sections.push(o.scrollable.querySelector(t.getAttribute("href")))}),Array.from(this.sections).forEach(function(t){if(!t.getAttribute("id"))return!1;o.scrollable.addEventListener("scroll",function(e){return o.update(e,t)})}),this.links.forEach(function(t){t.addEventListener("click",function(e){if(e.preventDefault(),t.getAttribute("href")==="javascript:;")return!1;o.scrollTo(t)})})},a.prototype.update=function(o,t){var e=parseInt((0,k.getClassProperty)(this.el,"--scrollspy-offset","0")),n=parseInt((0,k.getClassProperty)(t,"--scrollspy-offset"))||e,i=o.target===document?0:parseInt(String(o.target.getBoundingClientRect().top)),s=parseInt(String(t.getBoundingClientRect().top))-n-i,r=t.offsetHeight;if(s<=0&&s+r>0){if(this.activeSection===t)return!1;this.links.forEach(function(m){m.classList.remove("active")});var l=this.el.querySelector('[href="#'.concat(t.getAttribute("id"),'"]'));if(l){l.classList.add("active");var u=l.closest("[data-hs-scrollspy-group]");if(u){var I=u.querySelector("[href]");I&&I.classList.add("active")}}this.activeSection=t}},a.prototype.scrollTo=function(o){var t=o.getAttribute("href"),e=document.querySelector(t),n=parseInt((0,k.getClassProperty)(this.el,"--scrollspy-offset","0")),i=parseInt((0,k.getClassProperty)(e,"--scrollspy-offset"))||n,s=this.scrollable===document?0:this.scrollable.offsetTop,r=e.offsetTop-i-s,l=this.scrollable===document?window:this.scrollable,u=function(){window.history.replaceState(null,null,o.getAttribute("href")),"scrollTo"in l&&l.scrollTo({top:r,left:0,behavior:"smooth"})},I=this.fireEvent("beforeScroll",this.el);(0,k.dispatch)("beforeScroll.hs.scrollspy",this.el,this.el),I instanceof Promise?I.then(function(){return u()}):u()},a.getInstance=function(o,t){t===void 0&&(t=!1);var e=window.$hsScrollspyCollection.find(function(n){return n.element.el===(typeof o=="string"?document.querySelector(o):o)});return e?t?e:e.element.el:null},a.autoInit=function(){window.$hsScrollspyCollection||(window.$hsScrollspyCollection=[]),document.querySelectorAll("[data-hs-scrollspy]:not(.--prevent-on-load-init)").forEach(function(o){window.$hsScrollspyCollection.find(function(t){var e;return((e=t==null?void 0:t.element)===null||e===void 0?void 0:e.el)===o})||new a(o)})},a}(v(y(737)).default);window.addEventListener("load",function(){h.autoInit()}),typeof window<"u"&&(window.HSScrollspy=h),b.default=h},961:function(Y,b,y){/*
 * HSTogglePassword
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(t,e){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},g(t,e)},function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}g(t,e),t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}),v=this&&this.__assign||function(){return v=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},v.apply(this,arguments)},k=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(s,r){function l(m){try{I(i.next(m))}catch(O){r(O)}}function u(m){try{I(i.throw(m))}catch(O){r(O)}}function I(m){var O;m.done?s(m.value):(O=m.value,O instanceof n?O:new n(function(B){B(O)})).then(l,u)}I((i=i.apply(t,e||[])).next())})},h=this&&this.__generator||function(t,e){var n,i,s,r,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(r[Symbol.iterator]=function(){return this}),r;function u(I){return function(m){return function(O){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,O[0]&&(l=0)),l;)try{if(n=1,i&&(s=2&O[0]?i.return:O[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,O[1])).done)return s;switch(i=0,s&&(O=[2&O[0],s.value]),O[0]){case 0:case 1:s=O;break;case 4:return l.label++,{value:O[1],done:!1};case 5:l.label++,i=O[1],O=[0];continue;case 7:O=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!((s=s.length>0&&s[s.length-1])||O[0]!==6&&O[0]!==2)){l=0;continue}if(O[0]===3&&(!s||O[1]>s[0]&&O[1]<s[3])){l.label=O[1];break}if(O[0]===6&&l.label<s[1]){l.label=s[1],s=O;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(O);break}s[2]&&l.ops.pop(),l.trys.pop();continue}O=e.call(t,l)}catch(B){O=[6,B],i=0}finally{n=s=0}if(5&O[0])throw O[1];return{value:O[0]?O[1]:void 0,done:!0}}([I,m])}}},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(b,"__esModule",{value:!0});var a=y(969),o=function(t){function e(n,i){var s=t.call(this,n,i)||this,r=n.getAttribute("data-hs-search-by-json"),l=r?JSON.parse(r):{},u=v(v({},l),i);return s.jsonUrl=u.jsonUrl,s.minChars=u.minChars||3,s.dropdownTemplate=u.dropdownTemplate||"<div></div>",s.dropdownClasses=u.dropdownClasses||"absolute top-full z-[1] w-full bg-white border border-gray-200 rounded-md hidden mt-2",s.dropdownItemTemplate=u.dropdownItemTemplate||"<div></div>",s.dropdownItemTemplatesByType=u.dropdownItemTemplatesByType||null,s.dropdownItemClasses=u.dropdownItemClasses||"py-2 px-4 w-full cursor-pointer text-sm hover:bg-gray-300 hover:text-black",s.highlightedTextTagName=u.highlightedTextTagName||"u",s.highlightedTextClasses=u.highlightedTextClasses||"bg-green-200",s.jsonUrl&&s.fetchData().then(function(){return s.init()}),s}return x(e,t),e.prototype.init=function(){var n=this;this.createCollection(window.$hsSearchByJsonCollection,this),this.buildDropdown(),this.el.addEventListener("input",(0,a.debounce)(function(i){n.val=i.target.value,n.val.length>n.minChars?n.searchData(n.val):n.result=[],n.result.length?n.dropdown.classList.remove("hidden"):n.dropdown.classList.add("hidden"),n.buildItems()}))},e.prototype.fetchData=function(){return k(this,void 0,void 0,function(){var n=this;return h(this,function(i){switch(i.label){case 0:return[4,fetch(this.jsonUrl).then(function(s){return s.json()}).then(function(s){return n.json=s})];case 1:return i.sent(),[2]}})})},e.prototype.searchData=function(n){this.result=this.json.filter(function(i){var s=n.toLowerCase(),r=i.title.toLowerCase(),l=i.description.toLowerCase();return r.includes(s)||l.includes(s)})},e.prototype.buildDropdown=function(){this.dropdown=(0,a.htmlToElement)(this.dropdownTemplate),this.dropdownClasses&&(0,a.classToClassList)(this.dropdownClasses,this.dropdown),this.el.after(this.dropdown)},e.prototype.buildItems=function(){var n=this;this.dropdown.innerHTML="",this.result.forEach(function(i){var s=(0,a.htmlToElement)('<a class="block" href="'.concat(i.url,'" target="_blank"></a>'));s.append(n.itemTemplate(i)),n.dropdown.append(s)})},e.prototype.itemTemplate=function(n){var i=new RegExp(this.val,"gi"),s=n.title.replace(i,"<".concat(this.highlightedTextTagName,' class="inline-block ').concat(this.highlightedTextClasses,'">').concat(this.val,"</").concat(this.highlightedTextTagName,">")),r=n.description.replace(i,"<".concat(this.highlightedTextTagName,' class="inline-block ').concat(this.highlightedTextClasses,'">').concat(this.val,"</").concat(this.highlightedTextTagName,">")),l=this.dropdownItemTemplatesByType?this.dropdownItemTemplatesByType.find(function(B){return B.type===n.type}):null,u=l?(0,a.htmlToElement)(l.markup):(0,a.htmlToElement)(this.dropdownItemTemplate);this.dropdownItemClasses&&(0,a.classToClassList)(this.dropdownItemClasses,u);var I=u.querySelector("[data-title]");I?I.append((0,a.htmlToElement)("<span>".concat(s,"</span>"))):u.append((0,a.htmlToElement)("<span>".concat(s,"</span>")));var m=u.querySelector("[data-description]");if(m)m.append((0,a.htmlToElement)("<span>".concat(r,"</span>")));else if(!l){var O=(0,a.htmlToElement)("<br>");u.append(O),u.append((0,a.htmlToElement)("<span>".concat(r,"</span>")))}return u},e.getInstance=function(n){var i=window.$hsSearchByJsonCollection.find(function(s){return s.element.el===(typeof n=="string"?document.querySelector(n):n)});return i?i.element:null},e.autoInit=function(){window.$hsSearchByJsonCollection||(window.$hsSearchByJsonCollection=[]),document.querySelectorAll("[data-hs-search-by-json]:not(.--prevent-on-load-init)").forEach(function(n){window.$hsSearchByJsonCollection.find(function(i){var s;return((s=i==null?void 0:i.element)===null||s===void 0?void 0:s.el)===n})||new e(n)})},e}(c(y(737)).default);window.addEventListener("load",function(){o.autoInit()}),typeof window<"u"&&(window.HSSearchByJson=o),b.default=o},233:function(Y,b,y){/*
 * HSSelect
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(e,n){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,s){i.__proto__=s}||function(i,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(i[r]=s[r])},g(e,n)},function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}g(e,n),e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}),v=this&&this.__assign||function(){return v=Object.assign||function(e){for(var n,i=1,s=arguments.length;i<s;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},v.apply(this,arguments)},k=this&&this.__spreadArray||function(e,n,i){if(i||arguments.length===2)for(var s,r=0,l=n.length;r<l;r++)!s&&r in n||(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return e.concat(s||Array.prototype.slice.call(n))},h=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(b,"__esModule",{value:!0});var c=y(969),a=h(y(737)),o=y(190),t=function(e){function n(i,s){var r,l=e.call(this,i,s)||this,u=i.getAttribute("data-hs-select"),I=u?JSON.parse(u):{},m=v(v({},I),s);return l.value=(m==null?void 0:m.value)||l.el.value||null,l.placeholder=(m==null?void 0:m.placeholder)||"Select...",l.hasSearch=(m==null?void 0:m.hasSearch)||!1,l.preventSearchFocus=(m==null?void 0:m.preventSearchFocus)||!1,l.mode=(m==null?void 0:m.mode)||"default",l.viewport=(m==null?void 0:m.viewport)!==void 0?document.querySelector(m==null?void 0:m.viewport):null,l.isOpened=!!(m!=null&&m.isOpened)||!1,l.isMultiple=l.el.hasAttribute("multiple")||!1,l.isDisabled=l.el.hasAttribute("disabled")||!1,l.selectedItems=[],l.wrapperClasses=(m==null?void 0:m.wrapperClasses)||null,l.toggleTag=(m==null?void 0:m.toggleTag)||null,l.toggleClasses=(m==null?void 0:m.toggleClasses)||null,l.toggleCountText=(m==null?void 0:m.toggleCountText)||null,l.toggleCountTextMinItems=(m==null?void 0:m.toggleCountTextMinItems)||1,l.tagsItemTemplate=(m==null?void 0:m.tagsItemTemplate)||null,l.tagsItemClasses=(m==null?void 0:m.tagsItemClasses)||null,l.tagsInputClasses=(m==null?void 0:m.tagsInputClasses)||null,l.dropdownTag=(m==null?void 0:m.dropdownTag)||null,l.dropdownClasses=(m==null?void 0:m.dropdownClasses)||null,l.dropdownDirectionClasses=(m==null?void 0:m.dropdownDirectionClasses)||null,l.dropdownSpace=(m==null?void 0:m.dropdownSpace)||10,l.searchWrapperTemplate=(m==null?void 0:m.searchWrapperTemplate)||null,l.searchWrapperClasses=(m==null?void 0:m.searchWrapperClasses)||"bg-white p-2 sticky top-0",l.searchClasses=(m==null?void 0:m.searchClasses)||"block w-[calc(100%-2rem)] text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 py-2 px-3 my-2 mx-4",l.searchPlaceholder=(m==null?void 0:m.searchPlaceholder)||"Search...",l.searchNoResultText=(m==null?void 0:m.searchNoResultText)||"No results found",l.searchNoResultClasses=(m==null?void 0:m.searchNoResultClasses)||"px-4 text-sm text-gray-800 dark:text-neutral-200",l.optionTemplate=(m==null?void 0:m.optionTemplate)||null,l.optionTag=(m==null?void 0:m.optionTag)||null,l.optionClasses=(m==null?void 0:m.optionClasses)||null,l.extraMarkup=(m==null?void 0:m.extraMarkup)||null,l.descriptionClasses=(m==null?void 0:m.descriptionClasses)||null,l.iconClasses=(m==null?void 0:m.iconClasses)||null,l.isAddTagOnEnter=(r=m==null?void 0:m.isAddTagOnEnter)===null||r===void 0||r,l.animationInProcess=!1,l.selectOptions=[],l.tagsInputHelper=null,l.init(),l}return x(n,e),n.prototype.init=function(){this.createCollection(window.$hsSelectCollection,this),this.build()},n.prototype.build=function(){var i=this;if(this.el.style.display="none",this.el.children&&Array.from(this.el.children).filter(function(l){return l.value&&l.value!==""}).forEach(function(l){var u=l.getAttribute("data-hs-select-option");i.selectOptions=k(k([],i.selectOptions,!0),[{title:l.textContent,val:l.value,options:u!=="undefined"?JSON.parse(u):null}],!1)}),this.isMultiple){var s=Array.from(this.el.options).filter(function(l){return l.selected});if(s){var r=[];s.forEach(function(l){r.push(l.value)}),this.value=r}}this.buildWrapper(),this.mode==="tags"?this.buildTags():this.buildToggle(),this.buildDropdown(),this.extraMarkup&&this.buildExtraMarkup()},n.prototype.buildWrapper=function(){var i=this;this.wrapper=document.createElement("div"),this.wrapper.classList.add("hs-select","relative"),this.mode==="tags"&&this.wrapper.addEventListener("click",function(s){s.target.closest("[data-hs-select-dropdown]")||s.target.closest("[data-tag-value]")||i.tagsInput.focus()}),this.wrapperClasses&&(0,c.classToClassList)(this.wrapperClasses,this.wrapper),this.el.before(this.wrapper),this.wrapper.append(this.el)},n.prototype.buildExtraMarkup=function(){var i=this,s=function(r){i.wrapper.append((0,c.htmlToElement)(r))};Array.isArray(this.extraMarkup)?this.extraMarkup.forEach(function(r){return s(r)}):s(this.extraMarkup)},n.prototype.buildToggle=function(){var i,s,r,l=this;this.toggleTextWrapper=document.createElement("span"),this.toggleTextWrapper.classList.add("truncate"),this.toggle=(0,c.htmlToElement)(this.toggleTag||"<div></div>"),s=this.toggle.querySelector("[data-icon]"),r=this.toggle.querySelector("[data-title]"),!this.isMultiple&&s&&this.setToggleIcon(),!this.isMultiple&&r&&this.setToggleTitle(),this.isMultiple?this.toggleTextWrapper.innerHTML=this.value.length?this.stringFromValue():this.placeholder:this.toggleTextWrapper.innerHTML=((i=this.getItemByValue(this.value))===null||i===void 0?void 0:i.title)||this.placeholder,r||this.toggle.append(this.toggleTextWrapper),this.toggleClasses&&(0,c.classToClassList)(this.toggleClasses,this.toggle),this.isDisabled&&this.toggle.classList.add("disabled"),this.wrapper&&this.wrapper.append(this.toggle),this.toggle.addEventListener("click",function(){if(l.isDisabled)return!1;l.isOpened?l.close():l.open()})},n.prototype.setToggleIcon=function(){var i,s,r=this.toggle.querySelector("[data-icon]");if(r.innerHTML="",r){var l=(0,c.htmlToElement)(((s=(i=this.getItemByValue(this.value))===null||i===void 0?void 0:i.options)===null||s===void 0?void 0:s.icon)||"");r.append(l),l?r.classList.remove("hidden"):r.classList.add("hidden")}},n.prototype.setToggleTitle=function(){var i,s=this.toggle.querySelector("[data-title]");if(s.classList.add("truncate"),s.innerHTML="",s){var r=((i=this.getItemByValue(this.value))===null||i===void 0?void 0:i.title)||this.placeholder;s.innerHTML=r,this.toggle.append(s)}},n.prototype.buildTags=function(){this.buildTagsInput(),this.setTagsItems()},n.prototype.reassignTagsInputPlaceholder=function(i){this.tagsInput.placeholder=i,this.tagsInputHelper.innerHTML=i,this.calculateInputWidth()},n.prototype.buildTagsItem=function(i){var s,r,l,u,I,m,O,B=this,G=this.getItemByValue(i),q=document.createElement("div");if(q.setAttribute("data-tag-value",i),this.tagsItemClasses&&(0,c.classToClassList)(this.tagsItemClasses,q),this.tagsItemTemplate&&(u=(0,c.htmlToElement)(this.tagsItemTemplate),q.append(u)),(s=G==null?void 0:G.options)===null||s===void 0?void 0:s.icon){var at=(0,c.htmlToElement)((r=G==null?void 0:G.options)===null||r===void 0?void 0:r.icon);(O=u?u.querySelector("[data-icon]"):document.createElement("span")).append(at),u||q.append(O)}u&&u.querySelector("[data-icon]")&&!(!((l=G==null?void 0:G.options)===null||l===void 0)&&l.icon)&&u.querySelector("[data-icon]").classList.add("hidden"),(I=u?u.querySelector("[data-title]"):document.createElement("span")).textContent=G.title||"",u||q.append(I),u?m=u.querySelector("[data-remove]"):((m=document.createElement("span")).textContent="X",q.append(m)),m.addEventListener("click",function(){B.value=B.value.filter(function(wt){return wt!==i}),B.selectedItems=B.selectedItems.filter(function(wt){return wt!==i}),B.value.length||B.reassignTagsInputPlaceholder(B.placeholder),B.unselectMultipleItems(),B.selectMultipleItems(),q.remove()}),this.wrapper.append(q)},n.prototype.getItemByValue=function(i){return this.selectOptions.find(function(s){return s.val===i})},n.prototype.setTagsItems=function(){var i=this;this.value&&this.value.forEach(function(s){i.selectedItems.includes(s)||i.buildTagsItem(s),i.selectedItems=i.selectedItems.includes(s)?i.selectedItems:k(k([],i.selectedItems,!0),[s],!1)})},n.prototype.buildTagsInput=function(){var i=this;this.tagsInput=document.createElement("input"),this.tagsInputClasses&&(0,c.classToClassList)(this.tagsInputClasses,this.tagsInput),this.tagsInput.addEventListener("focus",function(){return i.open()}),this.tagsInput.addEventListener("input",function(){return i.calculateInputWidth()}),this.tagsInput.addEventListener("input",(0,c.debounce)(function(s){return i.searchOptions(s.target.value)})),this.tagsInput.addEventListener("keydown",function(s){if(s.key==="Enter"&&i.isAddTagOnEnter){var r=s.target.value;if(i.selectOptions.find(function(l){return l.val===r}))return!1;i.addSelectOption(r,r),i.buildOption(r,r),i.dropdown.querySelector('[data-value="'.concat(r,'"]')).click(),i.resetTagsInputField()}}),this.wrapper.append(this.tagsInput),setTimeout(function(){i.adjustInputWidth(),i.reassignTagsInputPlaceholder(i.value.length?"":i.placeholder)})},n.prototype.buildDropdown=function(){var i=this;this.dropdown=(0,c.htmlToElement)(this.dropdownTag||"<div></div>"),this.dropdown.setAttribute("data-hs-select-dropdown",""),this.dropdown.classList.add("absolute","top-full"),this.isOpened||this.dropdown.classList.add("hidden"),this.dropdownClasses&&(0,c.classToClassList)(this.dropdownClasses,this.dropdown),this.wrapper&&this.wrapper.append(this.dropdown),this.dropdown&&this.hasSearch&&this.buildSearch(),this.selectOptions&&this.selectOptions.forEach(function(s,r){return i.buildOption(s.title,s.val,s.options,"".concat(r))})},n.prototype.buildSearch=function(){var i,s=this;this.searchWrapper=(0,c.htmlToElement)(this.searchWrapperTemplate||"<div></div>"),this.searchWrapperClasses&&(0,c.classToClassList)(this.searchWrapperClasses,this.searchWrapper),i=this.searchWrapper.querySelector("[data-input]"),this.search=(0,c.htmlToElement)('<input type="text" />'),this.search.placeholder=this.searchPlaceholder,this.searchClasses&&(0,c.classToClassList)(this.searchClasses,this.search),this.search.addEventListener("input",(0,c.debounce)(function(r){return s.searchOptions(r.target.value)})),i?i.append(this.search):this.searchWrapper.append(this.search),this.dropdown.append(this.searchWrapper)},n.prototype.buildOption=function(i,s,r,l){var u=this;l===void 0&&(l="1");var I=null,m=(0,c.htmlToElement)(this.optionTag||"<div></div>");if(m.setAttribute("data-value",s),m.setAttribute("data-title-value",i),m.setAttribute("tabIndex",l),m.classList.add("cursor-pointer"),this.optionTemplate&&(I=(0,c.htmlToElement)(this.optionTemplate),m.append(I)),I?I.querySelector("[data-title]").textContent=i||"":m.textContent=i||"",r){if(r.icon){var O=(0,c.htmlToElement)(r.icon);if(O.classList.add("mw-full"),I)I.querySelector("[data-icon]").append(O);else{var B=(0,c.htmlToElement)("<div></div>");this.iconClasses&&(0,c.classToClassList)(this.iconClasses,B),B.append(O),m.append(B)}}if(r.description)if(I)I.querySelector("[data-description]").append(r.description);else{var G=(0,c.htmlToElement)("<div></div>");G.textContent=r.description,this.descriptionClasses&&(0,c.classToClassList)(this.descriptionClasses,G),m.append(G)}}I&&I.querySelector("[data-icon]")&&!r&&!(r!=null&&r.icon)&&I.querySelector("[data-icon]").classList.add("hidden"),this.value&&(this.isMultiple?this.value.includes(s):this.value===s)&&m.classList.add("selected"),m.addEventListener("click",function(){return u.onSelectOption(s)}),this.optionClasses&&(0,c.classToClassList)(this.optionClasses,m),this.dropdown&&this.dropdown.append(m)},n.prototype.destroyOption=function(i){var s=this.dropdown.querySelector('[data-value="'.concat(i,'"]'));if(!s)return!1;s.remove()},n.prototype.buildOriginalOption=function(i,s,r){var l=(0,c.htmlToElement)("<option></option>");l.setAttribute("value",s),l.setAttribute("data-hs-select-option",JSON.stringify(r)),l.innerText=i,this.el.append(l)},n.prototype.destroyOriginalOption=function(i){var s=this.el.querySelector('[value="'.concat(i,'"]'));if(!s)return!1;s.remove()},n.prototype.buildTagsInputHelper=function(){this.tagsInputHelper=document.createElement("span"),this.tagsInputHelper.style.fontSize=window.getComputedStyle(this.tagsInput).fontSize,this.tagsInputHelper.style.fontFamily=window.getComputedStyle(this.tagsInput).fontFamily,this.tagsInputHelper.style.fontWeight=window.getComputedStyle(this.tagsInput).fontWeight,this.tagsInputHelper.style.letterSpacing=window.getComputedStyle(this.tagsInput).letterSpacing,this.tagsInputHelper.style.visibility="hidden",this.tagsInputHelper.style.whiteSpace="pre",this.tagsInputHelper.style.position="absolute",this.wrapper.appendChild(this.tagsInputHelper)},n.prototype.calculateInputWidth=function(){this.tagsInputHelper.textContent=this.tagsInput.value||this.tagsInput.placeholder;var i=parseInt(window.getComputedStyle(this.tagsInput).paddingLeft)+parseInt(window.getComputedStyle(this.tagsInput).paddingRight),s=parseInt(window.getComputedStyle(this.tagsInput).borderLeftWidth)+parseInt(window.getComputedStyle(this.tagsInput).borderRightWidth),r=this.tagsInputHelper.offsetWidth+i+s,l=this.wrapper.offsetWidth-(parseInt(window.getComputedStyle(this.wrapper).paddingLeft)+parseInt(window.getComputedStyle(this.wrapper).paddingRight));this.tagsInput.style.width="".concat(Math.min(r,l)+2,"px")},n.prototype.adjustInputWidth=function(){this.buildTagsInputHelper(),this.calculateInputWidth()},n.prototype.onSelectOption=function(i){var s=this;if(this.clearSelections(),this.isMultiple?(this.value=this.value.includes(i)?Array.from(this.value).filter(function(l){return l!==i}):k(k([],Array.from(this.value),!0),[i],!1),this.selectMultipleItems(),this.setNewValue()):(this.value=i,this.selectSingleItem(),this.setNewValue()),this.fireEvent("change",this.value),(0,c.dispatch)("change.hs.select",this.el,this.value),this.mode==="tags"){var r=this.selectedItems.filter(function(l){return!s.value.includes(l)});r.length&&r.forEach(function(l){s.selectedItems=s.selectedItems.filter(function(u){return u!==l}),s.wrapper.querySelector('[data-tag-value="'.concat(l,'"]')).remove()}),this.resetTagsInputField()}this.isMultiple||(this.toggle.querySelector("[data-icon]")&&this.setToggleIcon(),this.toggle.querySelector("[data-title]")&&this.setToggleTitle(),this.close()),this.value.length||this.mode!=="tags"||this.reassignTagsInputPlaceholder(this.placeholder),this.isOpened&&this.mode==="tags"&&this.tagsInput&&this.tagsInput.focus(),this.triggerChangeEventForNativeSelect()},n.prototype.triggerChangeEventForNativeSelect=function(){this.el.value="".concat(this.value);var i=new Event("change",{bubbles:!0});this.el.dispatchEvent(i)},n.prototype.addSelectOption=function(i,s,r){this.selectOptions=k(k([],this.selectOptions,!0),[{title:i,val:s,options:r}],!1)},n.prototype.removeSelectOption=function(i){if(!this.selectOptions.some(function(s){return s.val===i}))return!1;this.selectOptions=this.selectOptions.filter(function(s){return s.val!==i})},n.prototype.resetTagsInputField=function(){this.tagsInput.value="",this.reassignTagsInputPlaceholder(""),this.searchOptions("")},n.prototype.clearSelections=function(){Array.from(this.dropdown.children).forEach(function(i){i.classList.contains("selected")&&i.classList.remove("selected")}),Array.from(this.el.children).forEach(function(i){i.selected&&(i.selected=!1)})},n.prototype.setNewValue=function(){this.mode==="tags"?this.setTagsItems():this.value.length?this.toggleTextWrapper.innerHTML=this.stringFromValue():this.toggleTextWrapper.innerHTML=this.placeholder},n.prototype.stringFromValue=function(){var i=this,s=[];return this.selectOptions.forEach(function(r){i.isMultiple?i.value.includes(r.val)&&s.push(r.title):i.value===r.val&&s.push(r.title)}),this.toggleCountText&&this.toggleCountText!==""&&s.length>=this.toggleCountTextMinItems?"".concat(s.length," ").concat(this.toggleCountText):s.join(", ")},n.prototype.selectSingleItem=function(){var i=this;Array.from(this.el.children).find(function(s){return i.value===s.value}).selected=!0,Array.from(this.dropdown.children).find(function(s){return i.value===s.getAttribute("data-value")}).classList.add("selected")},n.prototype.selectMultipleItems=function(){var i=this;Array.from(this.dropdown.children).filter(function(s){return i.value.includes(s.getAttribute("data-value"))}).forEach(function(s){return s.classList.add("selected")}),Array.from(this.el.children).filter(function(s){return i.value.includes(s.value)}).forEach(function(s){return s.selected=!0})},n.prototype.unselectMultipleItems=function(){Array.from(this.dropdown.children).forEach(function(i){return i.classList.remove("selected")}),Array.from(this.el.children).forEach(function(i){return i.selected=!1})},n.prototype.searchOptions=function(i){this.searchNoResult&&(this.searchNoResult.remove(),this.searchNoResult=null),this.searchNoResult=(0,c.htmlToElement)("<span></span>"),this.searchNoResult.innerText=this.searchNoResultText,(0,c.classToClassList)(this.searchNoResultClasses,this.searchNoResult);var s=this.dropdown.querySelectorAll("[data-value]"),r=!1;s.forEach(function(l){l.getAttribute("data-title-value").toLocaleLowerCase().includes(i.toLocaleLowerCase())?(l.classList.remove("hidden"),r=!0):l.classList.add("hidden")}),r||this.dropdown.append(this.searchNoResult)},n.prototype.eraseToggleIcon=function(){var i=this.toggle.querySelector("[data-icon]");i&&(i.innerHTML=null,i.classList.add("hidden"))},n.prototype.eraseToggleTitle=function(){var i=this.toggle.querySelector("[data-title]");i?i.innerHTML=this.placeholder:this.toggleTextWrapper.innerHTML=this.placeholder},n.prototype.destroy=function(){var i=this.el.parentElement.parentElement;this.el.classList.remove("hidden"),this.el.style.display="",i.prepend(this.el),i.querySelector(".hs-select").remove(),this.wrapper=null},n.prototype.open=function(){var i=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.dropdown.classList.remove("hidden"),this.recalculateDirection(),setTimeout(function(){i.wrapper.classList.add("active"),i.dropdown.classList.add("opened"),i.hasSearch&&!i.preventSearchFocus&&i.search.focus(),i.animationInProcess=!1}),this.isOpened=!0},n.prototype.close=function(){var i,s,r,l=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.wrapper.classList.remove("active"),this.dropdown.classList.remove("opened","bottom-full","top-full"),!((i=this.dropdownDirectionClasses)===null||i===void 0)&&i.bottom&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),!((s=this.dropdownDirectionClasses)===null||s===void 0)&&s.top&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.style.marginBottom="",(0,c.afterTransition)(this.dropdown,function(){l.dropdown.classList.add("hidden"),l.hasSearch&&(l.search.value="",l.search.dispatchEvent(new Event("input",{bubbles:!0})),l.search.blur()),l.animationInProcess=!1}),(r=this.dropdown.querySelector(".hs-select-option-highlighted"))===null||r===void 0||r.classList.remove("hs-select-option-highlighted"),this.isOpened=!1},n.prototype.addOption=function(i){var s=this,r="".concat(this.selectOptions.length),l=function(u){var I=u.title,m=u.val,O=u.options;s.selectOptions.some(function(B){return B.val===m})||(s.addSelectOption(I,m,O),s.buildOption(I,m,O,r),s.buildOriginalOption(I,m,O))};Array.isArray(i)?i.forEach(function(u){l(u)}):l(i)},n.prototype.removeOption=function(i){var s=this,r=function(l){s.selectOptions.some(function(u){return u.val===l})&&(s.removeSelectOption(l),s.destroyOption(l),s.destroyOriginalOption(l),s.value===l&&(s.value=null,s.eraseToggleTitle(),s.eraseToggleIcon()))};Array.isArray(i)?i.forEach(function(l){r(l)}):r(i)},n.prototype.recalculateDirection=function(){var i,s,r,l;(0,c.isEnoughSpace)(this.dropdown,this.toggle||this.tagsInput,"bottom",this.dropdownSpace,this.viewport)?(this.dropdown.classList.remove("bottom-full"),!((i=this.dropdownDirectionClasses)===null||i===void 0)&&i.bottom&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="",this.dropdown.classList.add("top-full"),!((s=this.dropdownDirectionClasses)===null||s===void 0)&&s.top&&this.dropdown.classList.add(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="".concat(this.dropdownSpace,"px")):(this.dropdown.classList.remove("top-full"),!((r=this.dropdownDirectionClasses)===null||r===void 0)&&r.top&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.classList.add("bottom-full"),!((l=this.dropdownDirectionClasses)===null||l===void 0)&&l.bottom&&this.dropdown.classList.add(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="".concat(this.dropdownSpace,"px"))},n.getInstance=function(i,s){var r=window.$hsSelectCollection.find(function(l){return l.element.el===(typeof i=="string"?document.querySelector(i):i)});return r?s?r:r.element:null},n.autoInit=function(){window.$hsSelectCollection||(window.$hsSelectCollection=[]),document.querySelectorAll("[data-hs-select]:not(.--prevent-on-load-init)").forEach(function(i){if(!window.$hsSelectCollection.find(function(l){var u;return((u=l==null?void 0:l.element)===null||u===void 0?void 0:u.el)===i})){var s=i.getAttribute("data-hs-select"),r=s?JSON.parse(s):{};new n(i,r)}}),window.$hsSelectCollection&&(window.addEventListener("click",function(i){var s=i.target;n.closeCurrentlyOpened(s)}),document.addEventListener("keydown",function(i){return n.accessibility(i)}))},n.close=function(i){var s=window.$hsSelectCollection.find(function(r){return r.element.el===(typeof i=="string"?document.querySelector(i):i)});s&&s.element.isOpened&&s.element.close()},n.closeCurrentlyOpened=function(i){if(i===void 0&&(i=null),!i.closest(".hs-select.active")){var s=window.$hsSelectCollection.filter(function(r){return r.element.isOpened})||null;s&&s.forEach(function(r){r.element.close()})}},n.accessibility=function(i){if(window.$hsSelectCollection.find(function(s){return s.element.isOpened})&&o.SELECT_ACCESSIBILITY_KEY_SET.includes(i.code)&&!i.metaKey)switch(i.code){case"Escape":i.preventDefault(),this.onEscape();break;case"ArrowUp":i.preventDefault(),this.onArrow();break;case"ArrowDown":i.preventDefault(),this.onArrow(!1);break;case"Tab":i.preventDefault(),this.onTab(i.shiftKey);break;case"Home":i.preventDefault(),this.onStartEnd();break;case"End":i.preventDefault(),this.onStartEnd(!1);break;case"Enter":i.preventDefault(),this.onEnter(i)}},n.onEscape=function(){var i=window.$hsSelectCollection.find(function(s){return s.element.isOpened});i&&i.element.close()},n.onArrow=function(i){i===void 0&&(i=!0);var s=window.$hsSelectCollection.find(function(m){return m.element.isOpened});if(s){var r=s.element.dropdown;if(!r)return!1;var l=(i?Array.from(r.querySelectorAll(":scope > *:not(.hidden)")).reverse():Array.from(r.querySelectorAll(":scope > *:not(.hidden)"))).filter(function(m){return!m.classList.contains("disabled")}),u=r.querySelector(".hs-select-option-highlighted");u||l[0].classList.add("hs-select-option-highlighted");var I=l.findIndex(function(m){return m===u});I+1<l.length&&I++,l[I].focus(),u&&u.classList.remove("hs-select-option-highlighted"),l[I].classList.add("hs-select-option-highlighted")}},n.onTab=function(i){i===void 0&&(i=!0);var s=window.$hsSelectCollection.find(function(m){return m.element.isOpened});if(s){var r=s.element.dropdown;if(!r)return!1;var l=(i?Array.from(r.querySelectorAll(":scope >  *:not(.hidden)")).reverse():Array.from(r.querySelectorAll(":scope >  *:not(.hidden)"))).filter(function(m){return!m.classList.contains("disabled")}),u=r.querySelector(".hs-select-option-highlighted");u||l[0].classList.add("hs-select-option-highlighted");var I=l.findIndex(function(m){return m===u});if(!(I+1<l.length))return u&&u.classList.remove("hs-select-option-highlighted"),s.element.close(),s.element.toggle.focus(),!1;l[++I].focus(),u&&u.classList.remove("hs-select-option-highlighted"),l[I].classList.add("hs-select-option-highlighted")}},n.onStartEnd=function(i){i===void 0&&(i=!0);var s=window.$hsSelectCollection.find(function(I){return I.element.isOpened});if(s){var r=s.element.dropdown;if(!r)return!1;var l=(i?Array.from(r.querySelectorAll(":scope >  *:not(.hidden)")):Array.from(r.querySelectorAll(":scope >  *:not(.hidden)")).reverse()).filter(function(I){return!I.classList.contains("disabled")}),u=r.querySelector(".hs-select-option-highlighted");l.length&&(l[0].focus(),u&&u.classList.remove("hs-select-option-highlighted"),l[0].classList.add("hs-select-option-highlighted"))}},n.onEnter=function(i){var s=i.target.previousSibling;if(window.$hsSelectCollection.find(function(u){return u.element.el===s})){var r=window.$hsSelectCollection.find(function(u){return u.element.isOpened}),l=window.$hsSelectCollection.find(function(u){return u.element.el===s});r.element.close(),l.element.open()}else(l=window.$hsSelectCollection.find(function(u){return u.element.isOpened}))&&l.element.onSelectOption(i.target.dataset.value||"")},n}(a.default);window.addEventListener("load",function(){t.autoInit()}),document.addEventListener("scroll",function(){if(!window.$hsSelectCollection)return!1;var e=window.$hsSelectCollection.find(function(n){return n.element.isOpened});e&&e.element.recalculateDirection()}),typeof window<"u"&&(window.HSSelect=t),b.default=t},957:function(Y,b,y){/*
 * HSStepper
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(a,o){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},g(a,o)},function(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=a}g(a,o),a.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}),v=this&&this.__assign||function(){return v=Object.assign||function(a){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a},v.apply(this,arguments)},k=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=function(a){function o(t,e){var n=a.call(this,t,e)||this,i=t.getAttribute("data-hs-stepper"),s=i?JSON.parse(i):{},r=v(v({},s),e);return n.currentIndex=(r==null?void 0:r.currentIndex)||1,n.mode=(r==null?void 0:r.mode)||"linear",n.isCompleted=(r==null?void 0:r.isCompleted)!==void 0&&(r==null?void 0:r.isCompleted),n.totalSteps=1,n.navItems=[],n.contentItems=[],n.init(),n}return x(o,a),o.prototype.init=function(){this.createCollection(window.$hsStepperCollection,this),this.buildNav(),this.buildContent(),this.buildButtons(),this.setTotalSteps()},o.prototype.getUncompletedSteps=function(t){return t===void 0&&(t=!1),this.navItems.filter(function(e){var n=e.isCompleted,i=e.isSkip;return t?!n||i:!n&&!i})},o.prototype.setTotalSteps=function(){var t=this;this.navItems.forEach(function(e){var n=e.index;n>t.totalSteps&&(t.totalSteps=n)})},o.prototype.buildNav=function(){var t=this;this.el.querySelectorAll("[data-hs-stepper-nav-item]").forEach(function(e){return t.addNavItem(e)}),this.navItems.forEach(function(e){return t.buildNavItem(e)})},o.prototype.buildNavItem=function(t){var e=this,n=t.index,i=t.isDisabled,s=t.el;n===this.currentIndex&&this.setCurrentNavItem(),(this.mode!=="linear"||i)&&s.addEventListener("click",function(){return e.handleNavItemClick(t)})},o.prototype.addNavItem=function(t){var e=JSON.parse(t.getAttribute("data-hs-stepper-nav-item")),n=e.index,i=e.isFinal,s=i!==void 0&&i,r=e.isCompleted,l=r!==void 0&&r,u=e.isSkip,I=u!==void 0&&u,m=e.isOptional,O=m!==void 0&&m,B=e.isDisabled,G=B!==void 0&&B,q=e.isProcessed,at=q!==void 0&&q,wt=e.hasError,mt=wt!==void 0&&wt;l&&t.classList.add("success"),I&&t.classList.add("skipped"),G&&(t.tagName!=="BUTTON"&&t.tagName!=="INPUT"||t.setAttribute("disabled","disabled"),t.classList.add("disabled")),mt&&t.classList.add("error"),this.navItems.push({index:n,isFinal:s,isCompleted:l,isSkip:I,isOptional:O,isDisabled:G,isProcessed:at,hasError:mt,el:t})},o.prototype.setCurrentNavItem=function(){var t=this;this.navItems.forEach(function(e){var n=e.index,i=e.el;n===t.currentIndex?t.setCurrentNavItemActions(i):t.unsetCurrentNavItemActions(i)})},o.prototype.setCurrentNavItemActions=function(t){t.classList.add("active"),this.fireEvent("active",this.currentIndex),(0,h.dispatch)("active.hs.stepper",this.el,this.currentIndex)},o.prototype.getNavItem=function(t){return t===void 0&&(t=this.currentIndex),this.navItems.find(function(e){return e.index===t})},o.prototype.setProcessedNavItemActions=function(t){t.isProcessed=!0,t.el.classList.add("processed")},o.prototype.setErrorNavItemActions=function(t){t.hasError=!0,t.el.classList.add("error")},o.prototype.unsetCurrentNavItemActions=function(t){t.classList.remove("active")},o.prototype.handleNavItemClick=function(t){var e=t.index;this.currentIndex=e,this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep()},o.prototype.buildContent=function(){var t=this;this.el.querySelectorAll("[data-hs-stepper-content-item]").forEach(function(e){return t.addContentItem(e)}),this.navItems.forEach(function(e){return t.buildContentItem(e)})},o.prototype.buildContentItem=function(t){t.index===this.currentIndex&&this.setCurrentContentItem()},o.prototype.addContentItem=function(t){var e=JSON.parse(t.getAttribute("data-hs-stepper-content-item")),n=e.index,i=e.isFinal,s=i!==void 0&&i,r=e.isCompleted,l=r!==void 0&&r,u=e.isSkip,I=u!==void 0&&u;l&&t.classList.add("success"),I&&t.classList.add("skipped"),this.contentItems.push({index:n,isFinal:s,isCompleted:l,isSkip:I,el:t})},o.prototype.setCurrentContentItem=function(){var t=this;if(this.isCompleted){var e=this.contentItems.find(function(i){return i.isFinal}),n=this.contentItems.filter(function(i){return!i.isFinal});return e.el.style.display="",n.forEach(function(i){return i.el.style.display="none"}),!1}this.contentItems.forEach(function(i){var s=i.index,r=i.el;s===t.currentIndex?t.setCurrentContentItemActions(r):t.unsetCurrentContentItemActions(r)})},o.prototype.hideAllContentItems=function(){this.contentItems.forEach(function(t){return t.el.style.display="none"})},o.prototype.setCurrentContentItemActions=function(t){t.style.display=""},o.prototype.unsetCurrentContentItemActions=function(t){t.style.display="none"},o.prototype.disableAll=function(){var t=this.getNavItem(this.currentIndex);t.hasError=!1,t.isCompleted=!1,t.isDisabled=!1,t.el.classList.remove("error","success"),this.disableButtons()},o.prototype.disableNavItemActions=function(t){t.isDisabled=!0,t.el.classList.add("disabled")},o.prototype.enableNavItemActions=function(t){t.isDisabled=!1,t.el.classList.remove("disabled")},o.prototype.buildButtons=function(){this.backBtn=this.el.querySelector("[data-hs-stepper-back-btn]"),this.nextBtn=this.el.querySelector("[data-hs-stepper-next-btn]"),this.skipBtn=this.el.querySelector("[data-hs-stepper-skip-btn]"),this.completeStepBtn=this.el.querySelector("[data-hs-stepper-complete-step-btn]"),this.finishBtn=this.el.querySelector("[data-hs-stepper-finish-btn]"),this.resetBtn=this.el.querySelector("[data-hs-stepper-reset-btn]"),this.buildBackButton(),this.buildNextButton(),this.buildSkipButton(),this.buildCompleteStepButton(),this.buildFinishButton(),this.buildResetButton()},o.prototype.buildBackButton=function(){var t=this;this.backBtn&&(this.checkForTheFirstStep(),this.backBtn.addEventListener("click",function(){if(t.handleBackButtonClick(),t.mode==="linear"){var e=t.navItems.find(function(i){return i.index===t.currentIndex}),n=t.contentItems.find(function(i){return i.index===t.currentIndex});if(!e||!n)return;e.isCompleted&&(e.isCompleted=!1,e.isSkip=!1,e.el.classList.remove("success","skipped")),n.isCompleted&&(n.isCompleted=!1,n.isSkip=!1,n.el.classList.remove("success","skipped")),t.mode==="linear"&&t.currentIndex!==t.totalSteps&&(t.nextBtn&&(t.nextBtn.style.display=""),t.completeStepBtn&&(t.completeStepBtn.style.display="")),t.showSkipButton(),t.showFinishButton(),t.showCompleteStepButton()}}))},o.prototype.handleBackButtonClick=function(){this.currentIndex!==1&&(this.mode==="linear"&&this.removeOptionalClasses(),this.currentIndex--,this.mode==="linear"&&this.removeOptionalClasses(),this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.fireEvent("back",this.currentIndex),(0,h.dispatch)("back.hs.stepper",this.el,this.currentIndex))},o.prototype.checkForTheFirstStep=function(){this.currentIndex===1?this.setToDisabled(this.backBtn):this.setToNonDisabled(this.backBtn)},o.prototype.setToDisabled=function(t){t.tagName!=="BUTTON"&&t.tagName!=="INPUT"||t.setAttribute("disabled","disabled"),t.classList.add("disabled")},o.prototype.setToNonDisabled=function(t){t.tagName!=="BUTTON"&&t.tagName!=="INPUT"||t.removeAttribute("disabled"),t.classList.remove("disabled")},o.prototype.buildNextButton=function(){var t=this;this.nextBtn&&this.nextBtn.addEventListener("click",function(){var e;if(t.fireEvent("beforeNext",t.currentIndex),(0,h.dispatch)("beforeNext.hs.stepper",t.el,t.currentIndex),(e=t.getNavItem(t.currentIndex))===null||e===void 0?void 0:e.isProcessed)return t.disableAll(),!1;t.goToNext()})},o.prototype.unsetProcessedNavItemActions=function(t){t.isProcessed=!1,t.el.classList.remove("processed")},o.prototype.handleNextButtonClick=function(t){if(t===void 0&&(t=!0),t)this.currentIndex===this.totalSteps?this.currentIndex=1:this.currentIndex++;else{var e=this.getUncompletedSteps();if(e.length===1){var n=e[0].index;this.currentIndex=n}else{if(this.currentIndex===this.totalSteps)return;this.currentIndex++}}this.mode==="linear"&&this.removeOptionalClasses(),this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.showSkipButton(),this.showFinishButton(),this.showCompleteStepButton(),this.fireEvent("next",this.currentIndex),(0,h.dispatch)("next.hs.stepper",this.el,this.currentIndex)},o.prototype.removeOptionalClasses=function(){var t=this,e=this.navItems.find(function(i){return i.index===t.currentIndex}),n=this.contentItems.find(function(i){return i.index===t.currentIndex});e.isSkip=!1,e.hasError=!1,e.isDisabled=!1,n.isSkip=!1,e.el.classList.remove("skipped","success","error"),n.el.classList.remove("skipped","success","error")},o.prototype.buildSkipButton=function(){var t=this;this.skipBtn&&(this.showSkipButton(),this.skipBtn.addEventListener("click",function(){t.handleSkipButtonClick(),t.mode==="linear"&&t.currentIndex===t.totalSteps&&(t.nextBtn&&(t.nextBtn.style.display="none"),t.completeStepBtn&&(t.completeStepBtn.style.display="none"),t.finishBtn&&(t.finishBtn.style.display=""))}))},o.prototype.setSkipItem=function(t){var e=this,n=this.navItems.find(function(s){return s.index===(t||e.currentIndex)}),i=this.contentItems.find(function(s){return s.index===(t||e.currentIndex)});n&&i&&(this.setSkipItemActions(n),this.setSkipItemActions(i))},o.prototype.setSkipItemActions=function(t){t.isSkip=!0,t.el.classList.add("skipped")},o.prototype.showSkipButton=function(){var t=this;if(this.skipBtn){var e=this.navItems.find(function(n){return n.index===t.currentIndex}).isOptional;this.skipBtn.style.display=e?"":"none"}},o.prototype.handleSkipButtonClick=function(){this.setSkipItem(),this.handleNextButtonClick(),this.fireEvent("skip",this.currentIndex),(0,h.dispatch)("skip.hs.stepper",this.el,this.currentIndex)},o.prototype.buildCompleteStepButton=function(){var t=this;this.completeStepBtn&&(this.completeStepBtnDefaultText=this.completeStepBtn.innerText,this.completeStepBtn.addEventListener("click",function(){return t.handleCompleteStepButtonClick()}))},o.prototype.changeTextAndDisableCompleteButtonIfStepCompleted=function(){var t=this,e=this.navItems.find(function(i){return i.index===t.currentIndex}),n=JSON.parse(this.completeStepBtn.getAttribute("data-hs-stepper-complete-step-btn")).completedText;e&&(e.isCompleted?(this.completeStepBtn.innerText=n||this.completeStepBtnDefaultText,this.completeStepBtn.setAttribute("disabled","disabled"),this.completeStepBtn.classList.add("disabled")):(this.completeStepBtn.innerText=this.completeStepBtnDefaultText,this.completeStepBtn.removeAttribute("disabled"),this.completeStepBtn.classList.remove("disabled")))},o.prototype.setCompleteItem=function(t){var e=this,n=this.navItems.find(function(s){return s.index===(t||e.currentIndex)}),i=this.contentItems.find(function(s){return s.index===(t||e.currentIndex)});n&&i&&(this.setCompleteItemActions(n),this.setCompleteItemActions(i))},o.prototype.setCompleteItemActions=function(t){t.isCompleted=!0,t.el.classList.add("success")},o.prototype.showCompleteStepButton=function(){this.completeStepBtn&&(this.getUncompletedSteps().length===1?this.completeStepBtn.style.display="none":this.completeStepBtn.style.display="")},o.prototype.handleCompleteStepButtonClick=function(){this.setCompleteItem(),this.fireEvent("complete",this.currentIndex),(0,h.dispatch)("complete.hs.stepper",this.el,this.currentIndex),this.handleNextButtonClick(!1),this.showFinishButton(),this.showCompleteStepButton(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.showSkipButton()},o.prototype.buildFinishButton=function(){var t=this;this.finishBtn&&(this.isCompleted&&this.setCompleted(),this.finishBtn.addEventListener("click",function(){return t.handleFinishButtonClick()}))},o.prototype.setCompleted=function(){this.el.classList.add("completed")},o.prototype.unsetCompleted=function(){this.el.classList.remove("completed")},o.prototype.showFinishButton=function(){this.finishBtn&&(this.getUncompletedSteps().length===1?this.finishBtn.style.display="":this.finishBtn.style.display="none")},o.prototype.handleFinishButtonClick=function(){var t=this,e=this.getUncompletedSteps(),n=this.getUncompletedSteps(!0),i=this.contentItems.find(function(r){return r.isFinal}).el;e.length&&e.forEach(function(r){var l=r.index;return t.setCompleteItem(l)}),this.currentIndex=this.totalSteps,this.setCurrentNavItem(),this.hideAllContentItems();var s=this.navItems.find(function(r){return r.index===t.currentIndex});(s?s.el:null).classList.remove("active"),i.style.display="block",this.backBtn&&(this.backBtn.style.display="none"),this.nextBtn&&(this.nextBtn.style.display="none"),this.skipBtn&&(this.skipBtn.style.display="none"),this.completeStepBtn&&(this.completeStepBtn.style.display="none"),this.finishBtn&&(this.finishBtn.style.display="none"),this.resetBtn&&(this.resetBtn.style.display=""),n.length<=1&&(this.isCompleted=!0,this.setCompleted()),this.fireEvent("finish",this.currentIndex),(0,h.dispatch)("finish.hs.stepper",this.el,this.currentIndex)},o.prototype.buildResetButton=function(){var t=this;this.resetBtn&&this.resetBtn.addEventListener("click",function(){return t.handleResetButtonClick()})},o.prototype.handleResetButtonClick=function(){var t=this;this.backBtn&&(this.backBtn.style.display=""),this.nextBtn&&(this.nextBtn.style.display=""),this.completeStepBtn&&(this.completeStepBtn.style.display="",this.completeStepBtn.innerText=this.completeStepBtnDefaultText,this.completeStepBtn.removeAttribute("disabled"),this.completeStepBtn.classList.remove("disabled")),this.resetBtn&&(this.resetBtn.style.display="none"),this.navItems.forEach(function(e){var n=e.el;e.isSkip=!1,e.isCompleted=!1,t.unsetCurrentNavItemActions(n),n.classList.remove("success","skipped")}),this.contentItems.forEach(function(e){var n=e.el;e.isSkip=!1,e.isCompleted=!1,t.unsetCurrentContentItemActions(n),n.classList.remove("success","skipped")}),this.currentIndex=1,this.setCurrentNavItem(),this.setCurrentContentItem(),this.showFinishButton(),this.showCompleteStepButton(),this.checkForTheFirstStep(),this.unsetCompleted(),this.isCompleted=!1,this.fireEvent("reset",this.currentIndex),(0,h.dispatch)("reset.hs.stepper",this.el,this.currentIndex)},o.prototype.setProcessedNavItem=function(t){var e=this.getNavItem(t);e&&this.setProcessedNavItemActions(e)},o.prototype.unsetProcessedNavItem=function(t){var e=this.getNavItem(t);e&&this.unsetProcessedNavItemActions(e)},o.prototype.goToNext=function(){this.mode==="linear"&&this.setCompleteItem(),this.handleNextButtonClick(this.mode!=="linear"),this.mode==="linear"&&this.currentIndex===this.totalSteps&&(this.nextBtn&&(this.nextBtn.style.display="none"),this.completeStepBtn&&(this.completeStepBtn.style.display="none"))},o.prototype.disableButtons=function(){this.backBtn&&this.setToDisabled(this.backBtn),this.nextBtn&&this.setToDisabled(this.nextBtn)},o.prototype.enableButtons=function(){this.backBtn&&this.setToNonDisabled(this.backBtn),this.nextBtn&&this.setToNonDisabled(this.nextBtn)},o.prototype.setErrorNavItem=function(t){var e=this.getNavItem(t);e&&this.setErrorNavItemActions(e)},o.getInstance=function(t,e){var n=window.$hsStepperCollection.find(function(i){return i.element.el===(typeof t=="string"?document.querySelector(t):t)});return n?e?n:n.element:null},o.autoInit=function(){window.$hsStepperCollection||(window.$hsStepperCollection=[]),document.querySelectorAll("[data-hs-stepper]:not(.--prevent-on-load-init)").forEach(function(t){window.$hsStepperCollection.find(function(e){var n;return((n=e==null?void 0:e.element)===null||n===void 0?void 0:n.el)===t})||new o(t)})},o}(k(y(737)).default);window.addEventListener("load",function(){c.autoInit()}),typeof window<"u"&&(window.HSStepper=c),b.default=c},983:function(Y,b,y){/*
 * HSStrongPassword
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(a,o){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},g(a,o)},function(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=a}g(a,o),a.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}),v=this&&this.__assign||function(){return v=Object.assign||function(a){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a},v.apply(this,arguments)},k=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=function(a){function o(t,e){var n=a.call(this,t,e)||this;n.isOpened=!1,n.strength=0,n.passedRules=new Set;var i=t.getAttribute("data-hs-strong-password"),s=i?JSON.parse(i):{},r=v(v({},s),e);return n.target=r!=null&&r.target?typeof(r==null?void 0:r.target)=="string"?document.querySelector(r.target):r.target:null,n.hints=r!=null&&r.hints?typeof(r==null?void 0:r.hints)=="string"?document.querySelector(r.hints):r.hints:null,n.stripClasses=(r==null?void 0:r.stripClasses)||null,n.minLength=(r==null?void 0:r.minLength)||6,n.mode=(r==null?void 0:r.mode)||"default",n.popoverSpace=(r==null?void 0:r.popoverSpace)||10,n.checksExclude=(r==null?void 0:r.checksExclude)||[],n.availableChecks=["lowercase","uppercase","numbers","special-characters","min-length"].filter(function(l){return!n.checksExclude.includes(l)}),n.specialCharactersSet=(r==null?void 0:r.specialCharactersSet)||"!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~",n.target&&n.init(),n}return x(o,a),o.prototype.init=function(){this.createCollection(window.$hsStrongPasswordCollection,this),this.availableChecks.length&&this.build()},o.prototype.build=function(){var t=this;this.buildStrips(),this.hints&&this.buildHints(),this.setStrength(this.target.value),this.target.addEventListener("input",function(e){t.setStrength(e.target.value)})},o.prototype.buildStrips=function(){if(this.el.innerHTML="",this.stripClasses)for(var t=0;t<this.availableChecks.length;t++){var e=(0,h.htmlToElement)("<div></div>");(0,h.classToClassList)(this.stripClasses,e),this.el.append(e)}},o.prototype.buildHints=function(){var t=this;this.weakness=this.hints.querySelector("[data-hs-strong-password-hints-weakness-text]")||null,this.rules=Array.from(this.hints.querySelectorAll("[data-hs-strong-password-hints-rule-text]"))||null,this.rules.forEach(function(e){var n,i=e.getAttribute("data-hs-strong-password-hints-rule-text");!((n=t.checksExclude)===null||n===void 0)&&n.includes(i)&&e.remove()}),this.weakness&&this.buildWeakness(),this.rules&&this.buildRules(),this.mode==="popover"&&(this.target.addEventListener("focus",function(){t.isOpened=!0,t.hints.classList.remove("hidden"),t.hints.classList.add("block"),t.recalculateDirection()}),this.target.addEventListener("blur",function(){t.isOpened=!1,t.hints.classList.remove("block","bottom-full","top-full"),t.hints.classList.add("hidden"),t.hints.style.marginTop="",t.hints.style.marginBottom=""}))},o.prototype.buildWeakness=function(){var t=this;this.checkStrength(this.target.value),this.setWeaknessText(),this.target.addEventListener("input",function(){return setTimeout(function(){return t.setWeaknessText()})})},o.prototype.buildRules=function(){var t=this;this.setRulesText(),this.target.addEventListener("input",function(){return setTimeout(function(){return t.setRulesText()})})},o.prototype.setWeaknessText=function(){var t=this.weakness.getAttribute("data-hs-strong-password-hints-weakness-text"),e=JSON.parse(t);this.weakness.textContent=e[this.strength]},o.prototype.setRulesText=function(){var t=this;this.rules.forEach(function(e){var n=e.getAttribute("data-hs-strong-password-hints-rule-text");t.checkIfPassed(e,t.passedRules.has(n))})},o.prototype.togglePopover=function(){var t=this.el.querySelector(".popover");t&&t.classList.toggle("show")},o.prototype.checkStrength=function(t){var e=new Set,n={lowercase:/[a-z]+/,uppercase:/[A-Z]+/,numbers:/[0-9]+/,"special-characters":new RegExp("[".concat(this.specialCharactersSet,"]"))},i=0;return this.availableChecks.includes("lowercase")&&t.match(n.lowercase)&&(i+=1,e.add("lowercase")),this.availableChecks.includes("uppercase")&&t.match(n.uppercase)&&(i+=1,e.add("uppercase")),this.availableChecks.includes("numbers")&&t.match(n.numbers)&&(i+=1,e.add("numbers")),this.availableChecks.includes("special-characters")&&t.match(n["special-characters"])&&(i+=1,e.add("special-characters")),this.availableChecks.includes("min-length")&&t.length>=this.minLength&&(i+=1,e.add("min-length")),t.length||(i=0),i===this.availableChecks.length?this.el.classList.add("accepted"):this.el.classList.remove("accepted"),this.strength=i,this.passedRules=e,{strength:this.strength,rules:this.passedRules}},o.prototype.checkIfPassed=function(t,e){e===void 0&&(e=!1);var n=t.querySelector("[data-check]"),i=t.querySelector("[data-uncheck]");e?(t.classList.add("active"),n.classList.remove("hidden"),i.classList.add("hidden")):(t.classList.remove("active"),n.classList.add("hidden"),i.classList.remove("hidden"))},o.prototype.setStrength=function(t){var e=this.checkStrength(t),n=e.strength,i={strength:n,rules:e.rules};this.hideStrips(n),this.fireEvent("change",i),(0,h.dispatch)("change.hs.strongPassword",this.el,i)},o.prototype.hideStrips=function(t){Array.from(this.el.children).forEach(function(e,n){n<t?e.classList.add("passed"):e.classList.remove("passed")})},o.prototype.recalculateDirection=function(){(0,h.isEnoughSpace)(this.hints,this.target,"bottom",this.popoverSpace)?(this.hints.classList.remove("bottom-full"),this.hints.classList.add("top-full"),this.hints.style.marginBottom="",this.hints.style.marginTop="".concat(this.popoverSpace,"px")):(this.hints.classList.remove("top-full"),this.hints.classList.add("bottom-full"),this.hints.style.marginTop="",this.hints.style.marginBottom="".concat(this.popoverSpace,"px"))},o.getInstance=function(t){var e=window.$hsStrongPasswordCollection.find(function(n){return n.element.el===(typeof t=="string"?document.querySelector(t):t)});return e?e.element:null},o.autoInit=function(){window.$hsStrongPasswordCollection||(window.$hsStrongPasswordCollection=[]),document.querySelectorAll("[data-hs-strong-password]:not(.--prevent-on-load-init)").forEach(function(t){if(!window.$hsStrongPasswordCollection.find(function(i){var s;return((s=i==null?void 0:i.element)===null||s===void 0?void 0:s.el)===t})){var e=t.getAttribute("data-hs-strong-password"),n=e?JSON.parse(e):{};new o(t,n)}})},o}(k(y(737)).default);window.addEventListener("load",function(){c.autoInit()}),document.addEventListener("scroll",function(){if(!window.$hsStrongPasswordCollection)return!1;var a=window.$hsStrongPasswordCollection.find(function(o){return o.element.isOpened});a&&a.element.recalculateDirection()}),typeof window<"u"&&(window.HSStrongPassword=c),b.default=c},949:function(Y,b,y){/*
 * HSTabs
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(o,t){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},g(o,t)},function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=o}g(o,t),o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}),v=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(b,"__esModule",{value:!0});var k=y(969),h=v(y(737)),c=y(190),a=function(o){function t(e,n,i){var s=o.call(this,e,n,i)||this;return s.toggles=s.el.querySelectorAll("[data-hs-tab]"),s.extraToggleId=s.el.getAttribute("hs-data-tab-select"),s.extraToggle=document.querySelector(s.extraToggleId),s.current=Array.from(s.toggles).find(function(r){return r.classList.contains("active")}),s.currentContentId=s.current.getAttribute("data-hs-tab"),s.currentContent=document.querySelector(s.currentContentId),s.prev=null,s.prevContentId=null,s.prevContent=null,s.init(),s}return x(t,o),t.prototype.init=function(){var e=this;this.createCollection(window.$hsTabsCollection,this),this.toggles.forEach(function(n){n.addEventListener("click",function(){return e.open(n)})}),this.extraToggle&&this.extraToggle.addEventListener("change",function(n){return e.change(n)})},t.prototype.open=function(e){this.prev=this.current,this.prevContentId=this.currentContentId,this.prevContent=this.currentContent,this.current=e,this.currentContentId=this.current.getAttribute("data-hs-tab"),this.currentContent=document.querySelector(this.currentContentId),this.prev.classList.remove("active"),this.prevContent.classList.add("hidden"),this.current.classList.add("active"),this.currentContent.classList.remove("hidden"),this.fireEvent("change",{el:e,prev:this.prevContentId,current:this.currentContentId}),(0,k.dispatch)("change.hs.tab",e,{el:e,prev:this.prevContentId,current:this.currentContentId})},t.prototype.change=function(e){var n=document.querySelector('[data-hs-tab="'.concat(e.target.value,'"]'));n&&n.click()},t.getInstance=function(e,n){var i=window.$hsTabsCollection.find(function(s){return s.element.el===(typeof e=="string"?document.querySelector(e):e)});return i?n?i:i.element:null},t.autoInit=function(){window.$hsTabsCollection||(window.$hsTabsCollection=[]),document.querySelectorAll('[role="tablist"]:not(select):not(.--prevent-on-load-init)').forEach(function(e){window.$hsTabsCollection.find(function(n){var i;return((i=n==null?void 0:n.element)===null||i===void 0?void 0:i.el)===e})||new t(e)}),window.$hsTabsCollection&&document.addEventListener("keydown",function(e){return t.accessibility(e)})},t.open=function(e){var n=window.$hsTabsCollection.find(function(s){return Array.from(s.element.toggles).includes(typeof e=="string"?document.querySelector(e):e)}),i=Array.from(n.element.toggles).find(function(s){return s===(typeof e=="string"?document.querySelector(e):e)});i&&!i.classList.contains("active")&&n.element.open(i)},t.accessibility=function(e){var n=document.querySelector("[data-hs-tab]:focus");if(n&&c.TABS_ACCESSIBILITY_KEY_SET.includes(e.code)&&!e.metaKey){var i=n.closest('[role="tablist"]').getAttribute("data-hs-tabs-vertical");switch(e.preventDefault(),e.code){case(i==="true"?"ArrowUp":"ArrowLeft"):this.onArrow();break;case(i==="true"?"ArrowDown":"ArrowRight"):this.onArrow(!1);break;case"Home":this.onStartEnd();break;case"End":this.onStartEnd(!1)}}},t.onArrow=function(e){e===void 0&&(e=!0);var n=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),i=window.$hsTabsCollection.find(function(u){return u.element.el===n});if(i){var s=e?Array.from(i.element.toggles).reverse():Array.from(i.element.toggles),r=s.find(function(u){return document.activeElement===u}),l=s.findIndex(function(u){return u===r});s[l=l+1<s.length?l+1:0].focus(),s[l].click()}},t.onStartEnd=function(e){e===void 0&&(e=!0);var n=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),i=window.$hsTabsCollection.find(function(r){return r.element.el===n});if(i){var s=e?Array.from(i.element.toggles):Array.from(i.element.toggles).reverse();s.length&&(s[0].focus(),s[0].click())}},t.on=function(e,n,i){var s=window.$hsTabsCollection.find(function(r){return Array.from(r.element.toggles).includes(typeof n=="string"?document.querySelector(n):n)});s&&(s.element.events[e]=i)},t}(h.default);window.addEventListener("load",function(){a.autoInit()}),typeof window<"u"&&(window.HSTabs=a),b.default=a},557:function(Y,b,y){var g,x=this&&this.__extends||(g=function(c,a){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])},g(c,a)},function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function o(){this.constructor=c}g(c,a),c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}),v=this&&this.__assign||function(){return v=Object.assign||function(c){for(var a,o=1,t=arguments.length;o<t;o++)for(var e in a=arguments[o])Object.prototype.hasOwnProperty.call(a,e)&&(c[e]=a[e]);return c},v.apply(this,arguments)},k=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(b,"__esModule",{value:!0});var h=function(c){function a(o,t){var e=c.call(this,o,t)||this,n=o.getAttribute("data-hs-theme-switch"),i=n?JSON.parse(n):{},s=v(v({},i),t);return e.theme=(s==null?void 0:s.theme)||localStorage.getItem("hs_theme")||"default",e.themeSet=["light","dark","default"],e.init(),e}return x(a,c),a.prototype.init=function(){this.createCollection(window.$hsThemeSwitchCollection,this),this.theme!=="default"&&this.setAppearance()},a.prototype.setResetStyles=function(){var o=document.createElement("style");return o.innerText="*{transition: unset !important;}",o.setAttribute("data-hs-appearance-onload-styles",""),document.head.appendChild(o),o},a.prototype.addSystemThemeObserver=function(){var o=this;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(t){t.matches?o.setAppearance("dark",!1):o.setAppearance("default",!1)})},a.prototype.removeSystemThemeObserver=function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener},a.prototype.setAppearance=function(o,t,e){o===void 0&&(o=this.theme),t===void 0&&(t=!0),e===void 0&&(e=!0);var n=document.querySelector("html"),i=this.setResetStyles();t&&localStorage.setItem("hs_theme",o),o==="auto"&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default"),n.classList.remove("light","dark","default","auto"),n.classList.add(o),setTimeout(function(){return i.remove()}),e&&window.dispatchEvent(new CustomEvent("on-hs-appearance-change",{detail:o}))},a.getInstance=function(o){var t=window.$hsThemeSwitchCollection.find(function(e){return e.element.el===(typeof o=="string"?document.querySelector(o):o)});return t?t.element:null},a.autoInit=function(){window.$hsThemeSwitchCollection||(window.$hsThemeSwitchCollection=[]);var o=function(t){localStorage.getItem("hs_theme")==="auto"?t.addSystemThemeObserver():t.removeSystemThemeObserver()};document.querySelectorAll("[data-hs-theme-switch]:not(.--prevent-on-load-init)").forEach(function(t){if(!window.$hsThemeSwitchCollection.find(function(n){var i;return((i=n==null?void 0:n.element)===null||i===void 0?void 0:i.el)===t})){var e=new a(t);e.el.checked=e.theme==="dark",o(e),e.el.addEventListener("change",function(n){var i=n.target.checked?"dark":"default";e.setAppearance(i),o(e)})}}),document.querySelectorAll("[data-hs-theme-click-value]:not(.--prevent-on-load-init)").forEach(function(t){var e=t.getAttribute("data-hs-theme-click-value"),n=new a(t);o(n),n.el.addEventListener("click",function(){n.setAppearance(e),o(n)})})},a}(k(y(737)).default);window.addEventListener("load",function(){h.autoInit()}),window.$hsThemeSwitchCollection&&window.addEventListener("on-hs-appearance-change",function(c){window.$hsThemeSwitchCollection.forEach(function(a){a.element.el.checked=c.detail==="dark"})}),typeof window<"u"&&(window.HSThemeSwitch=h),b.default=h},87:function(Y,b,y){/*
 * HSToggleCount
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(c,a){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])},g(c,a)},function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function o(){this.constructor=c}g(c,a),c.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}),v=this&&this.__assign||function(){return v=Object.assign||function(c){for(var a,o=1,t=arguments.length;o<t;o++)for(var e in a=arguments[o])Object.prototype.hasOwnProperty.call(a,e)&&(c[e]=a[e]);return c},v.apply(this,arguments)},k=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(b,"__esModule",{value:!0});var h=function(c){function a(o,t){var e=c.call(this,o,t)||this,n=o.getAttribute("data-hs-toggle-count"),i=n?JSON.parse(n):{},s=v(v({},i),t);return e.target=s!=null&&s.target?typeof(s==null?void 0:s.target)=="string"?document.querySelector(s.target):s.target:null,e.min=(s==null?void 0:s.min)||0,e.max=(s==null?void 0:s.max)||0,e.duration=(s==null?void 0:s.duration)||700,e.isChecked=e.target.checked||!1,e.target&&e.init(),e}return x(a,c),a.prototype.init=function(){var o=this;this.createCollection(window.$hsToggleCountCollection,this),this.isChecked&&(this.el.innerText=String(this.max)),this.target.addEventListener("change",function(){o.isChecked=!o.isChecked,o.toggle()})},a.prototype.toggle=function(){this.isChecked?this.countUp():this.countDown()},a.prototype.animate=function(o,t){var e=this,n=0,i=function(s){n||(n=s);var r=Math.min((s-n)/e.duration,1);e.el.innerText=String(Math.floor(r*(t-o)+o)),r<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)},a.prototype.countUp=function(){this.animate(this.min,this.max)},a.prototype.countDown=function(){this.animate(this.max,this.min)},a.getInstance=function(o,t){var e=window.$hsToggleCountCollection.find(function(n){return n.element.el===(typeof o=="string"?document.querySelector(o):o)});return e?t?e:e.element:null},a.autoInit=function(){window.$hsToggleCountCollection||(window.$hsToggleCountCollection=[]),document.querySelectorAll("[data-hs-toggle-count]:not(.--prevent-on-load-init)").forEach(function(o){window.$hsToggleCountCollection.find(function(t){var e;return((e=t==null?void 0:t.element)===null||e===void 0?void 0:e.el)===o})||new a(o)})},a}(k(y(737)).default);window.addEventListener("load",function(){h.autoInit()}),typeof window<"u"&&(window.HSToggleCount=h),b.default=h},366:function(Y,b,y){/*
 * HSTogglePassword
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(a,o){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},g(a,o)},function(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=a}g(a,o),a.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}),v=this&&this.__assign||function(){return v=Object.assign||function(a){for(var o,t=1,e=arguments.length;t<e;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a},v.apply(this,arguments)},k=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var h=y(969),c=function(a){function o(t,e){var n=a.call(this,t,e)||this,i=t.getAttribute("data-hs-toggle-password"),s=i?JSON.parse(i):{},r=v(v({},s),e),l=[];return r!=null&&r.target&&typeof(r==null?void 0:r.target)=="string"?(r==null?void 0:r.target.split(",")).forEach(function(u){l.push(document.querySelector(u))}):r!=null&&r.target&&typeof(r==null?void 0:r.target)=="object"?r.target.forEach(function(u){return l.push(document.querySelector(u))}):r.target.forEach(function(u){return l.push(u)}),n.target=l,n.isShown=!!n.el.hasAttribute("type")&&n.el.checked,n.eventType=(0,h.isFormElement)(n.el)?"change":"click",n.isMultiple=n.target.length>1&&!!n.el.closest("[data-hs-toggle-password-group]"),n.target&&n.init(),n}return x(o,a),o.prototype.init=function(){var t=this;this.createCollection(window.$hsTogglePasswordCollection,this),this.isShown?this.show():this.hide(),this.el.addEventListener(this.eventType,function(){t.isShown?t.hide():t.show(),t.fireEvent("toggle",t.target),(0,h.dispatch)("toggle.hs.toggle-select",t.el,t.target)})},o.prototype.getMultipleToggles=function(){var t=this.el.closest("[data-hs-toggle-password-group]").querySelectorAll("[data-hs-toggle-password]"),e=[];return t.forEach(function(n){e.push(o.getInstance(n))}),e},o.prototype.show=function(){this.isMultiple?(this.getMultipleToggles().forEach(function(t){return!!t&&(t.isShown=!0)}),this.el.closest("[data-hs-toggle-password-group]").classList.add("active")):(this.isShown=!0,this.el.classList.add("active")),this.target.forEach(function(t){t.type="text"})},o.prototype.hide=function(){this.isMultiple?(this.getMultipleToggles().forEach(function(t){return!!t&&(t.isShown=!1)}),this.el.closest("[data-hs-toggle-password-group]").classList.remove("active")):(this.isShown=!1,this.el.classList.remove("active")),this.target.forEach(function(t){t.type="password"})},o.getInstance=function(t,e){var n=window.$hsTogglePasswordCollection.find(function(i){return i.element.el===(typeof t=="string"?document.querySelector(t):t)});return n?e?n:n.element:null},o.autoInit=function(){window.$hsTogglePasswordCollection||(window.$hsTogglePasswordCollection=[]),document.querySelectorAll("[data-hs-toggle-password]:not(.--prevent-on-load-init)").forEach(function(t){window.$hsTogglePasswordCollection.find(function(e){var n;return((n=e==null?void 0:e.element)===null||n===void 0?void 0:n.el)===t})||new o(t)})},o}(k(y(737)).default);window.addEventListener("load",function(){c.autoInit()}),typeof window<"u"&&(window.HSTogglePassword=c),b.default=c},679:function(Y,b,y){/*
 * HSTooltip
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var g,x=this&&this.__extends||(g=function(n,i){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,r){s.__proto__=r}||function(s,r){for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=r[l])},g(n,i)},function(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=n}g(n,i),n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}),v=this&&this.__assign||function(){return v=Object.assign||function(n){for(var i,s=1,r=arguments.length;s<r;s++)for(var l in i=arguments[s])Object.prototype.hasOwnProperty.call(i,l)&&(n[l]=i[l]);return n},v.apply(this,arguments)},k=this&&this.__spreadArray||function(n,i,s){if(s||arguments.length===2)for(var r,l=0,u=i.length;l<u;l++)!r&&l in i||(r||(r=Array.prototype.slice.call(i,0,l)),r[l]=i[l]);return n.concat(r||Array.prototype.slice.call(i))},h=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(b,"__esModule",{value:!0});var c=y(492),a=y(969),o=h(y(737)),t=y(190),e=function(n){function i(s,r,l){var u=n.call(this,s,r,l)||this;return u.el&&(u.toggle=u.el.querySelector(".hs-tooltip-toggle")||u.el,u.content=u.el.querySelector(".hs-tooltip-content"),u.eventMode=(0,a.getClassProperty)(u.el,"--trigger")||"hover",u.preventPopper=(0,a.getClassProperty)(u.el,"--prevent-popper","false"),u.placement=(0,a.getClassProperty)(u.el,"--placement"),u.strategy=(0,a.getClassProperty)(u.el,"--strategy")),u.el&&u.toggle&&u.content&&u.init(),u}return x(i,n),i.prototype.init=function(){var s=this;this.createCollection(window.$hsTooltipCollection,this),this.eventMode==="click"?this.toggle.addEventListener("click",function(){return s.click()}):this.eventMode==="focus"?this.toggle.addEventListener("click",function(){return s.focus()}):this.eventMode==="hover"&&(this.toggle.addEventListener("mouseenter",function(){return s.enter()}),this.toggle.addEventListener("mouseleave",function(){return s.leave()})),this.preventPopper==="false"&&this.buildPopper()},i.prototype.enter=function(){this.show()},i.prototype.leave=function(){this.hide()},i.prototype.click=function(){var s=this;if(this.el.classList.contains("show"))return!1;this.show();var r=function(){setTimeout(function(){s.hide(),s.toggle.removeEventListener("click",r,!0),s.toggle.removeEventListener("blur",r,!0)})};this.toggle.addEventListener("click",r,!0),this.toggle.addEventListener("blur",r,!0)},i.prototype.focus=function(){var s=this;this.show();var r=function(){s.hide(),s.toggle.removeEventListener("blur",r,!0)};this.toggle.addEventListener("blur",r,!0)},i.prototype.buildPopper=function(){this.popperInstance=(0,c.createPopper)(this.toggle,this.content,{placement:t.POSITIONS[this.placement]||"top",strategy:this.strategy||"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})},i.prototype.show=function(){var s=this;this.content.classList.remove("hidden"),this.preventPopper==="false"&&(this.popperInstance.setOptions(function(r){return v(v({},r),{modifiers:k(k([],r.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this.popperInstance.update()),setTimeout(function(){s.el.classList.add("show"),s.fireEvent("show",s.el),(0,a.dispatch)("show.hs.tooltip",s.el,s.el)})},i.prototype.hide=function(){var s=this;this.el.classList.remove("show"),this.preventPopper==="false"&&this.popperInstance.setOptions(function(r){return v(v({},r),{modifiers:k(k([],r.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this.fireEvent("hide",this.el),(0,a.dispatch)("hide.hs.tooltip",this.el,this.el),(0,a.afterTransition)(this.content,function(){if(s.el.classList.contains("show"))return!1;s.content.classList.add("hidden")})},i.getInstance=function(s,r){r===void 0&&(r=!1);var l=window.$hsTooltipCollection.find(function(u){return u.element.el===(typeof s=="string"?document.querySelector(s):s)});return l?r?l:l.element.el:null},i.autoInit=function(){window.$hsTooltipCollection||(window.$hsTooltipCollection=[]),document.querySelectorAll(".hs-tooltip").forEach(function(s){window.$hsTooltipCollection.find(function(r){var l;return((l=r==null?void 0:r.element)===null||l===void 0?void 0:l.el)===s})||new i(s)})},i.show=function(s){var r=window.$hsTooltipCollection.find(function(l){return l.element.el===(typeof s=="string"?document.querySelector(s):s)});if(r)switch(r.element.eventMode){case"click":r.element.click();break;case"focus":r.element.focus();break;default:r.element.enter()}},i.hide=function(s){var r=window.$hsTooltipCollection.find(function(l){return l.element.el===(typeof s=="string"?document.querySelector(s):s)});r&&r.element.hide()},i.on=function(s,r,l){var u=window.$hsTooltipCollection.find(function(I){return I.element.el===(typeof r=="string"?document.querySelector(r):r)});u&&(u.element.events[s]=l)},i}(o.default);window.addEventListener("load",function(){e.autoInit()}),typeof window<"u"&&(window.HSTooltip=e),b.default=e},362:function(Y,b,y){var g=this&&this.__importDefault||function(B){return B&&B.__esModule?B:{default:B}};Object.defineProperty(b,"__esModule",{value:!0}),b.COLLECTIONS=void 0;var x=g(y(413)),v=g(y(460)),k=g(y(629)),h=g(y(652)),c=g(y(23)),a=g(y(610)),o=g(y(371)),t=g(y(770)),e=g(y(659)),n=g(y(139)),i=g(y(591)),s=g(y(233)),r=g(y(957)),l=g(y(983)),u=g(y(949)),I=g(y(87)),m=g(y(366)),O=g(y(679));b.COLLECTIONS=[{key:"copy-markup",fn:x.default},{key:"accordion",fn:v.default},{key:"carousel",fn:k.default},{key:"collapse",fn:h.default},{key:"combobox",fn:c.default},{key:"dropdown",fn:a.default},{key:"input-number",fn:o.default},{key:"overlay",fn:t.default},{key:"pin-input",fn:e.default},{key:"remove-element",fn:n.default},{key:"scrollspy",fn:i.default},{key:"select",fn:s.default},{key:"stepper",fn:r.default},{key:"strong-password",fn:l.default},{key:"tabs",fn:u.default},{key:"toggle-count",fn:I.default},{key:"toggle-password",fn:m.default},{key:"tooltip",fn:O.default}]},313:(Y,b,y)=>{/*
 * HSStaticMethods
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */Object.defineProperty(b,"__esModule",{value:!0});var g=y(969),x=y(362),v={getClassProperty:g.getClassProperty,afterTransition:g.afterTransition,autoInit:function(k){k===void 0&&(k="all"),k==="all"?x.COLLECTIONS.forEach(function(h){var c=h.fn;c==null||c.autoInit()}):x.COLLECTIONS.forEach(function(h){var c=h.key,a=h.fn;k.includes(c)&&(a==null||a.autoInit())})}};typeof window<"u"&&(window.HSStaticMethods=v),b.default=v},969:function(Y,b){var y=this;Object.defineProperty(b,"__esModule",{value:!0}),b.menuSearchHistory=b.classToClassList=b.htmlToElement=b.afterTransition=b.dispatch=b.debounce=b.isFormElement=b.isParentOrElementHidden=b.isEnoughSpace=b.isIpadOS=b.isIOS=b.getClassPropertyAlt=b.getClassProperty=b.stringToBoolean=void 0,b.stringToBoolean=function(x){return x==="true"},b.getClassProperty=function(x,v,k){return k===void 0&&(k=""),(window.getComputedStyle(x).getPropertyValue(v)||k).replace(" ","")},b.getClassPropertyAlt=function(x,v,k){k===void 0&&(k="");var h="";return x.classList.forEach(function(c){c.includes(v)&&(h=c)}),h.match(/:(.*)]/)?h.match(/:(.*)]/)[1]:k},b.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},b.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},b.isEnoughSpace=function(x,v,k,h,c){k===void 0&&(k="auto"),h===void 0&&(h=10),c===void 0&&(c=null);var a=v.getBoundingClientRect(),o=c?c.getBoundingClientRect():null,t=window.innerHeight,e=o?a.top-o.top:a.top,n=(c?o.bottom:t)-a.bottom,i=x.clientHeight+h;return k==="bottom"?n>=i:k==="top"?e>=i:e>=i||n>=i},b.isFormElement=function(x){return x instanceof HTMLInputElement||x instanceof HTMLTextAreaElement||x instanceof HTMLSelectElement};var g=function(x){return!!x&&(window.getComputedStyle(x).display==="none"||g(x.parentElement))};b.isParentOrElementHidden=g,b.debounce=function(x,v){var k;return v===void 0&&(v=200),function(){for(var h=[],c=0;c<arguments.length;c++)h[c]=arguments[c];clearTimeout(k),k=setTimeout(function(){x.apply(y,h)},v)}},b.dispatch=function(x,v,k){k===void 0&&(k=null);var h=new CustomEvent(x,{detail:{payload:k},bubbles:!0,cancelable:!0,composed:!1});v.dispatchEvent(h)},b.afterTransition=function(x,v){var k=function(){v(),x.removeEventListener("transitionend",k,!0)};window.getComputedStyle(x,null).getPropertyValue("transition")!==(navigator.userAgent.includes("Firefox")?"all":"all 0s ease 0s")?x.addEventListener("transitionend",k,!0):v()},b.htmlToElement=function(x){var v=document.createElement("template");return x=x.trim(),v.innerHTML=x,v.content.firstChild},b.classToClassList=function(x,v,k,h){k===void 0&&(k=" "),h===void 0&&(h="add"),x.split(k).forEach(function(c){return h==="add"?v.classList.add(c):v.classList.remove(c)})},b.menuSearchHistory={historyIndex:-1,addHistory:function(x){this.historyIndex=x},existsInHistory:function(x){return x>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},gt={};function R(Y){var b=gt[Y];if(b!==void 0)return b.exports;var y=gt[Y]={exports:{}};return Et[Y].call(y.exports,y,y.exports,R),y.exports}return R.d=(Y,b)=>{for(var y in b)R.o(b,y)&&!R.o(Y,y)&&Object.defineProperty(Y,y,{enumerable:!0,get:b[y]})},R.o=(Y,b)=>Object.prototype.hasOwnProperty.call(Y,b),R.r=Y=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Y,"__esModule",{value:!0})},R(700)})())})(xn);var dn={},Cn={get exports(){return dn},set exports(nt){dn=nt}};(function(nt,st){(function(Et,gt){nt.exports=gt()})(self,function(){return function(){var Et={647:function(b,y,g){g.r(y)},853:function(b,y,g){g.r(y),g.d(y,{afterMain:function(){return G},afterRead:function(){return m},afterWrite:function(){return wt},applyStyles:function(){return xt},arrow:function(){return ee},auto:function(){return c},basePlacements:function(){return a},beforeMain:function(){return O},beforeRead:function(){return u},beforeWrite:function(){return q},bottom:function(){return v},clippingParents:function(){return e},computeStyles:function(){return ce},createPopper:function(){return Xe},createPopperBase:function(){return Qe},createPopperLite:function(){return w},detectOverflow:function(){return ie},end:function(){return t},eventListeners:function(){return Ae},flip:function(){return je},hide:function(){return Me},left:function(){return h},main:function(){return B},modifierPhases:function(){return mt},offset:function(){return ke},placements:function(){return l},popper:function(){return i},popperGenerator:function(){return Ee},popperOffsets:function(){return _e},preventOverflow:function(){return Ze},read:function(){return I},reference:function(){return s},right:function(){return k},start:function(){return o},top:function(){return x},variationPlacements:function(){return r},viewport:function(){return n},write:function(){return at}});var x="top",v="bottom",k="right",h="left",c="auto",a=[x,v,k,h],o="start",t="end",e="clippingParents",n="viewport",i="popper",s="reference",r=a.reduce(function(d,p){return d.concat([p+"-"+o,p+"-"+t])},[]),l=[].concat(a,[c]).reduce(function(d,p){return d.concat([p,p+"-"+o,p+"-"+t])},[]),u="beforeRead",I="read",m="afterRead",O="beforeMain",B="main",G="afterMain",q="beforeWrite",at="write",wt="afterWrite",mt=[u,I,m,O,B,G,q,at,wt];function it(d){return d?(d.nodeName||"").toLowerCase():null}function lt(d){if(d==null)return window;if(d.toString()!=="[object Window]"){var p=d.ownerDocument;return p&&p.defaultView||window}return d}function ct(d){return d instanceof lt(d).Element||d instanceof Element}function vt(d){return d instanceof lt(d).HTMLElement||d instanceof HTMLElement}function $t(d){return typeof ShadowRoot<"u"&&(d instanceof lt(d).ShadowRoot||d instanceof ShadowRoot)}var xt={name:"applyStyles",enabled:!0,phase:"write",fn:function(d){var p=d.state;Object.keys(p.elements).forEach(function(f){var C=p.styles[f]||{},_=p.attributes[f]||{},E=p.elements[f];vt(E)&&it(E)&&(Object.assign(E.style,C),Object.keys(_).forEach(function(S){var L=_[S];L===!1?E.removeAttribute(S):E.setAttribute(S,L===!0?"":L)}))})},effect:function(d){var p=d.state,f={popper:{position:p.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(p.elements.popper.style,f.popper),p.styles=f,p.elements.arrow&&Object.assign(p.elements.arrow.style,f.arrow),function(){Object.keys(p.elements).forEach(function(C){var _=p.elements[C],E=p.attributes[C]||{},S=Object.keys(p.styles.hasOwnProperty(C)?p.styles[C]:f[C]).reduce(function(L,T){return L[T]="",L},{});vt(_)&&it(_)&&(Object.assign(_.style,S),Object.keys(E).forEach(function(L){_.removeAttribute(L)}))})}},requires:["computeStyles"]};function ht(d){return d.split("-")[0]}var St=Math.max,jt=Math.min,Dt=Math.round;function Gt(){var d=navigator.userAgentData;return d!=null&&d.brands?d.brands.map(function(p){return p.brand+"/"+p.version}).join(" "):navigator.userAgent}function Ht(){return!/^((?!chrome|android).)*safari/i.test(Gt())}function qt(d,p,f){p===void 0&&(p=!1),f===void 0&&(f=!1);var C=d.getBoundingClientRect(),_=1,E=1;p&&vt(d)&&(_=d.offsetWidth>0&&Dt(C.width)/d.offsetWidth||1,E=d.offsetHeight>0&&Dt(C.height)/d.offsetHeight||1);var S=(ct(d)?lt(d):window).visualViewport,L=!Ht()&&f,T=(C.left+(L&&S?S.offsetLeft:0))/_,j=(C.top+(L&&S?S.offsetTop:0))/E,A=C.width/_,P=C.height/E;return{width:A,height:P,top:j,right:T+A,bottom:j+P,left:T,x:T,y:j}}function Zt(d){var p=qt(d),f=d.offsetWidth,C=d.offsetHeight;return Math.abs(p.width-f)<=1&&(f=p.width),Math.abs(p.height-C)<=1&&(C=p.height),{x:d.offsetLeft,y:d.offsetTop,width:f,height:C}}function It(d,p){var f=p.getRootNode&&p.getRootNode();if(d.contains(p))return!0;if(f&&$t(f)){var C=p;do{if(C&&d.isSameNode(C))return!0;C=C.parentNode||C.host}while(C)}return!1}function Pt(d){return lt(d).getComputedStyle(d)}function J(d){return["table","td","th"].indexOf(it(d))>=0}function Tt(d){return((ct(d)?d.ownerDocument:d.document)||window.document).documentElement}function Qt(d){return it(d)==="html"?d:d.assignedSlot||d.parentNode||($t(d)?d.host:null)||Tt(d)}function tt(d){return vt(d)&&Pt(d).position!=="fixed"?d.offsetParent:null}function Xt(d){for(var p=lt(d),f=tt(d);f&&J(f)&&Pt(f).position==="static";)f=tt(f);return f&&(it(f)==="html"||it(f)==="body"&&Pt(f).position==="static")?p:f||function(C){var _=/firefox/i.test(Gt());if(/Trident/i.test(Gt())&&vt(C)&&Pt(C).position==="fixed")return null;var E=Qt(C);for($t(E)&&(E=E.host);vt(E)&&["html","body"].indexOf(it(E))<0;){var S=Pt(E);if(S.transform!=="none"||S.perspective!=="none"||S.contain==="paint"||["transform","perspective"].indexOf(S.willChange)!==-1||_&&S.willChange==="filter"||_&&S.filter&&S.filter!=="none")return E;E=E.parentNode}return null}(d)||p}function te(d){return["top","bottom"].indexOf(d)>=0?"x":"y"}function ae(d,p,f){return St(d,jt(p,f))}function Te(d){return Object.assign({},{top:0,right:0,bottom:0,left:0},d)}function Oe(d,p){return p.reduce(function(f,C){return f[C]=d,f},{})}var ee={name:"arrow",enabled:!0,phase:"main",fn:function(d){var p,f=d.state,C=d.name,_=d.options,E=f.elements.arrow,S=f.modifiersData.popperOffsets,L=ht(f.placement),T=te(L),j=[h,k].indexOf(L)>=0?"height":"width";if(E&&S){var A=function(U,X){return Te(typeof(U=typeof U=="function"?U(Object.assign({},X.rects,{placement:X.placement})):U)!="number"?U:Oe(U,a))}(_.padding,f),P=Zt(E),z=T==="y"?x:h,$=T==="y"?v:k,Z=f.rects.reference[j]+f.rects.reference[T]-S[T]-f.rects.popper[j],H=S[T]-f.rects.reference[T],W=Xt(E),Q=W?T==="y"?W.clientHeight||0:W.clientWidth||0:0,K=Z/2-H/2,N=A[z],M=Q-P[j]-A[$],D=Q/2-P[j]/2+K,V=ae(N,D,M),F=T;f.modifiersData[C]=((p={})[F]=V,p.centerOffset=V-D,p)}},effect:function(d){var p=d.state,f=d.options.element,C=f===void 0?"[data-popper-arrow]":f;C!=null&&(typeof C!="string"||(C=p.elements.popper.querySelector(C)))&&It(p.elements.popper,C)&&(p.elements.arrow=C)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function le(d){return d.split("-")[1]}var We={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ve(d){var p,f=d.popper,C=d.popperRect,_=d.placement,E=d.variation,S=d.offsets,L=d.position,T=d.gpuAcceleration,j=d.adaptive,A=d.roundOffsets,P=d.isFixed,z=S.x,$=z===void 0?0:z,Z=S.y,H=Z===void 0?0:Z,W=typeof A=="function"?A({x:$,y:H}):{x:$,y:H};$=W.x,H=W.y;var Q=S.hasOwnProperty("x"),K=S.hasOwnProperty("y"),N=h,M=x,D=window;if(j){var V=Xt(f),F="clientHeight",U="clientWidth";V===lt(f)&&Pt(V=Tt(f)).position!=="static"&&L==="absolute"&&(F="scrollHeight",U="scrollWidth"),(_===x||(_===h||_===k)&&E===t)&&(M=v,H-=(P&&V===D&&D.visualViewport?D.visualViewport.height:V[F])-C.height,H*=T?1:-1),(_===h||(_===x||_===v)&&E===t)&&(N=k,$-=(P&&V===D&&D.visualViewport?D.visualViewport.width:V[U])-C.width,$*=T?1:-1)}var X,et=Object.assign({position:L},j&&We),rt=A===!0?function(dt){var ft=dt.x,yt=dt.y,ot=window.devicePixelRatio||1;return{x:Dt(ft*ot)/ot||0,y:Dt(yt*ot)/ot||0}}({x:$,y:H}):{x:$,y:H};return $=rt.x,H=rt.y,T?Object.assign({},et,((X={})[M]=K?"0":"",X[N]=Q?"0":"",X.transform=(D.devicePixelRatio||1)<=1?"translate("+$+"px, "+H+"px)":"translate3d("+$+"px, "+H+"px, 0)",X)):Object.assign({},et,((p={})[M]=K?H+"px":"",p[N]=Q?$+"px":"",p.transform="",p))}var ce={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(d){var p=d.state,f=d.options,C=f.gpuAcceleration,_=C===void 0||C,E=f.adaptive,S=E===void 0||E,L=f.roundOffsets,T=L===void 0||L,j={placement:ht(p.placement),variation:le(p.placement),popper:p.elements.popper,popperRect:p.rects.popper,gpuAcceleration:_,isFixed:p.options.strategy==="fixed"};p.modifiersData.popperOffsets!=null&&(p.styles.popper=Object.assign({},p.styles.popper,ve(Object.assign({},j,{offsets:p.modifiersData.popperOffsets,position:p.options.strategy,adaptive:S,roundOffsets:T})))),p.modifiersData.arrow!=null&&(p.styles.arrow=Object.assign({},p.styles.arrow,ve(Object.assign({},j,{offsets:p.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:T})))),p.attributes.popper=Object.assign({},p.attributes.popper,{"data-popper-placement":p.placement})},data:{}},de={passive:!0},Ae={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(d){var p=d.state,f=d.instance,C=d.options,_=C.scroll,E=_===void 0||_,S=C.resize,L=S===void 0||S,T=lt(p.elements.popper),j=[].concat(p.scrollParents.reference,p.scrollParents.popper);return E&&j.forEach(function(A){A.addEventListener("scroll",f.update,de)}),L&&T.addEventListener("resize",f.update,de),function(){E&&j.forEach(function(A){A.removeEventListener("scroll",f.update,de)}),L&&T.removeEventListener("resize",f.update,de)}},data:{}},ye={left:"right",right:"left",bottom:"top",top:"bottom"};function be(d){return d.replace(/left|right|bottom|top/g,function(p){return ye[p]})}var Re={start:"end",end:"start"};function we(d){return d.replace(/start|end/g,function(p){return Re[p]})}function pe(d){var p=lt(d);return{scrollLeft:p.pageXOffset,scrollTop:p.pageYOffset}}function he(d){return qt(Tt(d)).left+pe(d).scrollLeft}function xe(d){var p=Pt(d),f=p.overflow,C=p.overflowX,_=p.overflowY;return/auto|scroll|overlay|hidden/.test(f+_+C)}function ue(d){return["html","body","#document"].indexOf(it(d))>=0?d.ownerDocument.body:vt(d)&&xe(d)?d:ue(Qt(d))}function ne(d,p){var f;p===void 0&&(p=[]);var C=ue(d),_=C===((f=d.ownerDocument)==null?void 0:f.body),E=lt(C),S=_?[E].concat(E.visualViewport||[],xe(C)?C:[]):C,L=p.concat(S);return _?L:L.concat(ne(Qt(S)))}function Ce(d){return Object.assign({},d,{left:d.x,top:d.y,right:d.x+d.width,bottom:d.y+d.height})}function Fe(d,p,f){return p===n?Ce(function(C,_){var E=lt(C),S=Tt(C),L=E.visualViewport,T=S.clientWidth,j=S.clientHeight,A=0,P=0;if(L){T=L.width,j=L.height;var z=Ht();(z||!z&&_==="fixed")&&(A=L.offsetLeft,P=L.offsetTop)}return{width:T,height:j,x:A+he(C),y:P}}(d,f)):ct(p)?function(C,_){var E=qt(C,!1,_==="fixed");return E.top=E.top+C.clientTop,E.left=E.left+C.clientLeft,E.bottom=E.top+C.clientHeight,E.right=E.left+C.clientWidth,E.width=C.clientWidth,E.height=C.clientHeight,E.x=E.left,E.y=E.top,E}(p,f):Ce(function(C){var _,E=Tt(C),S=pe(C),L=(_=C.ownerDocument)==null?void 0:_.body,T=St(E.scrollWidth,E.clientWidth,L?L.scrollWidth:0,L?L.clientWidth:0),j=St(E.scrollHeight,E.clientHeight,L?L.scrollHeight:0,L?L.clientHeight:0),A=-S.scrollLeft+he(C),P=-S.scrollTop;return Pt(L||E).direction==="rtl"&&(A+=St(E.clientWidth,L?L.clientWidth:0)-T),{width:T,height:j,x:A,y:P}}(Tt(d)))}function Ge(d,p,f,C){var _=p==="clippingParents"?function(T){var j=ne(Qt(T)),A=["absolute","fixed"].indexOf(Pt(T).position)>=0&&vt(T)?Xt(T):T;return ct(A)?j.filter(function(P){return ct(P)&&It(P,A)&&it(P)!=="body"}):[]}(d):[].concat(p),E=[].concat(_,[f]),S=E[0],L=E.reduce(function(T,j){var A=Fe(d,j,C);return T.top=St(A.top,T.top),T.right=jt(A.right,T.right),T.bottom=jt(A.bottom,T.bottom),T.left=St(A.left,T.left),T},Fe(d,S,C));return L.width=L.right-L.left,L.height=L.bottom-L.top,L.x=L.left,L.y=L.top,L}function oe(d){var p,f=d.reference,C=d.element,_=d.placement,E=_?ht(_):null,S=_?le(_):null,L=f.x+f.width/2-C.width/2,T=f.y+f.height/2-C.height/2;switch(E){case x:p={x:L,y:f.y-C.height};break;case v:p={x:L,y:f.y+f.height};break;case k:p={x:f.x+f.width,y:T};break;case h:p={x:f.x-C.width,y:T};break;default:p={x:f.x,y:f.y}}var j=E?te(E):null;if(j!=null){var A=j==="y"?"height":"width";switch(S){case o:p[j]=p[j]-(f[A]/2-C[A]/2);break;case t:p[j]=p[j]+(f[A]/2-C[A]/2)}}return p}function ie(d,p){p===void 0&&(p={});var f=p,C=f.placement,_=C===void 0?d.placement:C,E=f.strategy,S=E===void 0?d.strategy:E,L=f.boundary,T=L===void 0?e:L,j=f.rootBoundary,A=j===void 0?n:j,P=f.elementContext,z=P===void 0?i:P,$=f.altBoundary,Z=$!==void 0&&$,H=f.padding,W=H===void 0?0:H,Q=Te(typeof W!="number"?W:Oe(W,a)),K=z===i?s:i,N=d.rects.popper,M=d.elements[Z?K:z],D=Ge(ct(M)?M:M.contextElement||Tt(d.elements.popper),T,A,S),V=qt(d.elements.reference),F=oe({reference:V,element:N,strategy:"absolute",placement:_}),U=Ce(Object.assign({},N,F)),X=z===i?U:V,et={top:D.top-X.top+Q.top,bottom:X.bottom-D.bottom+Q.bottom,left:D.left-X.left+Q.left,right:X.right-D.right+Q.right},rt=d.modifiersData.offset;if(z===i&&rt){var dt=rt[_];Object.keys(et).forEach(function(ft){var yt=[k,v].indexOf(ft)>=0?1:-1,ot=[x,v].indexOf(ft)>=0?"y":"x";et[ft]+=dt[ot]*yt})}return et}var je={name:"flip",enabled:!0,phase:"main",fn:function(d){var p=d.state,f=d.options,C=d.name;if(!p.modifiersData[C]._skip){for(var _=f.mainAxis,E=_===void 0||_,S=f.altAxis,L=S===void 0||S,T=f.fallbackPlacements,j=f.padding,A=f.boundary,P=f.rootBoundary,z=f.altBoundary,$=f.flipVariations,Z=$===void 0||$,H=f.allowedAutoPlacements,W=p.options.placement,Q=ht(W),K=T||(Q===W||!Z?[be(W)]:function(pt){if(ht(pt)===c)return[];var kt=be(pt);return[we(pt),kt,we(kt)]}(W)),N=[W].concat(K).reduce(function(pt,kt){return pt.concat(ht(kt)===c?function(Bt,bt){bt===void 0&&(bt={});var At=bt,se=At.placement,Rt=At.boundary,Ut=At.rootBoundary,ge=At.padding,Yt=At.flipVariations,Jt=At.allowedAutoPlacements,re=Jt===void 0?l:Jt,Kt=le(se),Ft=Kt?Yt?r:r.filter(function(_t){return le(_t)===Kt}):a,Nt=Ft.filter(function(_t){return re.indexOf(_t)>=0});Nt.length===0&&(Nt=Ft);var Lt=Nt.reduce(function(_t,Mt){return _t[Mt]=ie(Bt,{placement:Mt,boundary:Rt,rootBoundary:Ut,padding:ge})[ht(Mt)],_t},{});return Object.keys(Lt).sort(function(_t,Mt){return Lt[_t]-Lt[Mt]})}(p,{placement:kt,boundary:A,rootBoundary:P,padding:j,flipVariations:Z,allowedAutoPlacements:H}):kt)},[]),M=p.rects.reference,D=p.rects.popper,V=new Map,F=!0,U=N[0],X=0;X<N.length;X++){var et=N[X],rt=ht(et),dt=le(et)===o,ft=[x,v].indexOf(rt)>=0,yt=ft?"width":"height",ot=ie(p,{placement:et,boundary:A,rootBoundary:P,altBoundary:z,padding:j}),ut=ft?dt?k:h:dt?v:x;M[yt]>D[yt]&&(ut=be(ut));var Ot=be(ut),Vt=[];if(E&&Vt.push(ot[rt]<=0),L&&Vt.push(ot[ut]<=0,ot[Ot]<=0),Vt.every(function(pt){return pt})){U=et,F=!1;break}V.set(et,Vt)}if(F)for(var Wt=function(pt){var kt=N.find(function(Bt){var bt=V.get(Bt);if(bt)return bt.slice(0,pt).every(function(At){return At})});if(kt)return U=kt,"break"},Ct=Z?3:1;Ct>0&&Wt(Ct)!=="break";Ct--);p.placement!==U&&(p.modifiersData[C]._skip=!0,p.placement=U,p.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Pe(d,p,f){return f===void 0&&(f={x:0,y:0}),{top:d.top-p.height-f.y,right:d.right-p.width+f.x,bottom:d.bottom-p.height+f.y,left:d.left-p.width-f.x}}function Be(d){return[x,k,v,h].some(function(p){return d[p]>=0})}var Me={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(d){var p=d.state,f=d.name,C=p.rects.reference,_=p.rects.popper,E=p.modifiersData.preventOverflow,S=ie(p,{elementContext:"reference"}),L=ie(p,{altBoundary:!0}),T=Pe(S,C),j=Pe(L,_,E),A=Be(T),P=Be(j);p.modifiersData[f]={referenceClippingOffsets:T,popperEscapeOffsets:j,isReferenceHidden:A,hasPopperEscaped:P},p.attributes.popper=Object.assign({},p.attributes.popper,{"data-popper-reference-hidden":A,"data-popper-escaped":P})}},ke={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(d){var p=d.state,f=d.options,C=d.name,_=f.offset,E=_===void 0?[0,0]:_,S=l.reduce(function(A,P){return A[P]=function(z,$,Z){var H=ht(z),W=[h,x].indexOf(H)>=0?-1:1,Q=typeof Z=="function"?Z(Object.assign({},$,{placement:z})):Z,K=Q[0],N=Q[1];return K=K||0,N=(N||0)*W,[h,k].indexOf(H)>=0?{x:N,y:K}:{x:K,y:N}}(P,p.rects,E),A},{}),L=S[p.placement],T=L.x,j=L.y;p.modifiersData.popperOffsets!=null&&(p.modifiersData.popperOffsets.x+=T,p.modifiersData.popperOffsets.y+=j),p.modifiersData[C]=S}},_e={name:"popperOffsets",enabled:!0,phase:"read",fn:function(d){var p=d.state,f=d.name;p.modifiersData[f]=oe({reference:p.rects.reference,element:p.rects.popper,strategy:"absolute",placement:p.placement})},data:{}},Ze={name:"preventOverflow",enabled:!0,phase:"main",fn:function(d){var p=d.state,f=d.options,C=d.name,_=f.mainAxis,E=_===void 0||_,S=f.altAxis,L=S!==void 0&&S,T=f.boundary,j=f.rootBoundary,A=f.altBoundary,P=f.padding,z=f.tether,$=z===void 0||z,Z=f.tetherOffset,H=Z===void 0?0:Z,W=ie(p,{boundary:T,rootBoundary:j,padding:P,altBoundary:A}),Q=ht(p.placement),K=le(p.placement),N=!K,M=te(Q),D=M==="x"?"y":"x",V=p.modifiersData.popperOffsets,F=p.rects.reference,U=p.rects.popper,X=typeof H=="function"?H(Object.assign({},p.rects,{placement:p.placement})):H,et=typeof X=="number"?{mainAxis:X,altAxis:X}:Object.assign({mainAxis:0,altAxis:0},X),rt=p.modifiersData.offset?p.modifiersData.offset[p.placement]:null,dt={x:0,y:0};if(V){if(E){var ft,yt=M==="y"?x:h,ot=M==="y"?v:k,ut=M==="y"?"height":"width",Ot=V[M],Vt=Ot+W[yt],Wt=Ot-W[ot],Ct=$?-U[ut]/2:0,pt=K===o?F[ut]:U[ut],kt=K===o?-U[ut]:-F[ut],Bt=p.elements.arrow,bt=$&&Bt?Zt(Bt):{width:0,height:0},At=p.modifiersData["arrow#persistent"]?p.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},se=At[yt],Rt=At[ot],Ut=ae(0,F[ut],bt[ut]),ge=N?F[ut]/2-Ct-Ut-se-et.mainAxis:pt-Ut-se-et.mainAxis,Yt=N?-F[ut]/2+Ct+Ut+Rt+et.mainAxis:kt+Ut+Rt+et.mainAxis,Jt=p.elements.arrow&&Xt(p.elements.arrow),re=Jt?M==="y"?Jt.clientTop||0:Jt.clientLeft||0:0,Kt=(ft=rt==null?void 0:rt[M])!=null?ft:0,Ft=Ot+Yt-Kt,Nt=ae($?jt(Vt,Ot+ge-Kt-re):Vt,Ot,$?St(Wt,Ft):Wt);V[M]=Nt,dt[M]=Nt-Ot}if(L){var Lt,_t=M==="x"?x:h,Mt=M==="x"?v:k,zt=V[D],me=D==="y"?"height":"width",qe=zt+W[_t],Le=zt-W[Mt],Se=[x,h].indexOf(Q)!==-1,He=(Lt=rt==null?void 0:rt[D])!=null?Lt:0,Ne=Se?qe:zt-F[me]-U[me]-He+et.altAxis,Ve=Se?zt+F[me]+U[me]-He-et.altAxis:Le,Ye=$&&Se?function(tn,ze,Ie){var rn=ae(tn,ze,Ie);return rn>Ie?Ie:rn}(Ne,zt,Ve):ae($?Ne:qe,zt,$?Ve:Le);V[D]=Ye,dt[D]=Ye-zt}p.modifiersData[C]=dt}},requiresIfExists:["offset"]};function Ke(d,p,f){f===void 0&&(f=!1);var C,_,E=vt(p),S=vt(p)&&function(P){var z=P.getBoundingClientRect(),$=Dt(z.width)/P.offsetWidth||1,Z=Dt(z.height)/P.offsetHeight||1;return $!==1||Z!==1}(p),L=Tt(p),T=qt(d,S,f),j={scrollLeft:0,scrollTop:0},A={x:0,y:0};return(E||!E&&!f)&&((it(p)!=="body"||xe(L))&&(j=(C=p)!==lt(C)&&vt(C)?{scrollLeft:(_=C).scrollLeft,scrollTop:_.scrollTop}:pe(C)),vt(p)?((A=qt(p,!0)).x+=p.clientLeft,A.y+=p.clientTop):L&&(A.x=he(L))),{x:T.left+j.scrollLeft-A.x,y:T.top+j.scrollTop-A.y,width:T.width,height:T.height}}function Ue(d){var p=new Map,f=new Set,C=[];function _(E){f.add(E.name),[].concat(E.requires||[],E.requiresIfExists||[]).forEach(function(S){if(!f.has(S)){var L=p.get(S);L&&_(L)}}),C.push(E)}return d.forEach(function(E){p.set(E.name,E)}),d.forEach(function(E){f.has(E.name)||_(E)}),C}var De={placement:"bottom",modifiers:[],strategy:"absolute"};function fe(){for(var d=arguments.length,p=new Array(d),f=0;f<d;f++)p[f]=arguments[f];return!p.some(function(C){return!(C&&typeof C.getBoundingClientRect=="function")})}function Ee(d){d===void 0&&(d={});var p=d,f=p.defaultModifiers,C=f===void 0?[]:f,_=p.defaultOptions,E=_===void 0?De:_;return function(S,L,T){T===void 0&&(T=E);var j,A,P={placement:"bottom",orderedModifiers:[],options:Object.assign({},De,E),modifiersData:{},elements:{reference:S,popper:L},attributes:{},styles:{}},z=[],$=!1,Z={state:P,setOptions:function(W){var Q=typeof W=="function"?W(P.options):W;H(),P.options=Object.assign({},E,P.options,Q),P.scrollParents={reference:ct(S)?ne(S):S.contextElement?ne(S.contextElement):[],popper:ne(L)};var K=function(N){var M=Ue(N);return mt.reduce(function(D,V){return D.concat(M.filter(function(F){return F.phase===V}))},[])}(function(N){var M=N.reduce(function(D,V){var F=D[V.name];return D[V.name]=F?Object.assign({},F,V,{options:Object.assign({},F.options,V.options),data:Object.assign({},F.data,V.data)}):V,D},{});return Object.keys(M).map(function(D){return M[D]})}([].concat(C,P.options.modifiers)));return P.orderedModifiers=K.filter(function(N){return N.enabled}),P.orderedModifiers.forEach(function(N){var M=N.name,D=N.options,V=D===void 0?{}:D,F=N.effect;if(typeof F=="function"){var U=F({state:P,name:M,instance:Z,options:V}),X=function(){};z.push(U||X)}}),Z.update()},forceUpdate:function(){if(!$){var W=P.elements,Q=W.reference,K=W.popper;if(fe(Q,K)){P.rects={reference:Ke(Q,Xt(K),P.options.strategy==="fixed"),popper:Zt(K)},P.reset=!1,P.placement=P.options.placement,P.orderedModifiers.forEach(function(X){return P.modifiersData[X.name]=Object.assign({},X.data)});for(var N=0;N<P.orderedModifiers.length;N++)if(P.reset!==!0){var M=P.orderedModifiers[N],D=M.fn,V=M.options,F=V===void 0?{}:V,U=M.name;typeof D=="function"&&(P=D({state:P,options:F,name:U,instance:Z})||P)}else P.reset=!1,N=-1}}},update:(j=function(){return new Promise(function(W){Z.forceUpdate(),W(P)})},function(){return A||(A=new Promise(function(W){Promise.resolve().then(function(){A=void 0,W(j())})})),A}),destroy:function(){H(),$=!0}};if(!fe(S,L))return Z;function H(){z.forEach(function(W){return W()}),z=[]}return Z.setOptions(T).then(function(W){!$&&T.onFirstUpdate&&T.onFirstUpdate(W)}),Z}}var Qe=Ee(),Xe=Ee({defaultModifiers:[Ae,_e,ce,xt,ke,je,Ze,ee,Me]}),w=Ee({defaultModifiers:[Ae,_e,ce,xt]})},902:function(b,y){var g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var c,a=1,o=arguments.length;a<o;a++)for(var t in c=arguments[a])Object.prototype.hasOwnProperty.call(c,t)&&(h[t]=c[t]);return h},g.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0}),y.initAccordions=void 0;var x={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},v=function(){function h(c,a){c===void 0&&(c=[]),a===void 0&&(a=x),this._items=c,this._options=g(g({},x),a),this._init()}return h.prototype._init=function(){var c=this;this._items.length&&this._items.map(function(a){a.active&&c.open(a.id),a.triggerEl.addEventListener("click",function(){c.toggle(a.id)})})},h.prototype.getItem=function(c){return this._items.filter(function(a){return a.id===c})[0]},h.prototype.open=function(c){var a,o,t=this,e=this.getItem(c);this._options.alwaysOpen||this._items.map(function(n){var i,s;n!==e&&((i=n.triggerEl.classList).remove.apply(i,t._options.activeClasses.split(" ")),(s=n.triggerEl.classList).add.apply(s,t._options.inactiveClasses.split(" ")),n.targetEl.classList.add("hidden"),n.triggerEl.setAttribute("aria-expanded","false"),n.active=!1,n.iconEl&&n.iconEl.classList.remove("rotate-180"))}),(a=e.triggerEl.classList).add.apply(a,this._options.activeClasses.split(" ")),(o=e.triggerEl.classList).remove.apply(o,this._options.inactiveClasses.split(" ")),e.triggerEl.setAttribute("aria-expanded","true"),e.targetEl.classList.remove("hidden"),e.active=!0,e.iconEl&&e.iconEl.classList.add("rotate-180"),this._options.onOpen(this,e)},h.prototype.toggle=function(c){var a=this.getItem(c);a.active?this.close(c):this.open(c),this._options.onToggle(this,a)},h.prototype.close=function(c){var a,o,t=this.getItem(c);(a=t.triggerEl.classList).remove.apply(a,this._options.activeClasses.split(" ")),(o=t.triggerEl.classList).add.apply(o,this._options.inactiveClasses.split(" ")),t.targetEl.classList.add("hidden"),t.triggerEl.setAttribute("aria-expanded","false"),t.active=!1,t.iconEl&&t.iconEl.classList.remove("rotate-180"),this._options.onClose(this,t)},h}();function k(){document.querySelectorAll("[data-accordion]").forEach(function(h){var c=h.getAttribute("data-accordion"),a=h.getAttribute("data-active-classes"),o=h.getAttribute("data-inactive-classes"),t=[];h.querySelectorAll("[data-accordion-target]").forEach(function(e){if(e.closest("[data-accordion]")===h){var n={id:e.getAttribute("data-accordion-target"),triggerEl:e,targetEl:document.querySelector(e.getAttribute("data-accordion-target")),iconEl:e.querySelector("[data-accordion-icon]"),active:e.getAttribute("aria-expanded")==="true"};t.push(n)}}),new v(t,{alwaysOpen:c==="open",activeClasses:a||x.activeClasses,inactiveClasses:o||x.inactiveClasses})})}y.initAccordions=k,typeof window<"u"&&(window.Accordion=v,window.initAccordions=k),y.default=v},33:function(b,y){var g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var c,a=1,o=arguments.length;a<o;a++)for(var t in c=arguments[a])Object.prototype.hasOwnProperty.call(c,t)&&(h[t]=c[t]);return h},g.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0}),y.initCarousels=void 0;var x={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},v=function(){function h(c,a){c===void 0&&(c=[]),a===void 0&&(a=x),this._items=c,this._options=g(g(g({},x),a),{indicators:g(g({},x.indicators),a.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return h.prototype._init=function(){var c=this;this._items.map(function(a){a.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(a,o){a.el.addEventListener("click",function(){c.slideTo(o)})})},h.prototype.getItem=function(c){return this._items[c]},h.prototype.slideTo=function(c){var a=this._items[c],o={left:a.position===0?this._items[this._items.length-1]:this._items[a.position-1],middle:a,right:a.position===this._items.length-1?this._items[0]:this._items[a.position+1]};this._rotate(o),this._setActiveItem(a),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},h.prototype.next=function(){var c=this._getActiveItem(),a=null;a=c.position===this._items.length-1?this._items[0]:this._items[c.position+1],this.slideTo(a.position),this._options.onNext(this)},h.prototype.prev=function(){var c=this._getActiveItem(),a=null;a=c.position===0?this._items[this._items.length-1]:this._items[c.position-1],this.slideTo(a.position),this._options.onPrev(this)},h.prototype._rotate=function(c){this._items.map(function(a){a.el.classList.add("hidden")}),c.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),c.left.el.classList.add("-translate-x-full","z-10"),c.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),c.middle.el.classList.add("translate-x-0","z-20"),c.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),c.right.el.classList.add("translate-x-full","z-10")},h.prototype.cycle=function(){var c=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){c.next()},this._intervalDuration))},h.prototype.pause=function(){clearInterval(this._intervalInstance)},h.prototype._getActiveItem=function(){return this._activeItem},h.prototype._setActiveItem=function(c){var a,o,t=this;this._activeItem=c;var e=c.position;this._indicators.length&&(this._indicators.map(function(n){var i,s;n.el.setAttribute("aria-current","false"),(i=n.el.classList).remove.apply(i,t._options.indicators.activeClasses.split(" ")),(s=n.el.classList).add.apply(s,t._options.indicators.inactiveClasses.split(" "))}),(a=this._indicators[e].el.classList).add.apply(a,this._options.indicators.activeClasses.split(" ")),(o=this._indicators[e].el.classList).remove.apply(o,this._options.indicators.inactiveClasses.split(" ")),this._indicators[e].el.setAttribute("aria-current","true"))},h}();function k(){document.querySelectorAll("[data-carousel]").forEach(function(h){var c=h.getAttribute("data-carousel-interval"),a=h.getAttribute("data-carousel")==="slide",o=[],t=0;h.querySelectorAll("[data-carousel-item]").length&&Array.from(h.querySelectorAll("[data-carousel-item]")).map(function(r,l){o.push({position:l,el:r}),r.getAttribute("data-carousel-item")==="active"&&(t=l)});var e=[];h.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(h.querySelectorAll("[data-carousel-slide-to]")).map(function(r){e.push({position:parseInt(r.getAttribute("data-carousel-slide-to")),el:r})});var n=new v(o,{defaultPosition:t,indicators:{items:e},interval:c||x.interval});a&&n.cycle();var i=h.querySelector("[data-carousel-next]"),s=h.querySelector("[data-carousel-prev]");i&&i.addEventListener("click",function(){n.next()}),s&&s.addEventListener("click",function(){n.prev()})})}y.initCarousels=k,typeof window<"u"&&(window.Carousel=v,window.initCarousels=k),y.default=v},922:function(b,y){var g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var c,a=1,o=arguments.length;a<o;a++)for(var t in c=arguments[a])Object.prototype.hasOwnProperty.call(c,t)&&(h[t]=c[t]);return h},g.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0}),y.initCollapses=void 0;var x={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},v=function(){function h(c,a,o){c===void 0&&(c=null),a===void 0&&(a=null),o===void 0&&(o=x),this._targetEl=c,this._triggerEl=a,this._options=g(g({},x),o),this._visible=!1,this._init()}return h.prototype._init=function(){var c=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){c.toggle()}))},h.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},h.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},h.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},h}();function k(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(h){var c=h.getAttribute("data-collapse-toggle"),a=document.getElementById(c);a?new v(a,h):console.error('The target element with id "'.concat(c,'" does not exist. Please check the data-collapse-toggle attribute.'))})}y.initCollapses=k,typeof window<"u"&&(window.Collapse=v,window.initCollapses=k),y.default=v},556:function(b,y){var g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var c,a=1,o=arguments.length;a<o;a++)for(var t in c=arguments[a])Object.prototype.hasOwnProperty.call(c,t)&&(h[t]=c[t]);return h},g.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0}),y.initDials=void 0;var x={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},v=function(){function h(c,a,o,t){c===void 0&&(c=null),a===void 0&&(a=null),o===void 0&&(o=null),t===void 0&&(t=x),this._parentEl=c,this._triggerEl=a,this._targetEl=o,this._options=g(g({},x),t),this._visible=!1,this._init()}return h.prototype._init=function(){var c=this;if(this._triggerEl){var a=this._getTriggerEventTypes(this._options.triggerType);a.showEvents.forEach(function(o){c._triggerEl.addEventListener(o,function(){c.show()}),c._targetEl.addEventListener(o,function(){c.show()})}),a.hideEvents.forEach(function(o){c._parentEl.addEventListener(o,function(){c._parentEl.matches(":hover")||c.hide()})})}},h.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},h.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},h.prototype.toggle=function(){this._visible?this.hide():this.show()},h.prototype.isHidden=function(){return!this._visible},h.prototype.isVisible=function(){return this._visible},h.prototype._getTriggerEventTypes=function(c){switch(c){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]}}},h}();function k(){document.querySelectorAll("[data-dial-init]").forEach(function(h){var c=h.querySelector("[data-dial-toggle]");if(c){var a=c.getAttribute("data-dial-toggle"),o=document.getElementById(a);if(o){var t=c.getAttribute("data-dial-trigger");new v(h,c,o,{triggerType:t||x.triggerType})}else console.error("Dial with id ".concat(a," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(h.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}y.initDials=k,typeof window<"u"&&(window.Dial=v,window.initDials=k),y.default=v},791:function(b,y){var g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var c,a=1,o=arguments.length;a<o;a++)for(var t in c=arguments[a])Object.prototype.hasOwnProperty.call(c,t)&&(h[t]=c[t]);return h},g.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0}),y.initDismisses=void 0;var x={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},v=function(){function h(c,a,o){c===void 0&&(c=null),a===void 0&&(a=null),o===void 0&&(o=x),this._targetEl=c,this._triggerEl=a,this._options=g(g({},x),o),this._init()}return h.prototype._init=function(){var c=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){c.hide()})},h.prototype.hide=function(){var c=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){c._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},h}();function k(){document.querySelectorAll("[data-dismiss-target]").forEach(function(h){var c=h.getAttribute("data-dismiss-target"),a=document.querySelector(c);a?new v(a,h):console.error('The dismiss element with id "'.concat(c,'" does not exist. Please check the data-dismiss-target attribute.'))})}y.initDismisses=k,typeof window<"u"&&(window.Dismiss=v,window.initDismisses=k),y.default=v},340:function(b,y){var g=this&&this.__assign||function(){return g=Object.assign||function(c){for(var a,o=1,t=arguments.length;o<t;o++)for(var e in a=arguments[o])Object.prototype.hasOwnProperty.call(a,e)&&(c[e]=a[e]);return c},g.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0}),y.initDrawers=void 0;var x={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},v=function(){function c(a,o){a===void 0&&(a=null),o===void 0&&(o=x),this._targetEl=a,this._options=g(g({},x),o),this._visible=!1,this._init()}return c.prototype._init=function(){var a=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(o){a._targetEl.classList.add(o)}),document.addEventListener("keydown",function(o){o.key==="Escape"&&a.isVisible()&&a.hide()})},c.prototype.hide=function(){var a=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(o){a._targetEl.classList.remove(o)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(o){a._targetEl.classList.add(o)})):(this._getPlacementClasses(this._options.placement).active.map(function(o){a._targetEl.classList.remove(o)}),this._getPlacementClasses(this._options.placement).inactive.map(function(o){a._targetEl.classList.add(o)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},c.prototype.show=function(){var a=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(o){a._targetEl.classList.add(o)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(o){a._targetEl.classList.remove(o)})):(this._getPlacementClasses(this._options.placement).active.map(function(o){a._targetEl.classList.add(o)}),this._getPlacementClasses(this._options.placement).inactive.map(function(o){a._targetEl.classList.remove(o)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},c.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},c.prototype._createBackdrop=function(){var a,o=this;if(!this._visible){var t=document.createElement("div");t.setAttribute("drawer-backdrop",""),(a=t.classList).add.apply(a,this._options.backdropClasses.split(" ")),document.querySelector("body").append(t),t.addEventListener("click",function(){o.hide()})}},c.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},c.prototype._getPlacementClasses=function(a){switch(a){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]}}},c.prototype.isHidden=function(){return!this._visible},c.prototype.isVisible=function(){return this._visible},c}(),k=function(c,a){if(a.some(function(o){return o.id===c}))return a.find(function(o){return o.id===c})};function h(){var c=[];document.querySelectorAll("[data-drawer-target]").forEach(function(a){var o=a.getAttribute("data-drawer-target"),t=document.getElementById(o);if(t){var e=a.getAttribute("data-drawer-placement"),n=a.getAttribute("data-drawer-body-scrolling"),i=a.getAttribute("data-drawer-backdrop"),s=a.getAttribute("data-drawer-edge"),r=a.getAttribute("data-drawer-edge-offset");k(o,c)||c.push({id:o,object:new v(t,{placement:e||x.placement,bodyScrolling:n?n==="true":x.bodyScrolling,backdrop:i?i==="true":x.backdrop,edge:s?s==="true":x.edge,edgeOffset:r||x.edgeOffset})})}else console.error("Drawer with id ".concat(o," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(a){var o=a.getAttribute("data-drawer-toggle");if(document.getElementById(o)){var t=k(o,c);t?a.addEventListener("click",function(){t.object.toggle()}):console.error("Drawer with id ".concat(o," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(o," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(a){var o=a.getAttribute("data-drawer-dismiss")?a.getAttribute("data-drawer-dismiss"):a.getAttribute("data-drawer-hide");if(document.getElementById(o)){var t=k(o,c);t?a.addEventListener("click",function(){t.object.hide()}):console.error("Drawer with id ".concat(o," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(o," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(a){var o=a.getAttribute("data-drawer-show");if(document.getElementById(o)){var t=k(o,c);t?a.addEventListener("click",function(){t.object.show()}):console.error("Drawer with id ".concat(o," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(o," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}y.initDrawers=h,typeof window<"u"&&(window.Drawer=v,window.initDrawers=h),y.default=v},316:function(b,y,g){var x=this&&this.__assign||function(){return x=Object.assign||function(o){for(var t,e=1,n=arguments.length;e<n;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);return o},x.apply(this,arguments)},v=this&&this.__spreadArray||function(o,t,e){if(e||arguments.length===2)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return o.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(y,"__esModule",{value:!0}),y.initDropdowns=void 0;var k=g(853),h={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,ignoreClickOutsideClass:!1,onShow:function(){},onHide:function(){},onToggle:function(){}},c=function(){function o(t,e,n){t===void 0&&(t=null),e===void 0&&(e=null),n===void 0&&(n=h),this._targetEl=t,this._triggerEl=e,this._options=x(x({},h),n),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return o.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},o.prototype._setupEventListeners=function(){var t=this,e=this._getTriggerEvents();this._options.triggerType==="click"&&e.showEvents.forEach(function(n){t._triggerEl.addEventListener(n,function(){t.toggle()})}),this._options.triggerType==="hover"&&(e.showEvents.forEach(function(n){t._triggerEl.addEventListener(n,function(){n==="click"?t.toggle():setTimeout(function(){t.show()},t._options.delay)}),t._targetEl.addEventListener(n,function(){t.show()})}),e.hideEvents.forEach(function(n){t._triggerEl.addEventListener(n,function(){setTimeout(function(){t._targetEl.matches(":hover")||t.hide()},t._options.delay)}),t._targetEl.addEventListener(n,function(){setTimeout(function(){t._triggerEl.matches(":hover")||t.hide()},t._options.delay)})}))},o.prototype._createPopperInstance=function(){return(0,k.createPopper)(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},o.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(e){t._handleClickOutside(e,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},o.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},o.prototype._handleClickOutside=function(t,e){var n=t.target,i=this._options.ignoreClickOutsideClass,s=!1;i&&document.querySelectorAll(".".concat(i)).forEach(function(r){r.contains(n)&&(s=!0)}),n===e||e.contains(n)||this._triggerEl.contains(n)||s||!this.isVisible()||this.hide()},o.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":default:return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]}}},o.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},o.prototype.isVisible=function(){return this._visible},o.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(t){return x(x({},t),{modifiers:v(v([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},o.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(t){return x(x({},t),{modifiers:v(v([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},o}();function a(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(o){var t=o.getAttribute("data-dropdown-toggle"),e=document.getElementById(t);if(e){var n=o.getAttribute("data-dropdown-placement"),i=o.getAttribute("data-dropdown-offset-skidding"),s=o.getAttribute("data-dropdown-offset-distance"),r=o.getAttribute("data-dropdown-trigger"),l=o.getAttribute("data-dropdown-delay"),u=o.getAttribute("data-dropdown-ignore-click-outside-class");new c(e,o,{placement:n||h.placement,triggerType:r||h.triggerType,offsetSkidding:i?parseInt(i):h.offsetSkidding,offsetDistance:s?parseInt(s):h.offsetDistance,delay:l?parseInt(l):h.delay,ignoreClickOutsideClass:u||h.ignoreClickOutsideClass})}else console.error('The dropdown element with id "'.concat(t,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}y.initDropdowns=a,typeof window<"u"&&(window.Dropdown=c,window.initDropdowns=a),y.default=c},311:function(b,y,g){Object.defineProperty(y,"__esModule",{value:!0}),y.initFlowbite=void 0;var x=g(902),v=g(33),k=g(922),h=g(556),c=g(791),a=g(340),o=g(316),t=g(16),e=g(903),n=g(247),i=g(671);function s(){(0,x.initAccordions)(),(0,k.initCollapses)(),(0,v.initCarousels)(),(0,c.initDismisses)(),(0,o.initDropdowns)(),(0,t.initModals)(),(0,a.initDrawers)(),(0,n.initTabs)(),(0,i.initTooltips)(),(0,e.initPopovers)(),(0,h.initDials)()}y.initFlowbite=s,typeof window<"u"&&(window.initFlowbite=s)},16:function(b,y){var g=this&&this.__assign||function(){return g=Object.assign||function(c){for(var a,o=1,t=arguments.length;o<t;o++)for(var e in a=arguments[o])Object.prototype.hasOwnProperty.call(a,e)&&(c[e]=a[e]);return c},g.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0}),y.initModals=void 0;var x={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},v=function(){function c(a,o){a===void 0&&(a=null),o===void 0&&(o=x),this._targetEl=a,this._options=g(g({},x),o),this._isHidden=!0,this._backdropEl=null,this._init()}return c.prototype._init=function(){var a=this;this._targetEl&&this._getPlacementClasses().map(function(o){a._targetEl.classList.add(o)})},c.prototype._createBackdrop=function(){var a;if(this._isHidden){var o=document.createElement("div");o.setAttribute("modal-backdrop",""),(a=o.classList).add.apply(a,this._options.backdropClasses.split(" ")),document.querySelector("body").append(o),this._backdropEl=o}},c.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},c.prototype._setupModalCloseEventListeners=function(){var a=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(o){a._handleOutsideClick(o.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(o){o.key==="Escape"&&a.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},c.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},c.prototype._handleOutsideClick=function(a){(a===this._targetEl||a===this._backdropEl&&this.isVisible())&&this.hide()},c.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":default:return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"]}},c.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},c.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},c.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},c.prototype.isVisible=function(){return!this._isHidden},c.prototype.isHidden=function(){return this._isHidden},c}(),k=function(c,a){return a.some(function(o){return o.id===c})?a.find(function(o){return o.id===c}):null};function h(){var c=[];document.querySelectorAll("[data-modal-target]").forEach(function(a){var o=a.getAttribute("data-modal-target"),t=document.getElementById(o);if(t){var e=t.getAttribute("data-modal-placement"),n=t.getAttribute("data-modal-backdrop");k(o,c)||c.push({id:o,object:new v(t,{placement:e||x.placement,backdrop:n||x.backdrop})})}else console.error("Modal with id ".concat(o," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(a){var o=a.getAttribute("data-modal-toggle"),t=document.getElementById(o);if(t){var e=t.getAttribute("data-modal-placement"),n=t.getAttribute("data-modal-backdrop"),i=k(o,c);i||(i={id:o,object:new v(t,{placement:e||x.placement,backdrop:n||x.backdrop})},c.push(i)),a.addEventListener("click",function(){i.object.toggle()})}else console.error("Modal with id ".concat(o," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(a){var o=a.getAttribute("data-modal-show");if(document.getElementById(o)){var t=k(o,c);t?a.addEventListener("click",function(){t.object.isHidden&&t.object.show()}):console.error("Modal with id ".concat(o," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(o," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(a){var o=a.getAttribute("data-modal-hide");if(document.getElementById(o)){var t=k(o,c);t?a.addEventListener("click",function(){t.object.isVisible&&t.object.hide()}):console.error("Modal with id ".concat(o," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(o," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}y.initModals=h,typeof window<"u"&&(window.Modal=v,window.initModals=h),y.default=v},903:function(b,y,g){var x=this&&this.__assign||function(){return x=Object.assign||function(o){for(var t,e=1,n=arguments.length;e<n;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);return o},x.apply(this,arguments)},v=this&&this.__spreadArray||function(o,t,e){if(e||arguments.length===2)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return o.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(y,"__esModule",{value:!0}),y.initPopovers=void 0;var k=g(853),h={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},c=function(){function o(t,e,n){t===void 0&&(t=null),e===void 0&&(e=null),n===void 0&&(n=h),this._targetEl=t,this._triggerEl=e,this._options=x(x({},h),n),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return o.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},o.prototype._setupEventListeners=function(){var t=this,e=this._getTriggerEvents();e.showEvents.forEach(function(n){t._triggerEl.addEventListener(n,function(){t.show()}),t._targetEl.addEventListener(n,function(){t.show()})}),e.hideEvents.forEach(function(n){t._triggerEl.addEventListener(n,function(){setTimeout(function(){t._targetEl.matches(":hover")||t.hide()},100)}),t._targetEl.addEventListener(n,function(){setTimeout(function(){t._triggerEl.matches(":hover")||t.hide()},100)})})},o.prototype._createPopperInstance=function(){return(0,k.createPopper)(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},o.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]}}},o.prototype._setupKeydownListener=function(){var t=this;this._keydownEventListener=function(e){e.key==="Escape"&&t.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},o.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},o.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(e){t._handleClickOutside(e,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},o.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},o.prototype._handleClickOutside=function(t,e){var n=t.target;n===e||e.contains(n)||this._triggerEl.contains(n)||!this.isVisible()||this.hide()},o.prototype.isVisible=function(){return this._visible},o.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},o.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(t){return x(x({},t),{modifiers:v(v([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},o.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(t){return x(x({},t),{modifiers:v(v([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},o}();function a(){document.querySelectorAll("[data-popover-target]").forEach(function(o){var t=o.getAttribute("data-popover-target"),e=document.getElementById(t);if(e){var n=o.getAttribute("data-popover-trigger"),i=o.getAttribute("data-popover-placement"),s=o.getAttribute("data-popover-offset");new c(e,o,{placement:i||h.placement,offset:s?parseInt(s):h.offset,triggerType:n||h.triggerType})}else console.error('The popover element with id "'.concat(t,'" does not exist. Please check the data-popover-target attribute.'))})}y.initPopovers=a,typeof window<"u"&&(window.Popover=c,window.initPopovers=a),y.default=c},247:function(b,y){var g=this&&this.__assign||function(){return g=Object.assign||function(h){for(var c,a=1,o=arguments.length;a<o;a++)for(var t in c=arguments[a])Object.prototype.hasOwnProperty.call(c,t)&&(h[t]=c[t]);return h},g.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0}),y.initTabs=void 0;var x={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},v=function(){function h(c,a){c===void 0&&(c=[]),a===void 0&&(a=x),this._items=c,this._activeTab=a?this.getTab(a.defaultTabId):null,this._options=g(g({},x),a),this._init()}return h.prototype._init=function(){var c=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(a){a.triggerEl.addEventListener("click",function(){c.show(a.id)})}))},h.prototype.getActiveTab=function(){return this._activeTab},h.prototype._setActiveTab=function(c){this._activeTab=c},h.prototype.getTab=function(c){return this._items.filter(function(a){return a.id===c})[0]},h.prototype.show=function(c,a){var o,t,e=this;a===void 0&&(a=!1);var n=this.getTab(c);(n!==this._activeTab||a)&&(this._items.map(function(i){var s,r;i!==n&&((s=i.triggerEl.classList).remove.apply(s,e._options.activeClasses.split(" ")),(r=i.triggerEl.classList).add.apply(r,e._options.inactiveClasses.split(" ")),i.targetEl.classList.add("hidden"),i.triggerEl.setAttribute("aria-selected","false"))}),(o=n.triggerEl.classList).add.apply(o,this._options.activeClasses.split(" ")),(t=n.triggerEl.classList).remove.apply(t,this._options.inactiveClasses.split(" ")),n.triggerEl.setAttribute("aria-selected","true"),n.targetEl.classList.remove("hidden"),this._setActiveTab(n),this._options.onShow(this,n))},h}();function k(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(h){var c=[],a=null;h.querySelectorAll('[role="tab"]').forEach(function(o){var t=o.getAttribute("aria-selected")==="true",e={id:o.getAttribute("data-tabs-target"),triggerEl:o,targetEl:document.querySelector(o.getAttribute("data-tabs-target"))};c.push(e),t&&(a=e.id)}),new v(c,{defaultTabId:a})})}y.initTabs=k,typeof window<"u"&&(window.Tabs=v,window.initTabs=k),y.default=v},671:function(b,y,g){var x=this&&this.__assign||function(){return x=Object.assign||function(o){for(var t,e=1,n=arguments.length;e<n;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);return o},x.apply(this,arguments)},v=this&&this.__spreadArray||function(o,t,e){if(e||arguments.length===2)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return o.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(y,"__esModule",{value:!0}),y.initTooltips=void 0;var k=g(853),h={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},c=function(){function o(t,e,n){t===void 0&&(t=null),e===void 0&&(e=null),n===void 0&&(n=h),this._targetEl=t,this._triggerEl=e,this._options=x(x({},h),n),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return o.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},o.prototype._setupEventListeners=function(){var t=this,e=this._getTriggerEvents();e.showEvents.forEach(function(n){t._triggerEl.addEventListener(n,function(){t.show()})}),e.hideEvents.forEach(function(n){t._triggerEl.addEventListener(n,function(){t.hide()})})},o.prototype._createPopperInstance=function(){return(0,k.createPopper)(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},o.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]}}},o.prototype._setupKeydownListener=function(){var t=this;this._keydownEventListener=function(e){e.key==="Escape"&&t.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},o.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},o.prototype._setupClickOutsideListener=function(){var t=this;this._clickOutsideEventListener=function(e){t._handleClickOutside(e,t._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},o.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},o.prototype._handleClickOutside=function(t,e){var n=t.target;n===e||e.contains(n)||this._triggerEl.contains(n)||!this.isVisible()||this.hide()},o.prototype.isVisible=function(){return this._visible},o.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},o.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(t){return x(x({},t),{modifiers:v(v([],t.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},o.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(t){return x(x({},t),{modifiers:v(v([],t.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},o}();function a(){document.querySelectorAll("[data-tooltip-target]").forEach(function(o){var t=o.getAttribute("data-tooltip-target"),e=document.getElementById(t);if(e){var n=o.getAttribute("data-tooltip-trigger"),i=o.getAttribute("data-tooltip-placement");new c(e,o,{placement:i||h.placement,triggerType:n||h.triggerType})}else console.error('The tooltip element with id "'.concat(t,'" does not exist. Please check the data-tooltip-target attribute.'))})}y.initTooltips=a,typeof window<"u"&&(window.Tooltip=c,window.initTooltips=a),y.default=c},947:function(b,y){Object.defineProperty(y,"__esModule",{value:!0});var g=function(){function x(v,k){k===void 0&&(k=[]),this._eventType=v,this._eventFunctions=k}return x.prototype.init=function(){var v=this;this._eventFunctions.forEach(function(k){typeof window<"u"&&window.addEventListener(v._eventType,k)})},x}();y.default=g}},gt={};function R(b){var y=gt[b];if(y!==void 0)return y.exports;var g=gt[b]={exports:{}};return Et[b].call(g.exports,g,g.exports,R),g.exports}R.d=function(b,y){for(var g in y)R.o(y,g)&&!R.o(b,g)&&Object.defineProperty(b,g,{enumerable:!0,get:y[g]})},R.o=function(b,y){return Object.prototype.hasOwnProperty.call(b,y)},R.r=function(b){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})};var Y={};return function(){var b=Y;Object.defineProperty(b,"__esModule",{value:!0}),R(647);var y=R(902),g=R(33),x=R(922),v=R(556),k=R(791),h=R(340),c=R(316),a=R(16),o=R(903),t=R(247),e=R(671);R(311);var n=R(947);new n.default("load",[y.initAccordions,x.initCollapses,g.initCarousels,k.initDismisses,c.initDropdowns,a.initModals,h.initDrawers,t.initTabs,e.initTooltips,o.initPopovers,v.initDials]).init(),b.default={Accordion:y.default,Carousel:g.default,Collapse:x.default,Dial:v.default,Drawer:h.default,Dismiss:k.default,Dropdown:c.default,Modal:a.default,Popover:o.default,Tabs:t.default,Tooltip:e.default,Events:n.default}}(),Y}()})})(Cn);const un=`<!-- carousel -->
<div class="parent relative md:min-h-screen min-h-[80vh] w-fit box-border">
  <!-- Slider -->
  <div
    id="default-carousel"
    class="relative w-full h-full swiper-container"
    data-carousel="slide"
  >
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden h-full">
      <!-- Item 1 -->
      <div
        class="duration-700 ease-in-out swiper-slide h-full flex justify-center items-center md:justify-start"
        data-carousel-item
      >
        <img
          src="/site/devikot_site4.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-cover brightness-50"
          alt="..."
        />
        <div
          class="hidden md:block h-full relative w-[70%] bg-gradient-to-r from-shade z-10"
        ></div>
        <div
          class="z-30 md:ml-16 md:absolute text-white flex flex-col gap-y-6 items-center md:items-start"
        >
          <h1 class="md:text-[5rem] text-5xl font-semibold">SY401S</h1>
          <p class="md:text-3xl font-semibold">
            Fully automatic with mobile app
          </p>
          <button
            class="w-fit bg-white text-black rounded-full px-6 py-[6px] font-semibold"
          >
            <a href="#">Explore</a>
          </button>
        </div>
      </div>
      <!-- Item 2 -->
      <div
        class="duration-700 ease-in-out swiper-slide h-full flex justify-center items-center md:justify-start"
        data-carousel-item
      >
        <img
          src="devikot_site_3.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-cover brightness-50"
          alt="..."
        />
        <div
          class="hidden md:block h-full relative w-[70%] bg-gradient-to-r from-shade z-10"
        ></div>
        <div
          class="absolute z-50 md:ml-16 text-white flex flex-col gap-y-6 items-center md:items-start"
        >
          <h1 class="md:text-[5rem] text-5xl font-semibold">SY401A</h1>
          <p class="md:text-3xl font-semibold">
            Fully automatic with dashboard
          </p>
          <button
            class="w-fit bg-white text-black rounded-full px-6 py-[6px] font-semibold"
          >
            <a href="#">Explore</a>
          </button>
        </div>
      </div>
      <!-- Item 3 -->
      <div
        class="duration-700 ease-in-out swiper-slide h-full flex justify-center items-center md:justify-start"
        data-carousel-item
      >
        <img
          src="/site/devikot_site5.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-cover brightness-50"
          alt="..."
        />
        <div
          class="hidden md:block h-full relative w-[70%] bg-gradient-to-r from-shade z-10"
        ></div>
        <div
          class="absolute z-50 md:ml-16 text-white flex flex-col gap-y-6 items-center md:items-start"
        >
          <h1 class="md:text-[5rem] text-5xl font-semibold">SY401S</h1>
          <p class="md:text-3xl font-semibold">
            Fully automatic with mobile app
          </p>
          <button
            class="w-fit bg-white text-black rounded-full px-6 py-[6px] font-semibold"
          >
            <a href="#">Explore</a>
          </button>
        </div>
      </div>
      <!-- Item 4 -->
      <div
        class="duration-700 ease-in-out swiper-slide h-full flex justify-center items-center md:justify-start"
        data-carousel-item
      >
        <img
          src="/sudo-robot.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-cover brightness-50"
          alt="..."
        />
        <div
          class="hidden md:block h-full relative w-[70%] bg-gradient-to-r from-shade z-10"
        ></div>
        <div
          class="absolute z-50 md:ml-16 text-white flex flex-col gap-y-6 items-center md:items-start"
        >
          <h1 class="md:text-[5rem] text-5xl font-semibold">SY401A</h1>
          <p class="md:text-3xl font-semibold">
            Fully automatic with dashboard
          </p>
          <button
            class="w-fit bg-white text-black rounded-full px-6 py-[6px] font-semibold"
          >
            <a href="#">Explore</a>
          </button>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse swiper-pagination"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none swiper-button-next"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none swiper-button-prev"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>

  <!-- End Slider -->
</div>
<span>
  <div
    class="max-w-6xl px-2 py-6 sm:px-4 lg:px-4 lg:py-4 mx-auto fixed right-0 z-50 bottom-0 mb-[3rem]"
  >
    <!-- Grid -->
    <div class="flex flex-col gap-5 justify-end items-end">
      <!-- Card -->
      <a
        class="group flex flex-col bg-white border overflow-hidden shadow-lg rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-800 bg-opacity-90 hover:bg-opacity-100"
        onclick="onNavigate('/#contact'); return false;"
      >
        <div class="p-4 md:p-5">
          <div class="flex items-center">
            <svg
              class="shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
              />
            </svg>

            <div class="grow ml-5 hidden group-hover:block">
              <h3
                class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-600 dark:text-gray-200"
              >
                Ask Us Anything
              </h3>
              <p class="text-sm text-gray-700">Get help from our team.</p>
            </div>
          </div>
        </div>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a
        class="group flex flex-col bg-white border shadow-md rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-800 bg-opacity-90 hover:bg-opacity-100"
        href="https://wa.me/919984045295"
        target="_blank"
      >
        <div class="p-4 md:p-5">
          <div class="flex">
            <svg
              class="mt-1 shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <div class="grow ml-5 hidden group-hover:block">
              <h3
                class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-600 dark:text-gray-200"
              >
                Book your demo
              </h3>
              <p class="text-sm text-gray-700">
                call
                <span class="text-blue-600 font-medium dark:text-blue-500">
                  +91 9984045295
                </span>
              </p>
            </div>
          </div>
        </div>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a
        class="group flex flex-col bg-white border shadow-md rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-800 bg-opacity-90 hover:bg-opacity-100"
        href="mailto:info@sudoyantra.com"
        target="_blank"
      >
        <div class="p-4 md:p-5">
          <div class="flex">
            <svg
              class="mt-1 shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"
              />
            </svg>

            <div class="grow ml-5 hidden group-hover:block">
              <h3
                class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-600 dark:text-gray-200"
              >
                Email us
              </h3>
              <p class="text-sm text-gray-700">
                <span class="text-blue-600 font-medium dark:text-blue-500"
                  >info@sudoyantra.com</span
                >
              </p>
            </div>
          </div>
        </div>
      </a>
      <!-- End Card -->
      <!-- <a
        class="group flex flex-col bg-white border shadow-md rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-800"
        href="https://www.linkedin.com/company/sudoyantra/"
        target="_blank"
      >
        <div class="p-4 md:p-5">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              class="h-5 w-5"
              fill="black"
              viewBox="0 0 256 256"
              xml:space="preserve"
            >
              <defs></defs>
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  bg-opacity: 1;
                "
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: black;
                    fill-rule: nonzero;
                    bg-opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: black;
                    fill-rule: nonzero;
                    bg-opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
            <div class="grow ml-5">
              <h3
                class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-600 dark:text-gray-200"
              >
                Linked In
              </h3>
              <p class="text-sm text-gray-700">
                <span class="text-blue-600 font-medium dark:text-blue-500"
                  >/sudoyantra</span
                >
              </p>
            </div>
          </div>
        </div>
      </a> -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- Prodcuts Section -->
  <section>
    <div class="max-w-[75rem] mx-auto">
      <h1 class="font-semibold text-4xl md:text-6xl mt-14 pl-8 text-center">
        Our Products
      </h1>
      <div class="card-container w-full">
        <!-- Pricing -->
        <div class="max-w-[85rem] px-4 py-1 sm:px-6 lg:px-8 lg:py-2 mx-auto">
          <!-- Grid -->
          <div
            class="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:items-center"
          >
            <!-- Card -->
            <div
              class="flex flex-col border border-gray-300 text-center rounded-xl p-8 dark:border-neutral-800"
            >
              <div class="hover:scale-105 duration-200 hover:duration-200">
                <img src="/product_1.jpg" alt="" />
              </div>
              <h4
                class="font-medium text-4xl text-left text-gray-800 dark:text-neutral-200"
              >
                SY401S
              </h4>
              <ul class="mt-7 space-y-2.5 text-sm">
                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    Auto / Local Control Mode
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    17.5 AH Power Supply
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    Mobile App Montioring
                  </span>
                </li>
                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    BLE / WI-FI Communication
                  </span>
                </li>
                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    Twice a Day Cleaning Frequency
                  </span>
                </li>
              </ul>

              <a
                class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-black bg-white text-black shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#contact"
              >
                Buy now
              </a>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
              class="relative flex flex-col border-2 border-gray-700 text-center shadow-xl rounded-xl p-8"
            >
              <div
                class="absolute -top-5 right-28 md:right-8 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xl uppercase font-semibold text-black bg-secondary border border-gray-300 dark:text-white"
              >
                Most popular
              </div>
              <div class="hover:scale-105 duration-200 hover:duration-200">
                <img src="/product_2.jpg" />
              </div>
              <h4
                class="font-medium text-4xl text-left text-gray-800 dark:text-neutral-200"
              >
                SY401A
              </h4>
              <ul class="mt-7 space-y-2.5 text-sm text-left">
                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    Auto / Local / Remote Control Mode
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    22 AH Power Supply
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    Dashboard / Mobile App Monitoring
                  </span>
                </li>
                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    GSM-LTE / LoRa / Modbus / BLE / WI-FI Communication
                  </span>
                </li>
                <li class="flex gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    class="text-gray-800 dark:text-neutral-400 font-semibold text-md"
                  >
                    As Per Requirement Cleaing Frequency
                  </span>
                </li>
                <!-- <li class="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400 font-semibold text-md">
                    Weather Monitor
                  </span>
                </li> -->
                <!-- <li class="flex gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400 font-semibold text-md">
                    Self Locking System
                  </span>
                </li> -->
              </ul>

              <a
                class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-transparent bg-secondary text-black focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#contact"
              >
                Buy now
              </a>
            </div>
            <!-- End Card -->
          </div>
          <!-- End Grid -->

          <!-- End Pricing -->
        </div>
      </div>

      <!-- offering products -->
      <section class="bg-white">
        <div
          class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8"
        >
          <div class="mx-auto max-w-5xl text-center">
            <h2
              class="md:text-[3.5rem] font-bold text-black md:leading-tight sm:text-4xl text-[1.5rem] leading-tight"
            >
              Solar Cleaning Robots We Offer
            </h2>

            <p class="mt-6 text-black md:leading-8 sm:text-xl">
              We also provide:
              <span class="bg-light text-black p-[1px] rounded-lg">
                Custom robot development </span
              >, where we create robots from scratch.
              <span class="bg-light text-black p-[1px] rounded-lg"
                >Advanced customization services</span
              >, where we enhance and upgrade your existing robots.
            </p>
          </div>
        </div>
        <!-- product categories -->
        <div class="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-4 mx-auto">
          <div class="relative xl:mx-auto">
            <!-- Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div>
                <!-- Card -->
                <div
                  class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]"
                >
                  <h3 class="text-2xl font-bold text-black dark:text-gray-200">
                    Automatic
                  </h3>
                  <div class="text-base text-gray-500">
                    Seamless global control and real-time monitoring of robots.
                  </div>
                  <span
                    class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-sm font-medium bg-secondary text-black py-1.5 px-3 dark:bg-gray-900"
                    >Most popular</span
                  >

                  <div class="mt-5 w-full flex items-center justify-center">
                    <!-- <span
                class="text-6xl font-bold text-gray-800 dark:text-gray-200"
                >$36</span
              >
              <span
                class="text-lg font-bold text-gray-800 dark:text-gray-200"
                >.99</span
              >
              <span class="ml-3 text-gray-500">USD / monthly</span> -->
                    <img
                      src="/header/automatic.png"
                      alt="automatic"
                      class="w-24 h-full"
                    />
                  </div>

                  <div
                    class="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0"
                  >
                    <!-- List -->
                    <ul role="list" class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          Dashboard Controlled 24/7
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          Collect data and Notify
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          All Features added
                        </span>
                      </li>
                    </ul>

                    <!-- End List -->
                  </div>

                  <div
                    class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0"
                  >
                    <!-- <div></div>

              <div class="flex justify-end">
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Contact
                </button>
              </div> -->
                  </div>
                </div>
                <!-- End Card -->
              </div>

              <div>
                <!-- Card -->
                <div
                  class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]"
                >
                  <h3 class="text-2xl font-bold text-black dark:text-gray-200">
                    Semi Automatic
                  </h3>
                  <div class="text-base text-gray-500">
                    Time based Cleaning with Mobile App for controls.
                  </div>
                  <span
                    class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-sm font-medium bg-secondary text-black py-1.5 px-3 dark:bg-gray-900"
                    >Most popular</span
                  >

                  <div class="mt-5">
                    <!-- <span
                class="text-6xl font-bold text-gray-800 dark:text-gray-200"
                >$36</span
              >
              <span
                class="text-lg font-bold text-gray-800 dark:text-gray-200"
                >.99</span
              >
              <span class="ml-3 text-gray-500">USD / monthly</span> -->
                    <img
                      src="/header/semiauto.png"
                      alt="automatic"
                      class="w-24 mx-auto h-full"
                    />
                  </div>

                  <div
                    class="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0"
                  >
                    <!-- List -->
                    <ul role="list" class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          Automatic Run on Time
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          Local Mobile App
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          Solar Charge Controller
                        </span>
                      </li>
                    </ul>

                    <!-- End List -->
                  </div>

                  <div
                    class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0"
                  >
                    <!-- <div>
                <p class="text-sm text-gray-500">Cancel anytime.</p>
                <p class="text-sm text-gray-500">No card required.</p>
              </div>

              <div class="flex justify-end">
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Start free trial
                </button>
              </div> -->
                  </div>
                </div>
                <!-- End Card -->
              </div>
              <div>
                <!-- Card -->
                <div
                  class="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700"
                >
                  <h3 class="text-2xl font-bold text-black dark:text-gray-200">
                    Manual
                  </h3>
                  <div class="text-base text-gray-500">
                    Rotary Switch and Key based System effective for small
                    plants
                  </div>

                  <div class="mt-5 w-full flex items-center justify-center">
                    <!-- <span
                class="text-6xl font-bold text-gray-800 dark:text-gray-200"
                >$18</span
              >
              <span
                class="text-lg font-bold text-gray-800 dark:text-gray-200"
                >.00</span
              > -->

                    <img
                      src="/header/manual.png"
                      alt="automatic"
                      class="w-24 h-full"
                    />
                    <!-- <span class="ml-3 text-gray-500"> / monthly</span> -->
                  </div>

                  <div
                    class="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0"
                  >
                    <!-- List -->
                    <ul role="list" class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          Button control
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          Bidirectional mode
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-blue-500"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="18"
                            height="18"
                            rx="9"
                            fill="currentColor"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span class="text-gray-800 dark:text-gray-200">
                          Solar Charge Controller
                        </span>
                      </li>
                    </ul>

                    <!-- End List -->
                  </div>

                  <div
                    class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0"
                  >
                    <!-- <div>
                <p class="text-sm text-gray-500">Cancel anytime.</p>
                <p class="text-sm text-gray-500">No card required.</p>
              </div>

              <div class="flex justify-end">
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  Start free trial
                </button>
              </div> -->
                  </div>
                </div>
                <!-- End Card -->
              </div>
            </div>

            <!-- End SVG Element -->
          </div>

          <div class="mt-7 text-center">
            <p class="text-xs text-gray-400">Terms and Condition Apply.</p>
          </div>
        </div>

        <!-- End Comparison Table -->
      </section>

      <!-- Product feaure -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-15 mx-auto">
        <h1 class="text-4xl md:text-6xl text-center font-semibold mb-16">
          Product Feature
        </h1>
        <!-- grid -->
        <div class="relative grid md:grid-cols-9 md:grid-rows-3 gap-y-6">
          <!-- card 1 -->
          <div
            class="col-span-4 flex md:items-start md:flex-row flex-col items-center justify-between gap-x-2 text-gray-900 bg-light p-4 rounded-xl"
          >
            <div>
              <div class="p-1">
                <img class="h-12 w-full" src="/feature-images/iot.png" alt="" />
              </div>
            </div>
            <div class="w-[85%] text-center md:text-left">
              <h3 class="text-2xl font-bold">IoT Sim / LoRa</h3>
              <p class="font-semibold leading-tight">
                Enabling real-time robot connectivity with seamless internet
                integration.
              </p>
            </div>
          </div>

          <!-- card2 -->
          <div
            class="hidden col-span-1 row-span-3 md:flex items-center justify-between p-5 gap-x-8"
          >
            <!-- <img class="h-full w-full object-contain" src="app-4.jpeg" alt=""> -->
          </div>

          <!-- card 3 -->
          <div
            class="col-span-4 text-gray-900 bg-light p-4 rounded-xl flex md:items-start md:flex-row flex-col items-center justify-between gap-x-2"
          >
            <div>
              <div class="p-1">
                <img
                  class="h-12 w-full"
                  src="/feature-images/dashboard.png"
                  alt=""
                />
              </div>
            </div>
            <div class="w-[85%] text-center md:text-left">
              <h3 class="text-2xl font-bold">Dashboard</h3>
              <p class="font-semibold">
                Streamlined centralized control at your fingertips.
              </p>
            </div>
          </div>

          <!-- card 4 -->
          <div
            class="col-span-4 text-gray-900 bg-light p-4 rounded-xl flex md:items-start md:flex-row flex-col items-center justify-between gap-x-2"
          >
            <div>
              <div class="p-1">
                <img
                  class="h-12 w-full"
                  src="/feature-images/ui-design.png"
                  alt=""
                />
              </div>
            </div>
            <div class="w-[85%] text-center md:text-left">
              <h3 class="text-2xl font-bold">Mobile App</h3>
              <p class="font-semibold">
                Ensures easy connectivity and efficient debugging.
              </p>
            </div>
          </div>
          <!-- card 5 -->
          <div
            class="col-span-4 text-gray-900 bg-light p-4 rounded-xl flex md:items-start md:flex-row flex-col items-center justify-between gap-x-2"
          >
            <div>
              <div class="p-1">
                <img
                  class="h-12 w-full"
                  src="/feature-images/changes.png"
                  alt=""
                />
              </div>
            </div>
            <div class="w-[85%] text-gray-900 text-center md:text-left">
              <h3 class="text-2xl font-bold">OTA Updates</h3>
              <p class="font-semibold">
                Publish updates and add features to robots effortlessly online.
              </p>
            </div>
          </div>
          <!-- card 6 -->
          <div
            class="col-span-4 text-gray-900 bg-light p-4 rounded-xl flex md:items-start md:flex-row flex-col items-center justify-between gap-x-2"
          >
            <div>
              <div class="p-1">
                <img
                  class="h-12 w-full"
                  src="/feature-images/checked.png"
                  alt=""
                />
              </div>
            </div>
            <div class="w-[85%] text-center md:text-left">
              <h3 class="text-2xl font-bold">4x Motion Drive</h3>
              <p class="font-semibold">
                Calibrated motors ensure synchronized speed for optimal
                performance.
              </p>
            </div>
          </div>
          <!-- card 7 -->
          <div
            class="col-span-4 text-gray-900 bg-light p-4 rounded-xl flex md:items-start md:flex-row flex-col items-center justify-between gap-x-2"
          >
            <div>
              <div class="p-1">
                <img
                  class="h-12 w-full"
                  src="/feature-images/high-voltage.png"
                  alt=""
                />
              </div>
            </div>
            <div class="w-[85%] text-center md:text-left">
              <h3 class="text-2xl font-bold">Notify High Voltage</h3>
              <p class="font-semibold">
                Alerts you in case of any failure or voltage issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-10 mx-auto grid md:grid-cols-2"
      >
        <!-- clients -->
        <div>
          <h1 class="text-center h-fit font-semibold text-3xl md:text-6xl">
            Our Clients
          </h1>
          <div
            class="grid place-items-center justify-items-center gap-y-5 md:mt-10 mt-4"
          >
            <img
              class="md:h-28 h-16 object-contain"
              src="/Clients/AMNS.png"
              alt=""
            />
          </div>
        </div>
        <!-- recognized by -->
        <div class="relative">
          <h1 class="text-center h-fit font-semibold text-3xl md:text-6xl">
            Recognized by
          </h1>
          <div
            class="grid place-items-center justify-items-center gap-y-5 mt-4"
          >
            <img
              class="md:min-h-full h-[8vh] md:h-[10vh] object-contain"
              src="startupindia.png"
              alt=""
            />
            <h4
              class="absolute font-semibold text-lg md:text-2xl md:top-[90%] sm:top-[105%] top-[85%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              DIPP144606
            </h4>
          </div>
        </div>
      </div>
      <!-- supported by -->
      <div
        class="relative max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-20 mx-auto"
      >
        <h1 class="text-center h-fit font-semibold text-4xl md:text-6xl">
          Supported by
        </h1>
        <div
          class="grid md:grid-cols-4 place-items-center justify-items-center gap-y-5 mt-10"
        >
          <img
            class="md:w-50 md:h-15 h-10 object-contain"
            src="/autodesk.jpg"
            alt=""
          />
          <img class="w-40 h-15 object-contain" src="./aws.png" alt="" />
          <img
            class="md:w-50 md:h-15 h-10 object-contain"
            src="./digitalocean.png"
            alt=""
          />
          <img class="w-40 h-15 object-contain" src="./zoho.png" alt="" />
        </div>
      </div>

      <!-- Glimpses -->
      <div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 class="text-4xl md:text-6xl text-center font-semibold mb-16">
          Robots Empowering the Future
        </h1>
        <!-- Image Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <!-- image1 modal -->
          <button
            type="button"
            class="group block relative overflow-hidden rounded-lg"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-scale-animation-modal"
            data-hs-overlay="#hs-scale-animation-modal"
          >
            <img
              class="w-full h-full object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
              src="/bahadurgarh_3.jpg"
              alt="Project"
            />
            <div
              class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition"
            >
              <div
                class="flex items-center gap-x-1 py-1 px-2 bg-gray-400 border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"
              >
                <svg
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css">
                      .st0 {
                        fill: #000000;
                      }
                    </style>
                    <g>
                      <path
                        class="st0"
                        d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466 c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536 c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0 S344.045,229.174,286.694,286.536z"
                      ></path>
                      <path
                        class="st0"
                        d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182 c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154 C108.227,109.193,104.125,109.695,101.911,112.531z"
                      ></path>
                      <path
                        class="st0"
                        d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033 c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964 C516.216,483.951,515.857,462.068,498.544,447.722z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="text-sm font-bold text-black">View</span>
              </div>
            </div>
          </button>
          <div
            id="hs-scale-animation-modal"
            class="hs-overlay min-h-screen w-full hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabindex="-1"
            aria-labelledby="hs-scale-animation-modal-label"
          >
            <div
              class="hs-overlay-animation-target absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-w-[50vw] box-border flex items-center justify-center"
            >
              <img
                class="rounded-lg md:object-cover min-h-[60vh] min-w-[80vw] md:max-h-[90vh] m-auto"
                src="/bahadurgarh_3.jpg"
                alt=""
              />
            </div>
          </div>

          <!-- image2 modal -->
          <button
            type="button"
            class="group block relative overflow-hidden rounded-lg"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-scale-animation-modal-2"
            data-hs-overlay="#hs-scale-animation-modal-2"
          >
            <img
              class="w-full h-full object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
              src="/bahadurgarh_robot_clear.jpg"
              alt="Project"
            />
            <div
              class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition"
            >
              <div
                class="flex items-center gap-x-1 py-1 px-2 bg-gray-400 border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"
              >
                <svg
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css">
                      .st0 {
                        fill: #000000;
                      }
                    </style>
                    <g>
                      <path
                        class="st0"
                        d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466 c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536 c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0 S344.045,229.174,286.694,286.536z"
                      ></path>
                      <path
                        class="st0"
                        d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182 c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154 C108.227,109.193,104.125,109.695,101.911,112.531z"
                      ></path>
                      <path
                        class="st0"
                        d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033 c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964 C516.216,483.951,515.857,462.068,498.544,447.722z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="text-sm font-bold text-black">View</span>
              </div>
            </div>
          </button>
          <div
            id="hs-scale-animation-modal-2"
            class="hs-overlay min-h-screen w-full hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabindex="-1"
            aria-labelledby="hs-scale-animation-modal-label"
          >
            <div
              class="hs-overlay-animation-target absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-w-[50vw] box-border flex items-center justify-center"
            >
              <img
                class="rounded-lg md:object-contain min-h-[60vh] min-w-[80vw] md:max-h-[90vh] m-auto"
                src="/bahadurgarh_robot_clear.jpg"
                alt=""
              />
            </div>
          </div>

          <!-- image3 modal -->
          <button
            type="button"
            class="group block relative overflow-hidden rounded-lg"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-scale-animation-modal-3"
            data-hs-overlay="#hs-scale-animation-modal-3"
          >
            <img
              class="w-full h-full object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
              src="/bahadurgarh_4.jpg"
              alt="Project"
            />
            <div
              class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition"
            >
              <div
                class="flex items-center gap-x-1 py-1 px-2 bg-gray-400 border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"
              >
                <svg
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css">
                      .st0 {
                        fill: #000000;
                      }
                    </style>
                    <g>
                      <path
                        class="st0"
                        d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466 c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536 c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0 S344.045,229.174,286.694,286.536z"
                      ></path>
                      <path
                        class="st0"
                        d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182 c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154 C108.227,109.193,104.125,109.695,101.911,112.531z"
                      ></path>
                      <path
                        class="st0"
                        d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033 c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964 C516.216,483.951,515.857,462.068,498.544,447.722z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="text-sm font-bold text-black">View</span>
              </div>
            </div>
          </button>
          <div
            id="hs-scale-animation-modal-3"
            class="hs-overlay min-h-screen w-full hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabindex="-1"
            aria-labelledby="hs-scale-animation-modal-label"
          >
            <div
              class="hs-overlay-animation-target absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-w-[50vw] box-border flex items-center justify-center"
            >
              <img
                class="md:object-contain min-h-[60vh] min-w-[80vw] md:max-h-[90vh] rounded-lg m-auto"
                src="/bahadurgarh_4.jpg"
                alt=""
              />
            </div>
          </div>

          <!-- image4 modal -->
          <button
            type="button"
            class="group block relative overflow-hidden rounded-lg"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-scale-animation-modal-4"
            data-hs-overlay="#hs-scale-animation-modal-4"
          >
            <img
              class="w-full h-full object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
              src="/bahadurgarh_5.jpg"
              alt="Project"
            />
            <div
              class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition"
            >
              <div
                class="flex items-center gap-x-1 py-1 px-2 bg-gray-400 border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"
              >
                <svg
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css">
                      .st0 {
                        fill: #000000;
                      }
                    </style>
                    <g>
                      <path
                        class="st0"
                        d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466 c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536 c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0 S344.045,229.174,286.694,286.536z"
                      ></path>
                      <path
                        class="st0"
                        d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182 c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154 C108.227,109.193,104.125,109.695,101.911,112.531z"
                      ></path>
                      <path
                        class="st0"
                        d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033 c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964 C516.216,483.951,515.857,462.068,498.544,447.722z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="text-sm font-bold text-black">View</span>
              </div>
            </div>
          </button>
          <div
            id="hs-scale-animation-modal-4"
            class="hs-overlay min-h-screen w-full hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabindex="-1"
            aria-labelledby="hs-scale-animation-modal-label"
          >
            <div
              class="hs-overlay-animation-target absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-w-[50vw] box-border flex items-center justify-center"
            >
              <img
                class="rounded-lg md:object-contain min-h-[60vh] min-w-[80vw] md:max-h-[90vh] m-auto"
                src="/bahadurgarh_5.jpg"
                alt=""
              />
            </div>
          </div>

          <!-- image5 modal -->
          <button
            type="button"
            class="group block relative overflow-hidden rounded-lg"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-scale-animation-modal-5"
            data-hs-overlay="#hs-scale-animation-modal-5"
          >
            <img
              class="w-full h-full object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
              src="/devikot_site_2.jpg"
              alt="Project"
            />
            <div
              class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition"
            >
              <div
                class="flex items-center gap-x-1 py-1 px-2 bg-gray-400 border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"
              >
                <svg
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css">
                      .st0 {
                        fill: #000000;
                      }
                    </style>
                    <g>
                      <path
                        class="st0"
                        d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466 c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536 c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0 S344.045,229.174,286.694,286.536z"
                      ></path>
                      <path
                        class="st0"
                        d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182 c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154 C108.227,109.193,104.125,109.695,101.911,112.531z"
                      ></path>
                      <path
                        class="st0"
                        d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033 c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964 C516.216,483.951,515.857,462.068,498.544,447.722z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="text-sm font-bold text-black">View</span>
              </div>
            </div>
          </button>
          <div
            id="hs-scale-animation-modal-5"
            class="hs-overlay min-h-screen w-full hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabindex="-1"
            aria-labelledby="hs-scale-animation-modal-label"
          >
            <div
              class="hs-overlay-animation-target absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-w-[50vw] box-border flex items-center justify-center"
            >
              <img
                class="rounded-lg md:object-cover min-h-[60vh] min-w-[80vw] md:max-h-[90vh] m-auto"
                src="/devikot_site_2.jpg"
                alt=""
              />
            </div>
          </div>

          <!-- image6 modal -->
          <button
            type="button"
            class="group block relative overflow-hidden rounded-lg"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-scale-animation-modal-6"
            data-hs-overlay="#hs-scale-animation-modal-6"
          >
            <img
              class="w-full h-full object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
              src="/devikot_site_5.jpg"
              alt="Project"
            />
            <div
              class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition"
            >
              <div
                class="flex items-center gap-x-1 py-1 px-2 bg-gray-400 border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"
              >
                <svg
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css">
                      .st0 {
                        fill: #000000;
                      }
                    </style>
                    <g>
                      <path
                        class="st0"
                        d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466 c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536 c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0 S344.045,229.174,286.694,286.536z"
                      ></path>
                      <path
                        class="st0"
                        d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182 c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154 C108.227,109.193,104.125,109.695,101.911,112.531z"
                      ></path>
                      <path
                        class="st0"
                        d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033 c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964 C516.216,483.951,515.857,462.068,498.544,447.722z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span class="text-sm font-bold text-black">View</span>
              </div>
            </div>
          </button>
          <div
            id="hs-scale-animation-modal-6"
            class="hs-overlay min-h-screen w-full hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabindex="-1"
            aria-labelledby="hs-scale-animation-modal-label"
          >
            <div
              class="hs-overlay-animation-target absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-w-[50vw] box-border flex items-center justify-center"
            >
              <img
                class="rounded-lg md:object-cover min-h-[60vh] min-w-[80vw] md:max-h-[90vh] m-auto"
                src="/devikot_site_5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- End Image Grid -->
      </div>

      <section class="section h-full">
        <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div
            class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
          >
            <!-- Title -->
            <div class="mx-auto text-black mb-8 lg:mb-14 text-center">
              <h2 class="text-3xl md:text-6xl font-bold dark:text-gray-200">
                Feasiability Of Our Product
              </h2>
              <p class="mt-3 text-lg dark:text-gray-200">
                Easy to install, operate and maintain, and can work in any
                weather condition.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-x-5">
              <img class="rounded-lg" src="/site/devikot_site3.jpg" alt="" />
              <img class="rounded-lg" src="/roof-top.jpg" alt="" />
            </div>
          </div>
        </div>
        <!-- <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div> -->
      </section>
    </div>
  </section></span
>
`,kn=`<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
      Products
    </h2>
  </div>
  <div class="flex flex-col justify-start">
    <div class="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-4 mx-auto">
      <div class="relative xl:w-10/12 xl:mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div>
            <div
              class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]"
            >
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                Automatic
              </h3>
              <div class="text-sm text-gray-500">
                Seamless global control and real-time monitoring of robots.
              </div>
              <span
                class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900"
                >Most popular</span
              >

              <div class="mt-5 w-full flex items-center justify-center">
                <!-- <span
                    class="text-6xl font-bold text-gray-800 dark:text-gray-200"
                    >$36</span
                  >
                  <span
                    class="text-lg font-bold text-gray-800 dark:text-gray-200"
                    >.99</span
                  >
                  <span class="ml-3 text-gray-500">USD / monthly</span> -->
                <img
                  src="/header/blob.png"
                  alt="automatic"
                  class="w-32 h-full"
                />
              </div>

              <div
                class="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0"
              >
                <!-- List -->
                <ul role="list" class="space-y-2 text-sm sm:text-base">
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      Dashboard Controlled 24/7
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      Collect data and Notify
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      All Features added
                    </span>
                  </li>
                </ul>

                <!-- End List -->
              </div>

              <div
                class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0"
              >
                <!-- <div></div>

                  <div class="flex justify-end">
                    <button
                      type="button"
                      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Contact
                    </button>
                  </div> -->
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div>
            <!-- Card -->
            <div
              class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]"
            >
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                Semi Automatic
              </h3>
              <div class="text-sm text-gray-500">
                Time based Cleaning with Mobile App for controls.
              </div>
              <span
                class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900"
                >Most popular</span
              >

              <div class="mt-5">
                <!-- <span
                    class="text-6xl font-bold text-gray-800 dark:text-gray-200"
                    >$36</span
                  >
                  <span
                    class="text-lg font-bold text-gray-800 dark:text-gray-200"
                    >.99</span
                  >
                  <span class="ml-3 text-gray-500">USD / monthly</span> -->
                <img
                  src="/header/time.webp"
                  alt="automatic"
                  class="w-30 h-full"
                />
              </div>

              <div
                class="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0"
              >
                <!-- List -->
                <ul role="list" class="space-y-2 text-sm sm:text-base">
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      Automatic Run on Time
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      Local Mobile App
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      Solar Charge Controller
                    </span>
                  </li>
                </ul>

                <!-- End List -->
              </div>

              <div
                class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0"
              >
                <!-- <div>
                    <p class="text-sm text-gray-500">Cancel anytime.</p>
                    <p class="text-sm text-gray-500">No card required.</p>
                  </div>

                  <div class="flex justify-end">
                    <button
                      type="button"
                      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Start free trial
                    </button>
                  </div> -->
              </div>
            </div>
            <!-- End Card -->
          </div>
          <div>
            <!-- Card -->
            <div
              class="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700"
            >
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                Manual
              </h3>
              <div class="text-sm text-gray-500">
                Rotary Switch and Key based System effective for small plants
              </div>

              <div class="mt-5 w-full flex items-center justify-center">
                <!-- <span
                    class="text-6xl font-bold text-gray-800 dark:text-gray-200"
                    >$18</span
                  >
                  <span
                    class="text-lg font-bold text-gray-800 dark:text-gray-200"
                    >.00</span
                  > -->

                <img
                  src="/header/start.png"
                  alt="automatic"
                  class="w-32 h-full"
                />
                <!-- <span class="ml-3 text-gray-500"> / monthly</span> -->
              </div>

              <div
                class="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0"
              >
                <!-- List -->
                <ul role="list" class="space-y-2 text-sm sm:text-base">
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      Button control
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      Bidirectional mode
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-800 dark:text-gray-200">
                      Solar Charge Controller
                    </span>
                  </li>
                </ul>

                <!-- End List -->
              </div>

              <div
                class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0"
              >
                <!-- <div>
                    <p class="text-sm text-gray-500">Cancel anytime.</p>
                    <p class="text-sm text-gray-500">No card required.</p>
                  </div>

                  <div class="flex justify-end">
                    <button
                      type="button"
                      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      Start free trial
                    </button>
                  </div> -->
              </div>
            </div>
            <!-- End Card -->
          </div>
        </div>

        <div
          class="hidden md:block absolute top-0 right-0 translate-y-16 translate-x-16"
        >
          <svg
            class="w-16 h-auto text-orange-500"
            width="121"
            height="135"
            viewBox="0 0 121 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
              stroke="currentColor"
              stroke-width="10"
              stroke-linecap="round"
            />
            <path
              d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
              stroke="currentColor"
              stroke-width="10"
              stroke-linecap="round"
            />
            <path
              d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
              stroke="currentColor"
              stroke-width="10"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div
          class="hidden md:block absolute bottom-0 left-0 translate-y-16 -translate-x-16"
        >
          <svg
            class="w-56 h-auto text-cyan-500"
            width="347"
            height="188"
            viewBox="0 0 347 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
              stroke="currentColor"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <!-- End SVG Element -->
      </div>

      <div class="mt-7 text-center">
        <p class="text-xs text-gray-400">Terms and Condition Apply.</p>
      </div>
    </div>
  </div>
</div>

<div
  class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white rounded-md shadow-md"
>
  <nav
    class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4"
    aria-label="Tabs"
    role="tablist"
  >
    <button
      type="button"
      class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
      id="tabs-with-card-item-1"
      data-hs-tab="#tabs-with-card-1"
      aria-controls="tabs-with-card-1"
      role="tab"
    >
      <span class="md:flex">
        <svg
          class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
          />
          <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
        <span class="md:grow md:ml-5">
          <span
            class="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
          >
            Dashboard 24/7
          </span>
          <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200"
            >Enables remote monitoring, scheduling and optimizing cleaning
            operations.</span
          >
        </span>
      </span>
    </button>

    <button
      type="button"
      class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
      id="tabs-with-card-item-2"
      data-hs-tab="#tabs-with-card-2"
      aria-controls="tabs-with-card-2"
      role="tab"
    >
      <span class="md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>

        <span class="md:grow md:ml-5">
          <span
            class="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
            >Admin App
          </span>
          <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200"
            >Allows for control, monitoring, and troubleshooting, enhancing
            operational efficiency.</span
          >
        </span>
      </span>
    </button>

    <button
      type="button"
      class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
      id="tabs-with-card-item-3"
      data-hs-tab="#tabs-with-card-3"
      aria-controls="tabs-with-card-3"
      role="tab"
    >
      <span class="md:flex">
        <svg
          class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"
          />
        </svg>
        <span class="md:grow md:ml-5">
          <span
            class="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
            >Inbuilt Solar Charge Controller</span
          >
          <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200"
            >maximizes energy efficiency and battery longevity while simplifying
            system integration.
          </span>
        </span>
      </span>
    </button>
  </nav>

  <div class="mt-12 md:mt-16">
    <div
      id="tabs-with-card-1"
      role="tabpanel"
      aria-labelledby="tabs-with-card-item-1"
    >
      <div class="max-w-[1140px] lg:pb-32 relative">
        <figure
          class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block"
        >
          <div
            class="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]"
          >
            <img
              class="max-w-full h-auto rounded-[1.25rem]"
              src="/app-1.jpeg"
            />
          </div>
        </figure>

        <figure
          class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]"
        >
          <div
            class="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
              <span
                class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></span>
              <span
                class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></span>
              <span
                class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></span>
            </div>
            <div
              class="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200"
            >
              console.sudoyantra.com
            </div>
          </div>

          <div class="bg-gray-800 rounded-b-lg">
            <img
              class="max-w-full h-auto rounded-b-lg"
              src="/app-4.jpeg"
              alt="Image Description"
            />
          </div>
        </figure>
        <!-- End Browser Device -->
      </div>
      <!-- End Devices -->
    </div>

    <div
      id="tabs-with-card-2"
      class="hidden"
      role="tabpanel"
      aria-labelledby="tabs-with-card-item-2"
    >
      <!-- Devices -->
      <div class="max-w-[1140px] lg:pb-32 relative">
        <!-- Mobile Device -->
        <figure
          class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block"
        >
          <div
            class="p-1.5 bg-gray-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]"
          >
            <img
              class="max-w-full h-auto rounded-[1.25rem]"
              src="/application/robot1.jpeg"
              alt="Image Description"
            />
          </div>
        </figure>
        <!-- End Mobile Device -->

        <!-- Browser Device -->
        <figure
          class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]"
        >
          <div
            class="relative flex items-center max-w-[50rem] bg-gray-800 border-b border-gray-700 rounded-t-lg py-2 px-24"
          >
            <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
              <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
              <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
              <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
            </div>
            <div
              class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-200 rounded-sm sm:text-[.5rem]"
            >
              app.sudoyantra.com
            </div>
          </div>

          <div class="bg-gray-800 rounded-b-lg">
            <img
              class="max-w-full h-auto rounded-b-lg"
              src="/application/mobile.jpg"
              alt="Image Description"
            />
          </div>
        </figure>
        <!-- End Browser Device -->
      </div>
      <!-- End Devices -->
    </div>

    <div
      id="tabs-with-card-3"
      class="hidden"
      role="tabpanel"
      aria-labelledby="tabs-with-card-item-3"
    >
      <!-- Devices -->
      <div class="max-w-[1140px] lg:pb-32 relative">
        <!-- Mobile Device -->
        <figure
          class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block"
        >
          <div
            class="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]"
          >
            <img
              class="max-w-full h-auto rounded-[1.25rem]"
              src="/devikot_site_5.jpg"
              alt="Image Description"
            />
          </div>
        </figure>
        <!-- End Mobile Device -->

        <!-- Browser Device -->
        <figure
          class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]"
        >
          <div
            class="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
              <span
                class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></span>
              <span
                class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></span>
              <span
                class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></span>
            </div>
            <div
              class="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200"
            >
              shop.sudoyantra.com
            </div>
          </div>

          <div class="bg-gray-800 rounded-b-lg flex p-2 gap-4">
            <img
              class="max-w-full h-auto rounded-lg w-auto max-h-96 aspect-auto"
              src="/charge-controller/charge-controller-working.jpeg"
              alt="Image Description"
            />
            <img
              class="max-w-full h-auto rounded-lg w-auto max-h-96 aspect-auto"
              src="/charge-controller/charge-controller-copy.jpeg"
              alt="Image Description"
            />
          </div>
        </figure>
        <!-- End Browser Device -->
      </div>
      <!-- End Devices -->
    </div>
  </div>
  <!-- End Tab Content -->
</div>
<!-- End Features -->
<!-- Features -->
`,_n=`<section>

  <div class="relative mx-auto max-w-screen-xl px-4 py-8">
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
        <img
          alt="Charge Controller"
          src="/charge-controller/charge-controller.jpeg"
          class="aspect-square w-full rounded-xl object-cover"
        />

        <div class="grid grid-cols-2 gap-4 lg:mt-4">
          <img
            alt="Charge Controller Working"
            src="/charge-controller/charge-controller-working.jpeg"
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Charge Controller Complete Circuit"
            src="/charge-controller/charge-controller-complete.webp"
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Charge Controller Top View"
            src="/charge-controller/charge-controller-top.png"
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Charge Controller Side View"
            src="/charge-controller/charge-controller-side.png"
            class="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      </div>

      <div class="sticky top-0">
        <strong
          class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Pre Order
        </strong>

        <div class="mt-8 flex justify-between">
          <div class="max-w-[35ch] space-y-2">
            <h1 class="text-xl font-bold sm:text-2xl" id="heading">Solar Battery Charger</h1>

            <p class="text-sm">For Charging Battery with Solar Panel</p>

            <!-- For Rating Stars -->
            <!-- <div class="-ms-0.5 flex">
              <svg
                class="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="h-5 w-5 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div> -->
          </div>

          <!-- <p class="text-lg font-bold">$119.99</p> -->
        </div>

        <div class="mt-4">
          <div class="prose max-w-none">
            <p>
              MPPT controller acts as the brain of the PV system, constantly
              monitoring and optimizing the power output of the solar panels. It
              plays a critical role in maximizing the energy harvest, improving
              system efficiency, and extending the battery life in solar PV
              installations.
            </p>
          </div>

          <button class="mt-2 text-sm font-medium underline">Read More</button>
        </div>

        <form class="mt-8">
          <fieldset>
            <legend class="mb-1 text-sm font-medium">Type</legend>

            <div class="flex flex-wrap gap-1">
              <label for="color_tt" class="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  id="color_tt"
                  class="peer sr-only"
                />

                <span
                  class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  600 W
                </span>
              </label>

              <label for="color_fr" class="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  id="color_fr"
                  class="peer sr-only"
                />

                <span
                  class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  1.0 kW
                </span>
              </label>
            </div>
          </fieldset>

          <fieldset class="mt-4">
            <legend class="mb-1 text-sm font-medium">Connectivity</legend>

            <div class="flex flex-wrap gap-1">
              <label for="size_xs" class="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id="size_xs"
                  class="peer sr-only"
                />

                <span
                  class="group inline-flex h-8 p-2 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  Manual
                </span>
              </label>

              <label for="size_s" class="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id="size_s"
                  class="peer sr-only"
                />

                <span
                  class="group inline-flex h-8 p-2 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  Automatic
                </span>
              </label>

              <label for="size_m" class="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id="size_m"
                  class="peer sr-only"
                />

                <span
                  class="group inline-flex h-8 p-2 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  MQTT
                </span>
              </label>
            </div>
          </fieldset>

          <div class="mt-8 flex gap-4">
            <div>
              

            <button
              type="submit"
              class="block  bg-primary-600 rounded hover:rounded-lg animate-bounce px-5 py-3 text-xs font-medium text-white hover:bg-primary-700"
            >
              Get in Touch
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</section>
`,En=`<div class="min-w-full">
  <div class="md:h-[50vh]">
    <img
      class="w-full h-[100%] object-cover object-bottom"
      src="/about_us_hero_image.jpeg"
    />
  </div>
  <!-- Grid -->
  <div class="">
    <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="mt-5 lg:mt-8 flex flex-col items-start gap-2 sm:gap-3">
        <div class="w-full sm:w-auto lg:text-xl">
          <p>
            Welcome to <b>Sudoyantra!</b> We're dedicated to crafting innovative
            technologies and solutions that safeguard and optimize energy
            consumption in various industries and utility sectors. Our mission
            is to enhance electrical power's safety, reliability, efficiency,
            and sustainability.<br />
            <br />From the beginning of the design process, we collaborate
            closely with our valued customers to comprehend their unique
            obstacles. In doing so, we customize our product development and
            service offerings to boost operational efficiency.
          </p>
        </div>

        <!-- <a
              class="w-full sm:w-auto inline-flex justify-start items-start gap-x-3 bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#contact"
            >
              Request demo
            </a> -->
      </div>

      <!-- Brands -->
      <div class="mt-6 lg:mt-12">
        <span
          class="text-xs font-bold text-gray-800 uppercase dark:text-gray-200"
          >Key Features:</span
        >

        <div class="flex mt-4 gap-8 flex-wrap px-4">
          <p class="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            AI
          </p>
          <p class="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
            Data-driven
          </p>
          <p class="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            Autonomous
          </p>
          <p class="flex gap-x-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
            Predictive Maintenance
          </p>

          <p class="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>

            Scada and Internet Connectivity
          </p>
          <p class="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>

            Auto alarm system
          </p>
          <p class="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            Work in Rain and Dust
          </p>
        </div>
      </div>
      <!-- End Brands -->
    </div>
    <!-- End Col -->

    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- Mission section -->
<div
  class="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 bg-slate-100 bg-bottom !bg-opacity-10"
>
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <!-- Announcement Banner -->
    <div class="flex justify-center">
      <a
        class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
        href="#contact"
      >
        Where Technology Meets Sustainability
        <span
          class="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400"
        >
          <svg
            class="w-2.5 h-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </a>
    </div>
    <!-- End Announcement Banner -->

    <!-- Title -->
    <div class="mt-5 max-w-2xl text-center mx-auto">
      <h1
        class="block font-bold text-gray-700 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200"
      >
        Our
        <span
          class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
          >Mission</span
        >
      </h1>
    </div>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        <!-- Card -->
        <a class="group rounded-xl overflow-hidden" href="#blog">
          <div class="sm:flex">
            <div
              class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44"
            >
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="/site/devikot_site3.jpg"
                alt="Image Description"
              />
            </div>

            <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3
                class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white"
              >
                Elevating Solar Power
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                We specialize in making photovoltaic energy systems work and
                their specialized maintenance services.
              </p>
              <p
                class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              >
                Read more
                <svg
                  class="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a class="group rounded-xl overflow-hidden" href="#blog">
          <div class="sm:flex">
            <div
              class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44"
            >
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="/header/four-principles-of-organisational-excellence-which-every-small-business-should-know.webp"
                alt="Image Description"
              />
            </div>

            <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3
                class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white"
              >
                Prioritizing Excellence
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Our primary focus is leading the market through exceptional
                quality.
              </p>
              <p
                class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              >
                Read more
                <svg
                  class="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a class="group rounded-xl overflow-hidden" href="#blog">
          <div class="sm:flex">
            <div
              class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44"
            >
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="/header/new-ideas.jpg"
                alt="Image new ideads"
              />
            </div>

            <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3
                class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white"
              >
                Embracing New Ideas
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                We believe in exploring innovative concepts and achieving
                excellence.
              </p>
              <p
                class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              >
                Read more
                <svg
                  class="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a class="group rounded-xl overflow-hidden" href="#blog">
          <div class="sm:flex">
            <div
              class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44"
            >
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="/header/green-future.jpeg"
                alt="Image Description"
              />
            </div>

            <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3
                class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white"
              >
                Working Together for a Green Future
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Our vision is to create a world where everyone benefits from
                clean, carbon-free energy.
              </p>
              <p
                class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              >
                Read more
                <svg
                  class="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </a>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Title -->
  </div>
</div>

<!-- Hero -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-2 sm:items-center gap-8">
    <div class="sm:order-2">
      <div class="relative pt-[50%] sm:pt-[100%] rounded-lg">
        <img
          class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
          src="/site/devikot_site4.jpg"
          alt="Image Description"
        />
      </div>
    </div>
    <!-- End Col -->

    <div class="sm:order-1">
      <p
        class="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
      >
        SudoYantra India
      </p>

      <h2
        class="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200"
      >
        <a
          class="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
          href="#"
        >
          Why Choose <span class="text-indigo-600">Sudoyantra?</span>
        </a>
      </h2>

      <!-- Avatar -->
      <div class="mt-6 sm:mt-10 flex justify-center w-full flex-col gap-2">
        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Real-Time Monitoring Dashboard
          </p>
          <p class="text-xs text-gray-500">
            Real-time monitoring and a responsive 24/7 maintenance portal ensure
            uninterrupted performance.
          </p>
        </div>
        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Cost-Efficient Installation
          </p>
          <p class="text-xs text-gray-500">
            Sudoyantra offers cost-effective solar panel cleaning solutions,
            maximizing your ROI.
          </p>
        </div>
        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Efficiency Maximization
          </p>
          <p class="text-xs text-gray-500">
            We optimize your panel efficiency, helping you get the most from
            your solar investment.
          </p>
        </div>
        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Eco-Friendly Cleaning & Green Commitment
          </p>
          <p class="text-xs text-gray-500">
            We address water scarcity by using minimal water in our cleaning
            process, promoting sustainability.
          </p>
        </div>
        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Tailored Solutions
          </p>
          <p class="text-xs text-gray-500">
            Our versatile cleaning options are suitable for all types of solar
            panel setups, providing flexibility.
          </p>
        </div>
        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Customer-Centric Approach
          </p>
          <p class="text-xs text-gray-500">
            We continuously improve our self-charging system based on customer
            feedback.
          </p>
        </div>
        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Long-Term Partnership
          </p>
          <p class="text-xs text-gray-500">
            Sudoyantra commits to long-term service and maintenance, ensuring
            your system's longevity.
          </p>
        </div>
        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Local Manufacturing
          </p>
          <p class="text-xs text-gray-500">
            Proudly supporting 'Make in India,' our in-house manufacturing
            guarantees top-quality products.
          </p>
        </div>
      </div>
      <!-- End Avatar -->
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Hero -->
<!-- End Icon Blocks -->
`,Ln=`<section>
  <!-- Hero -->
  <div class="overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
        <!-- Title -->
        <div class="text-center">
          <p
            class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200"
          >
            SudoYantra India
          </p>
          <h1
            class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200"
          >
            An emerging startup specializes in providing
            <span class="text-blue-500">Solar Panel Cleaner</span>
            Robots
          </h1>
        </div>
      </div>
    </div>
    <!-- Clients -->
    <div
      class="max-w-[85rem] flex flex-col items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <!-- Grid -->
      <div
        class="my-8 md:my-16 max-w-[80vw] flex flex-wrap sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20"
      >
        <img
          class="flex-shrink-0 transition hover:-translate-y-1 h-44 mx-auto sm:mx-0"
          src="/devikot_site_2.jpg"
        />
        <img
          class="flex-shrink-0 transition hover:-translate-y-1 h-44 mx-auto sm:mx-0"
          src="/site/Devikot_site1.jpg"
        />
        <img
          class="flex-shrink-0 transition hover:-translate-y-1 h-44 mx-auto sm:mx-0"
          src="/site/devikot_site3.jpg"
        />
        <img
          class="flex-shrink-0 transition hover:-translate-y-1 h-44 mx-auto sm:mx-0"
          src="/site/devikot_site2.jpg"
        />
        <img
          class="flex-shrink-0 transition hover:-translate-y-1 h-44 mx-auto sm:mx-0"
          src="/app-1.jpeg"
        />
        <img
          class="flex-shrink-0 transition hover:-translate-y-1 h-44 mx-auto sm:mx-0"
          src="/app-2.jpeg"
        />
        <img
          class="flex-shrink-0 transition hover:-translate-y-1 h-44 mx-auto sm:mx-0"
          src="/devikot_site_6.jpg"
        />
      </div>
      <!-- End Grid -->

      <!-- Grid -->
      
    </div>
    <!-- End Clients -->
  </div>
</section>
`,Sn=`<!-- Team -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->

</div>
<!-- End Team -->
`,In=`<!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
      Information Blogs
    </h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">
      Welcome to Sudoyantra Blogs! We're committed to innovative technology that
      enhances energy consumption in industries.
    </p>
  </div>
  <!-- End Title -->

  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Card -->
    <a class="group rounded-xl overflow-hidden" href="#about">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img
          class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src="/site/devikot_site5.jpg"
          alt="Image Description"
        />
        <span
          class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900"
        >
          New
        </span>
      </div>

      <div class="mt-7">
        <h3
          class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200"
        >
          About SudoYantra
        </h3>
        <p class="mt-3 text-gray-800 dark:text-gray-200">
          We're dedicated to crafting innovative technologies and solutions that
          safeguard and optimize.
        </p>
        <p
          class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium"
        >
          Read more
          <svg
            class="w-2.5 h-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group rounded-xl overflow-hidden" href="#solution">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img
          class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src="/out/adcdee4808771.png"
          alt="Image Description"
        />
      </div>

      <div class="mt-7">
        <h3
          class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200"
        >
          Solutions
        </h3>
        <p class="mt-3 text-gray-800 dark:text-gray-200">
          Why Automate Solar Cleaning? <br />
          The Importance of Automated Solar Panel Cleaning
        </p>
        <p
          class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium"
        >
          Read more
          <svg
            class="w-2.5 h-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a
      class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('/site/devikot_site2.jpg')]"
      href="#solution"
    >
      <div class="flex-auto p-4 md:p-6">
        <h3
          class="text-xl text-white/[.9] group-hover:text-white p-2 bg-gray-500 bg-opacity-40 rounded-md shadow-sm"
        >
          <span class="font-bold">SudoYantra</span> Using water for solar panel
          cleaning is generally not recommended for several reasons
        </h3>
      </div>
      <div class="pt-0 p-4 md:p-6">
        <div
          class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]"
        >
          Visit the blog
          <svg
            class="w-2.5 h-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Blog -->
`,Tn=`<!-- Subscribe -->
<!-- Contact Us -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-20">
  <div class="max-w-2xl lg:max-w-5xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Contact us
      </h1>
      <p class="mt-1 text-gray-600 dark:text-gray-400">
        We'd love to talk about how we can help you.
      </p>
    </div>

    <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      <!-- Card -->
      <div
        class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700"
      >
        <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Fill in the form
        </h2>

        <form id="contact-form" onsubmit="submitContactLetter(); return false;">
          <div class="grid gap-4" id="showme">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="hs-firstname-contacts-1" class="sr-only"
                  >First Name</label
                >
                <input
                  type="text"
                  name="hs-firstname-contacts-1"
                  id="first_name"
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label for="hs-lastname-contacts-1" class="sr-only"
                  >Last Name</label
                >
                <input
                  type="text"
                  name="hs-lastname-contacts-1"
                  id="last_name"
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <label for="hs-email-contacts-1" class="sr-only">Email</label>
              <input
                type="email"
                name="hs-email-contacts-1"
                id="email"
                autocomplete="email"
                class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Email"
              />
            </div>

            <div>
              <label for="hs-phone-number-1" class="sr-only"
                >Phone Number</label
              >
              <input
                type="text"
                name="hs-phone-number-1"
                id="phone"
                class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label for="hs-about-contacts-1" class="sr-only">Details</label>
              <textarea
                id="details"
                name="hs-about-contacts-1"
                rows="4"
                class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Details"
              ></textarea>
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-4 grid">
            <button
              type="submit"
              id="contact-button"
              class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Send inquiry
            </button>
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
        <script>
          // const form = document.querySelector("form");
          // form.addEventListener("submit", (e) => {
          //   // e.preventDefault();
          //   const formData = new FormData(form);

          //   fetch("https://formsubmit.co/a77931a3ad6784ff5a6da617d277a64f", {
          //     method: "POST",
          //     body: formData,
          //   })
          //     .then((response) => response.json())
          //     .then((data) => console.log(data))
          //     .catch((error) => console.log(error));
          // });
        <\/script>
      </div>
      <!-- End Card -->

      <div class="divide-y divide-gray-200 dark:divide-gray-800">
        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <svg
            class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
            />
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">
              Knowledgebase
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              We're here to help with any questions or code.
            </p>
            <a
              class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              href="#"
            >
              Contact support
              <svg
                class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <svg
            class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
            <path
              d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            />
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">FAQ</h3>
            <p class="mt-1 text-sm text-gray-500">
              Search our FAQ for answers to anything you might ask.
            </p>
            <a
              class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              href="#"
              onclick="onNavigate('/#faq'); return false;"
            >
              Visit FAQ
              <svg
                class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <svg
            class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"
            />
            <path
              d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"
            />
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">
              Developer APIs
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Check out our development quickstart guide.
            </p>
            <a
              class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              href="#"
            >
              Contact sales
              <svg
                class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <svg
            class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
            />
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">
              Contact us by email
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              If you wish to write us an email instead please use
            </p>
            <a
              class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              href="#"
            >
            contact@sudoyantra.com
            </a>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
    </div>
  </div>
  <script defer>
    const showme = document.getElementById("showme");
    showme.scrollIntoView({ behavior: "smooth" });
  <\/script>
</div>
<!-- End Contact Us -->

<!-- End Subscribe -->
`,pn=`<!-- Testimonials -->
<div class="overflow-hidden bg-slate-800">
  <div
    class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
  >
    <!-- Title -->
    <div class="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
        Loved by business and individuals across the globe
      </h2>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-slate-900">
          <div class="flex-auto p-4 md:p-6">
            <p
              class="text-base italic md:text-lg text-gray-800 dark:text-gray-200"
            >
              " With Preline, we're able to easily track our performance in full
              detail. It's become an essential tool for us to grow and engage
              with our audience. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                  src="/application/app_3.jpg"
                  alt="Image Description"
                />
              </div>

              <div class="grow ml-3">
                <p
                  class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200"
                >
                  Josh Tyson
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Product Manager | Capsule
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-slate-900">
          <div class="flex-auto p-4 md:p-6">
            <p
              class="text-base italic md:text-lg text-gray-800 dark:text-gray-200"
            >
              " In September, I will be using this theme for 2 years. I went
              through multiple updates and changes and I'm very glad to see the
              consistency and effort made by the team. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                  src="/application/app_4.jpg"
                  alt="Image Description"
                />
              </div>

              <div class="grow ml-3">
                <p
                  class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200"
                >
                  Luisa
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Senior Director of Operations | Fitbit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-slate-900">
          <div class="flex-auto p-4 md:p-6">
            <p
              class="text-base italic md:text-lg text-gray-800 dark:text-gray-200"
            >
              " Refreshing and Thought provoking design and it changes my view
              about how I design the websites. Great typography, modern clean
              white design, nice tones of the color. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                  src="/application/app_5.jpg"
                  alt="Image Description"
                />
              </div>

              <div class="grow ml-3">
                <p
                  class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200"
                >
                  Alisa Williams
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Entrepreneur | Happy customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Grid -->

    <!-- Grid -->
    <div class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
      <!-- Stats -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-white">
          Accuracy rate
        </h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
          99.95%
        </p>
        <p class="mt-1 text-gray-400">in fulfilling orders</p>
      </div>
      <!-- End Stats -->

      <!-- Stats -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-white">
          Startup businesses
        </h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
          2,000+
        </p>
        <p class="mt-1 text-gray-400">partner with Preline</p>
      </div>
      <!-- End Stats -->

      <!-- Stats -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-white">
          Happy customer
        </h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
          85%
        </p>
        <p class="mt-1 text-gray-400">this year alone</p>
      </div>
      <!-- End Stats -->
    </div>
    <!-- End Grid -->

    <!-- SVG Element -->
    <div
      class="absolute bottom-0 right-0 transform lg:translate-x-32"
      aria-hidden="true"
    >
      <svg
        class="w-40 h-auto sm:w-72"
        width="1115"
        height="636"
        viewBox="0 0 1115 636"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
          fill="currentColor"
          class="fill-orange-500"
        />
        <path
          d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
          fill="currentColor"
          class="fill-cyan-500"
        />
        <path
          d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
          fill="currentColor"
          class="fill-white"
        />
      </svg>
    </div>
    <!-- End SVG Element -->
  </div>
</div>
<!-- End Testimonials -->
`,On=`<!-- Masonry Cards -->
<div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-12 gap-6">
    <div
      class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3"
    >
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden" href="#">
        <div
          class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden"
        >
          <img
            class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
            src="/robot/robot_1.jpg"
            alt="Image Description"
          />
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
          <div
            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200"
          >
            Workplace personalities
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->

    <div
      class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3"
    >
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden" href="#">
        <div
          class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden"
        >
          <img
            class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
            src="/application/app_10.jpg"
            alt="Image Description"
          />
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
          <div
            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200"
          >
            New Gen Robotics Application
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->

    <div class="col-span-12 md:col-span-4">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden" href="#">
        <div
          class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden"
        >
          <img
            class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
            src="/robot/robot_2.jpg"
            alt="Image Description"
          />
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
          <div
            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200"
          >
            Pride 2021
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->

    <div class="col-span-12 sm:col-span-6 md:col-span-4">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden" href="#">
        <div
          class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden"
        >
          <img
            class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
            src="/application/app_8.jpg"
            alt="Image Description"
          />
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
          <div
            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200"
          >
            Data at Preline
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->

    <div class="col-span-12 sm:col-span-6 md:col-span-4">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden" href="#">
        <div
          class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden"
        >
          <img
            class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
            src="/application/app_7.jpg"
            alt="Image Description"
          />
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
          <div
            class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200"
          >
            Empowered management
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Masonry Cards -->
`,An=`<!-- FAQ -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
      Your questions, answered
    </h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">
      Answers to the most frequently asked questions.
    </p>
  </div>
  <!-- End Title -->

  <div class="max-w-2xl mx-auto">
    <!-- Accordion -->
    <div class="hs-accordion-group">
      <div
        class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active"
        id="hs-basic-with-title-and-arrow-stretched-heading-one"
      >
        <button
          class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
        >
          Can I cancel at anytime?
          <svg
            class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-one"
          class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
        >
          <p class="text-gray-800 dark:text-gray-200">
            Yes, you can cancel anytime no questions are asked while you cancel
            but we would highly appreciate if you will give us some feedback.
          </p>
        </div>
      </div>

      <div
        class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
        id="hs-basic-with-title-and-arrow-stretched-heading-two"
      >
        <button
          class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
        >
          What type of robots does your startup produce?
          <svg
            class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-two"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
          <p class="text-gray-800 dark:text-gray-200">
            Our startup produces robots for industrial and commercial use,
            specifically in manufacturing and logistics.
          </p>
        </div>
      </div>

      <div
        class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
        id="hs-basic-with-title-and-arrow-stretched-heading-three"
      >
        <button
          class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
        >
          What problems does your startup aim to solve with its robots?
          <svg
            class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-three"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
        >
          <p class="text-gray-800 dark:text-gray-200">
            Our robots aim to increase efficiency and productivity in Renewable
            Energy Domain.
          </p>
        </div>
      </div>

      <div
        class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
        id="hs-basic-with-title-and-arrow-stretched-heading-four"
      >
        <button
          class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
        >
          What is your startup's unique selling proposition (USP)?
          <svg
            class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-four"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
        >
          <p class="text-gray-800 dark:text-gray-200">
            Our robots are designed to be highly adaptable and customizable to
            meet the specific needs of each individual customer. This ensures
            that our robots can be integrated seamlessly into existing processes
            and workflows, resulting in maximum efficiency gains.
          </p>
        </div>
      </div>

      <div
        class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
        id="hs-basic-with-title-and-arrow-stretched-heading-five"
      >
        <button
          class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
        >
          What sets your startup apart from other robotic companies in the
          market?
          <svg
            class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-five"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
        >
          <p class="text-gray-800 dark:text-gray-200">
            We will manufacture our robots in-house and partner with logistics
            companies to distribute them to customers.
          </p>
        </div>
      </div>

      <div
        class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
        id="hs-basic-with-title-and-arrow-stretched-heading-six"
      >
        <button
          class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
        >
          What is the current stage of development for your robots?
          <svg
            class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-six"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
        >
          <p class="text-gray-800 dark:text-gray-200">
            Our robots are currently in the testing phase, and we are making
            final adjustments to optimize their performance.
          </p>
        </div>
      </div>
    </div>
    <!-- End Accordion -->
  </div>
</div>
<!-- End FAQ -->
`,jn=`<!-- Clients -->
<!-- Blog Article -->
<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto pt-20">
  <div class="flex justify-center">
    <!-- Content -->
    <div class="lg:col-span-2 max-w-3xl">
      <div class="py-8 lg:pr-4 lg:pr-8">
        <div class="space-y-5 lg:space-y-8">
          <a
            class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400"
            href="#"
          >
            <svg
              class="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            Back to Home
          </a>

          <h2
            class="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white"
          >
            Solution
          </h2>
          <h4 class="text-xl font-bold lg:text-2xl dark:text-white">
            Why Automate Solar Cleaning?
          </h4>

          <div class="flex items-center gap-x-5">
            <a
              class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200"
              href="#"
            >
              At SudoYantra
            </a>
          </div>

          <p class="text-lg text-gray-800 dark:text-gray-200">
            To generate electricity, solar panels need direct sunlight. Apart
            from things inside the panels like the type of glass and materials
            used, there are outside factors that also affect how much sunlight
            gets in. One of these factors is dirt and the power loss it causes,
            which is known as "Soiling loss."
            <br />
            <br />
            The dirt here means things like dirt and dust that collect on the
            solar panels. When these things build up, they stop sunlight from
            getting through to the panels. This makes the panels produce less
            electricity.<br /><br />
            This drop in power can last until someone cleans the panels, which
            might not happen right away. So, when panels get dirty, it means
            less money is made because less electricity is produced.<br /><br />
            This affects the people who own solar panels because they earn less
            money from the energy they make. <br /><br />That's why it's really
            important to know what causes dirt buildup and what makes it
            necessary to clean the panels regularly.
          </p>

          <h4 class="text-xl font-bold lg:text-2xl dark:text-white">
            The Importance of Automated Solar Panel Cleaning or (Significance of
            Automated Solar Panel Cleaning ) At SUDOYANTRA,
          </h4>

          <p class="text-lg text-gray-800 dark:text-gray-200">
            we create advanced robotic technologies right here in India. Our
            focus is on designing and developing solutions that keep solar
            panels clean, preventing losses due to dirt buildup. This not only
            makes solar projects more efficient but also conserves water.
            <br /><br />
            We work closely with our customers from the start, understanding
            their needs and developing products and services that enhance their
            efficiency. Our offerings also contribute to a healthier
            environment.
          </p>

          <div class="text-center">
            <div class="grid lg:grid-cols-2 gap-3">
              <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                <figure class="relative w-full h-60">
                  <img
                    class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                    src="/devikot_site_3.jpg"
                    alt="Image Descriptio1"
                  />
                </figure>
                <figure class="relative w-full h-60">
                  <img
                    class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                    src="/devikot_site_3.jpg"
                    alt="Image Description2"
                  />
                </figure>
              </div>
              <figure class="relative w-full h-72 sm:h-96 lg:h-full">
                <img
                  class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                  src="/devikot_site_3.jpg"
                  alt="Image Description3"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,Pn=`<section>
  <div class="overflow-hidden h-[90vh] flex items-center">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
        <!-- Title -->
        <div class="text-center">
          <p
            class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3"
          >
            Delete cluix mobile app account
          </p>
          <h1
            class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight"
          >
            Do you want to remove your
            <span class="text-blue-500">Mobile app account</span>
          </h1>
        </div>
        <!-- End Title -->

        <!-- Form -->
        <form id="delete-form" onsubmit="submitDeleteLetter(); return false;">
          <div
            class="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100"
          >
            <div class="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
              <label for="hs-hero-name-1" class="block text-sm font-medium"
                ><span class="sr-only">Your name</span></label
              >
              <input
                type="text"
                id="first_name"
                class="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div
              class="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s sm:flex-[1_0_0%]"
            >
              <label for="hs-hero-email-1" class="block text-sm font-medium"
                ><span class="sr-only">Your phone no.</span></label
              >
              <input
                type="number"
                id="phone"
                class="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your phone no."
              />
            </div>
          </div>

          <div class="mt-4 grid w-full justify-center">
            <button
              type="submit"
              id="delete-button"
              class="inline-flex w-96 justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Send delete account request
            </button>
          </div>
        </form>
        <div
          class="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80"
          aria-hidden="true"
        >
          <svg
            class="w-52 h-auto"
            width="717"
            height="653"
            viewBox="0 0 717 653"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z"
              fill="currentColor"
              class="fill-gray-800"
            />
            <path
              d="M17.863 238.22C10.4785 237.191 3.6581 242.344 2.62917 249.728C1.60024 257.113 6.75246 263.933 14.137 264.962L17.863 238.22ZM117.548 265.74L119.421 252.371L119.411 252.37L117.548 265.74ZM120.011 466.653L132.605 471.516L132.747 471.147L132.868 470.771L120.011 466.653ZM285.991 553.767C291.813 549.109 292.756 540.613 288.098 534.792L212.193 439.92C207.536 434.098 199.04 433.154 193.218 437.812C187.396 442.47 186.453 450.965 191.111 456.787L258.582 541.118L174.251 608.589C168.429 613.247 167.486 621.742 172.143 627.564C176.801 633.386 185.297 634.329 191.119 629.672L285.991 553.767ZM14.137 264.962L115.685 279.111L119.411 252.37L17.863 238.22L14.137 264.962ZM115.675 279.11C124.838 280.393 137.255 284.582 145.467 291.97C149.386 295.495 152.093 299.505 153.39 304.121C154.673 308.691 154.864 314.873 152.117 323.271L177.779 331.665C181.924 318.993 182.328 307.301 179.383 296.818C176.451 286.381 170.485 278.159 163.524 271.897C149.977 259.71 131.801 254.105 119.421 252.371L115.675 279.11ZM152.117 323.271C138.318 365.454 116.39 433.697 107.154 462.535L132.868 470.771C142.103 441.936 164.009 373.762 177.779 331.665L152.117 323.271ZM107.417 461.79C103.048 473.105 100.107 491.199 107.229 508.197C114.878 526.454 132.585 539.935 162.404 543.488L165.599 516.678C143.043 513.99 135.175 505.027 132.132 497.764C128.562 489.244 129.814 478.743 132.605 471.516L107.417 461.79ZM162.404 543.488C214.816 549.734 260.003 554.859 276.067 556.643L279.047 529.808C263.054 528.032 217.939 522.915 165.599 516.678L162.404 543.488Z"
              fill="currentColor"
              class="fill-orange-500"
            />
            <path
              d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z"
              fill="currentColor"
              class="fill-cyan-500"
            />
          </svg>
        </div>

        <div
          class="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80"
          aria-hidden="true"
        >
          <svg
            class="w-72 h-auto"
            width="1115"
            height="636"
            viewBox="0 0 1115 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
              fill="currentColor"
              class="fill-orange-500"
            />
            <path
              d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
              fill="currentColor"
              class="fill-cyan-500"
            />
            <path
              d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
              fill="currentColor"
              class="fill-gray-800"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>
`,$e={"/":un,"/#home":un,"/#about":En,"/#product":kn,"/#product-details":_n,"/#work":Ln,"/#team":Sn,"/#blog":In,"/#contact":Tn,"/#solution":jn,"/#data":pn,"/#demo":On,"/#faq":An,"/#404":pn,"/#delete":Pn},on=document.getElementById("app");on.innerHTML=$e[window.location.pathname.split("?")[0]];const sn=nt=>{window.scrollTo(0,0),window.history.pushState({},nt,window.location.origin+nt);try{const st=document.querySelector(nt.split("?")[0].replace("/","")),Et=document.querySelector("#home");Et&&(Et.className="!text-white !font-semibold font-medium  py-3 md:py-6 !text-blue-600 !font-semibold"),st&&(console.log(nt,"path"),nt&&Object.keys($e).forEach(gt=>{try{const R=document.querySelector(gt.split("?")[0].replace("/","")??"home");R&&(R.className="!text-gray-600 hover:!text-gray-800 font-medium  py-3 md:py-6 !font-semibold")}catch{}}),st.className=" font-medium  py-3 md:py-6 !text-blue-600 !font-semibold")}catch{if(nt.split("?")[0].replace("/","")==="home"||nt){Object.keys($e).forEach(gt=>{try{const R=document.querySelector(gt.split("?")[0].replace("/","")??"home");R&&(R.className="font-medium !text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500")}catch{}});const Et=document.querySelector("#home");Et&&(Et.className="font-medium  py-3 md:py-6 !text-blue-600 !font-semibold")}}on.innerHTML=$e[nt.split("?")[0]]||`<section class="bg-white dark:bg-gray-900 ">
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
</section>`};window.onpopstate=()=>{on.innerHTML=$e[window.location.pathname]};document.addEventListener("DOMContentLoaded",()=>{console.log(window.location.href),console.log(window.location.hash),sn("/"+window.location.hash)});window.addEventListener("hashchange",()=>(console.log(window.location.hash),sn("/"+window.location.hash),!1));window.onNavigate=sn;const nn=document.getElementById("hero-input"),Je=document.getElementById("subscribe-button"),Bn=async()=>{const nt=nn==null?void 0:nn.value;Je.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

  Sending`,await fetch("https://formsubmit.co/a77931a3ad6784ff5a6da617d277a64f",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:nt})}).then(st=>{console.log(st),Je.style.backgroundColor="#10b981",Je.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 Subscribed`}).catch(st=>{console.log(st),Je.innerHTML="Failed"})},Mn=async()=>{const nt=document.getElementById("contact-form"),st=document.getElementById("contact-button"),Et=nt.first_name,gt=nt.last_name,R=nt.email,Y=nt.details,b=nt.phone;st.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

  Sending`,await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_7xa5tqi",template_id:"template_t7jwhdf",user_id:"7Fopngk117L_VVFZz",template_params:{first_name:Et.value,last_name:gt.value,email:R.value,details:Y.value,phone:b.value}})}).then(y=>{console.log(y),st.style.backgroundColor="#10b981",st.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 Subscribed`}).catch(y=>{console.log(y),st.innerHTML="Failed"})},Dn=async()=>{const nt=document.getElementById("delete-form"),st=document.getElementById("delete-button"),Et=nt.first_name,gt=nt.phone;st.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

  Sending`,await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_7xa5tqi",template_id:"template_t7jwhdf",user_id:"7Fopngk117L_VVFZz",template_params:{first_name:Et.value,phone:gt.value}})}).then(R=>{console.log(R),st.style.backgroundColor="#10b981",st.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 Delete request send`}).catch(R=>{console.log(R),st.innerHTML="Failed"})};window.submitDeleteLetter=Dn;window.submitNewsLetter=Bn;window.submitContactLetter=Mn;window.addEventListener("scroll",()=>{const nt=document.getElementById("first-nav"),st=document.getElementById("second-nav");window.scrollY>10?(nt.classList.add("hidden"),st.classList.add("visible")):(nt.classList.remove("hidden"),st.classList.remove("visible"))});
