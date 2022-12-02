import React from "react";

const CallToAction = () => {
  return (
    <section className="hoo-container py-12 ">
      <div className="w-full bg-white-gradient 9xl:p-24 p-12 rounded-3xl text-white flex justify-start items-center max-md:flex-col max-md:text-center">
        <div>
          <h2 className="9xl:text-5xl text-3xl font-bold">
            Let’s try our service now!
          </h2>
          <p className="9xl:pr-32 md:pr-16 9xl:w-2/3 w-full mt-6 opacity-70">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="9xl:w-1/4 md:w-1/2">
          <button className="rounded-xl 9xl:text-md text-sm text-custom-darkBackground bg-gradient-to-l bg-button-gradient max-md:mt-6 w-full bg-custom-blue md:px-8 md:py-6 px-6 py-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
