import React from "react";

function Cont() {
  return (
    <div>
      <section class="">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-gray-900">Visit Our Location</h2>
            <p class="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3623666522267!2d88.42143187591853!3d22.602939631856497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b6d9b1e2eb%3A0xc64595ca0325e764!2sADVEPT%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Kolkata%20%7C%20Website%20Designing%20Web%20Development%20Company%20in%20Kolkata!5e0!3m2!1sen!2sin!4v1694089587448!5m2!1sen!2sin"
                  width="600"
                  height="500"
                  //   style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div class="px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p class="mt-1 text-gray-600">
                      AC 5, Kestopur - Baguiati Flyover, near Bank of Baroda,
                      Prafulla Kanan, Kestopur, Kolkata, West Bengal
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">
                      Working Hours
                    </h3>
                    <p class="mt-1 text-gray-600">Monday: 10am - 6pm</p>
                    <p class="mt-1 text-gray-600">Tuesday : 10am - 6pm</p>
                    <p class="mt-1 text-gray-600">Wednesday : 10am - 6pm</p>
                    <p class="mt-1 text-gray-600">Thursday : 10am - 6pm</p>
                    <p class="mt-1 text-gray-600">Friday : 10am - 6pm</p>
                    <p class="mt-1 text-gray-600">Saturday : 10am - 2pm</p>
                    <p class="mt-1 text-gray-600">Sunday : Closed</p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                    <p class="mt-1 text-gray-600">
                      Email: aarhatiserv@gmail.com
                    </p>
                    <p class="mt-1 text-gray-600">Phone: +91 7908382268</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cont;
