import React from "react";
import Hombout from "./Hombout";
import Homserv from "./Homserv";
import Pricing from "./Pricing";
import Features from "./Features";
import Contact from "./Contact";
import Partner from "./Partner";
import Article from "./Article";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

function Hero() {
  return (
    <div>
      <div className="bg-black">
        <section class="relative overflow-hidden pt-20 sm:pt-32 xl:pt-36">
          <div class="relative z-10">
            <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
              <svg
                class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                    width="200"
                    height="200"
                    x="50%"
                    y="50%"
                    patternUnits="userSpaceOnUse"
                    patternTransform="translate(-100 0)"
                  >
                    <path d="M.5 200V.5H200" fill="none"></path>
                  </pattern>
                </defs>
                <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                  <path
                    d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                    stroke-width="0"
                  ></path>
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                ></rect>
              </svg>
            </div>
          </div>
          <div class=" z-20 mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-5xl  text-center">
              <h1 class="text-4xl font-bold  tracking-wide text-gray-200 sm:text-6xl">
                Welcome to Advept :
                <span class="leading-normal text-blue-600">
                  {" "}
                  Your Gateway to Digital Success
                </span>
              </h1>
              <h2 class="mt-6 text-lg leading-8 text-gray-300">
                Choose a more eco-friendly way to hydrate with our 100%
                recyclable cartons.
              </h2>
            </div>
            <div class=" mx-auto mt-10 max-w-screen-xl">
              <img
                class="w-full rounded-t-2xl object-cover object-center  h-[600px]"
                src="/Main Banner.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>

      <div className="">
        <Features />
        <Homserv />

        <Hombout />

        <Pricing />
        {/* <Partner /> */}
        <Article />
        <Testimonials />
        <Contact />
        <Faq />
      </div>
    </div>
  );
}

export default Hero;
