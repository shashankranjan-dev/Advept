import React from "react";
import Lottie from "lottie-react";
import animation from "./animation.json";
import { Link } from "react-router-dom";

function Hombout() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-6">
        <div class="mx-auto max-w-screen-xl px-4 md:px-6">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="h-full overflow-hidden   md:h-full">
                <Lottie
                  animationData={animation}
                  className="h-[500px] bg-none"
                />
              </div>
            </div>

            <div class="md:pt-28">
              <p class="mb-1 text-justify font-bold text-indigo-500 md:text-left">
                From Startups to Enterprises
              </p>

              <h1 class="mb-4 text-justify text-2xl font-semibold text-gray-800 sm:text-3xl md:mb-4 md:text-left">
                Unlocking Success Across Sectors : Our Marketing Mastery
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-4 text-justify">
                With vast experience in SEO, PPC, and marketing, we excel in
                diverse industries, from healthcare to retail. We bridge
                industries, offering proven branding strategies and a track
                record of success to boost your brand's visibility and impact.
                Partner with us for a competitive edge.
              </p>
              <br />
              <Link
                to="/about"
                class="mb-2 px-8 text-center hover:bg-indigo-600 bg-indigo-400 border border-gray-200 p-3 rounded shadow-default text-base font-semibold text-white sm:text-lg md:mb-4 md:text-left"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hombout;
