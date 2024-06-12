import React from "react";
import Cont from "./Cont";

function Contact() {
  return (
    <>
      <div className="bg-gray-200">
        {" "}
        <div class="container px-5 py-28 mx-auto">
          <div class="flex flex-wrap w-full ">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                Let's Visit us at Office
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full  leading-relaxed text-gray-600">
              Connect with our expert team to discuss your digital marketing
              needs. Whether it's SEO, social media, PPC, or content marketing,
              we're here to boost your online presence. Reach out today to take
              your business to the next level.
            </p>
          </div>
        </div>
      </div>
      <Cont />
    </>
  );
}

export default Contact;
