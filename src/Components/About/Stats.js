import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <div>
      <div className="">
        <section className="text-gray-600 ">
          <div className="container px-5 py-2 sm:py-24 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div className="p-4 shadow-lg rounded-full">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <CountUp start={0} end={200} duration={15} />k
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 shadow-lg rounded-full">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <CountUp start={0} end={25} duration={15} />M
                </h2>
                <p className="leading-relaxed">Subscribers</p>
              </div>
              <div className="p-4 shadow-lg rounded-full">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <CountUp start={0} end={16} duration={15} />M
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
              <div className="p-4 shadow-lg rounded-full">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <CountUp start={0} end={30} duration={15} />M
                </h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Stats;
