import React from "react";

function Homserv() {
  return (
    <div>
      <div class="container mx-auto max-w-screen-xl py-12 lg:py-28 ">
        <div class="relative mx-auto max-w-5xl text-center">
          <h2 class="block w-full  bg-clip-text font-medium  text-3xl sm:text-4xl">
            Why we are the best ?
          </h2>
        </div>
        <div class="grid grid-cols-1 px-3 lg:px-10 gap-4  sm:grid-cols-2 mt-16 lg:mt-20 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div class="relative bg-white py-6 px-6 rounded-3xl  my-4 shadow-lg transition hover:-translate-y-2 shadow-blue-100 hover:shadow-orange-200">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2">Advertisement</p>
              <div class="flex space-x-2 text-justify text-gray-400 text-base">
                <p>
                  Unlock your brand's potential with our premium advertising
                  service. From targeted campaigns to creative content, we'll
                  elevate your brand's visibility and drive results like never
                  before.
                </p>
              </div>
            </div>
          </div>

          <div class="relative bg-white py-6 px-6 rounded-3xl  my-4 shadow-lg transition hover:-translate-y-2 shadow-blue-100 hover:shadow-pink-200">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2">Branding</p>
              <div class="flex space-x-2 text-justify text-gray-400 text-base">
                <p>
                  Our branding service empowers your business with a distinctive
                  identity. From logo design to messaging, we craft a compelling
                  brand that resonates, engages, and stands out in the market.
                </p>
              </div>
            </div>
          </div>

          <div class="relative bg-white py-6 px-6 rounded-3xl  my-4 shadow-lg transition hover:-translate-y-2 shadow-blue-100 hover:shadow-green-200">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2">Promotion</p>
              <div class="flex space-x-2 text-justify text-gray-400 text-base">
                <p>
                  Unlock your brand's potential with our premium promotion
                  service! We'll strategically amplify your message, boost
                  visibility, and drive results, ensuring your business shines
                  in the spotlight
                </p>
              </div>
            </div>
          </div>

          <div class="relative bg-white py-6 px-6 rounded-3xl  my-4 shadow-lg transition hover:-translate-y-2 shadow-blue-100 hover:shadow-violet-200">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2">Data Protection</p>
              <div class="flex space-x-2 text-justify text-gray-400 text-base">
                <p>
                  We build our templates for speed in mind, for super-fast load
                  times so your customers never waver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homserv;
