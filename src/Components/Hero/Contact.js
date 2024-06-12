import React from "react";
import Lottie from "lottie-react";
import animation from "../Contact/animation.json";

function Contact() {
  return (
    <div>
      <section class="text-gray-600 body-font relative pt-24">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-medium text-gray-900">Submit Your Query</h2>
          <p class="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-1/2 md:w-1/2  rounded-lg overflow-hidden   flex items-center justify-center relative">
            <Lottie animationData={animation} className="h-[500px] bg-none" />
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0">
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
