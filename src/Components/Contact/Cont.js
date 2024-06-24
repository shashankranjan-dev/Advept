import React from "react";

function Cont() {
  return (
    <div>
      <section class="bg-black py-12">
        <div class="container mx-auto max-w-screen-xl px-4">
          <h2 class="text-2xl font-semibold text-white mb-4">Contact Us</h2>

          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-200 mb-2">
              Our Address
            </h3>
            <p class="text-gray-300">
              123 Main Street, Suite 456
              <br />
              Cityville, State 12345
              <br />
              Country
            </p>
          </div>

          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-200 mb-2">Phone</h3>
            <p class="text-gray-300">+1 (123) 456-7890</p>
          </div>

          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-200 mb-2">Email</h3>
            <p class="text-gray-300">info@example.com</p>
          </div>

          <div class="relative h-0  mb-6 lg:pb-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3623666522267!2d88.42143187591853!3d22.602939631856497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b6d9b1e2eb%3A0xc64595ca0325e764!2sADVEPT%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Kolkata%20%7C%20Website%20Designing%20Web%20Development%20Company%20in%20Kolkata!5e0!3m2!1sen!2sin!4v1694089587448!5m2!1sen!2sin"
              class="absolute top-0 left-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cont;
