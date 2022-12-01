import React from "react";

const Business = () => {
  return (
    <section className="hoo-container">
      <div className="flex-col text-center lg:text-left text-white justify-center items-center lg:w-1/2">
        <h2 className="lg:text-5xl text-2xl font-extrabold mb-6  leading-7">
          You do the business, we’ll handle the money.
        </h2>
        <p className=" opacity-70 sm:text-lg  text-xl">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="rounded-xl mt-6 bg-gradient-to-l  bg-custom-blue px-4 py-3">
          Get Started
        </button>
      </div>
      <div className="flex lg:w-1/2"> </div>
    </section>
  );
};

export default Business;
