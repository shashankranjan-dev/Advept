import React from "react";

function Description() {
  return (
    <div>
      <div className=" md:py-0 py-9">
        <div className="relative ">
          <img
            src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png"
            alt="city view"
            className="w-full h-full  object-center object-fill absolute sm:block hidden"
          />
          <img
            src="https://i.ibb.co/LQpxBsc/mobile.png"
            alt="city view"
            className="w-full h-full absolute object-center object-fill sm:hidden"
          />
          <div className="text-xl relative  bg-gradient-to-r from-blue-700 to-transparent w-full h-full z-40 top-0 md:p-48 p-6 flex flex-col justify-between ">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9  text-white sm:w-auto w-64">
                Act Before It’s Too Late!
              </h1>
              <p className="text-lg  leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                A good idiom for kids is "It's raining cats and dogs." Kids know
                what both cats and dogs are from an early age.
              </p>
            </div>
            <div className="md:mt-12  mt-20">
              <button className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto max-w-screen-xl flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.pixabay.com/photo/2013/10/29/15/00/ireland-202398_640.jpg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
            </h1>
            <p class="mb-8 leading-relaxed text-justify">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      <div class="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div class="flex flex-col md:flex-row">
          <div class="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              class="w-1/2 md:w-full mx-auto"
              src="https://placeholder.pics/svg/400"
              alt="can_help_banner"
            />
          </div>

          <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
              <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">
                  Dynamic Personalization:
                </h3>
                <p class="text-sm">
                  Our platform leverages user data and behavior to provide a
                  highly personalized experience, with dynamic content and
                  product recommendations that change in real-time.
                </p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
              <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">
                  Mobile-Optimized Interface
                </h3>
                <p class="text-sm">
                  {" "}
                  Our website is designed with a mobile-first approach, offering
                  a seamless browsing experience across all devices, including
                  smartphones and tablets.
                </p>
              </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
              <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">
                  24/7 Customer Support
                </h3>
                <p class="text-sm">
                  ur U.S.-based customer support team is available around the
                  clock to answer any questions, resolve any issues, and provide
                  helpful solutions. Whether it's through email, phone, or live
                  chat, we're always here to support you.
                </p>
              </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
              <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 class="text-2xl font-bold text-md mb-6">
                  Secure Payment Processing
                </h3>
                <p class="text-sm">
                  We use cutting-edge security measures to protect our
                  customers' sensitive information and ensure the safety of all
                  transactions made on our site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-y-hidden">
        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">
                        Become a member and start building the next big thing
                      </h1>
                    </div>
                    <button
                      aria-label="Join the community"
                      className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Join the community
                    </button>
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png"
                      alt="cartoon avatars"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
