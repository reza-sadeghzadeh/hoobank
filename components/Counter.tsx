import React from "react";

const Counter = () => {
  return (
    <section className="hoo-container flex justify-between items-center pb-12 max-md:flex-col">
      <div className="flex justify-center max-md:justify-between  max-md:w-full max-md:my-3 items-center">
        <h1 className="text-white font-semibold text-xl 9xl:text-5xl">3800+</h1>
        <h4 className="linear-text ml-2 9xl:ml-4 text-md 9xl:text-lg">
          USER ACTIVE
        </h4>
      </div>
      <p className="max-md:hidden text-white opacity-60">|</p>
      <div className="flex justify-center max-md:justify-between  max-md:w-full max-md:my-3 items-center">
        <h1 className="text-white font-semibold text-xl 9xl:text-5xl">230+</h1>
        <h4 className="linear-text ml-2 9xl:ml-4 text-md 9xl:text-lg">
          TRUSTED BY COMPANY
        </h4>
      </div>
      <p className="max-md:hidden text-white opacity-60">|</p>
      <div className="flex justify-center max-md:justify-between  max-md:w-full max-md:my-3 items-center">
        <h1 className="text-white font-semibold text-xl 9xl:text-5xl">
          $230M+
        </h1>
        <h4 className="linear-text ml-2 9xl:ml-4 text-md 9xl:text-lg">
          TRANSACTION
        </h4>
      </div>
    </section>
  );
};

export default Counter;
