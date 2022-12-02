import React from "react";

const Business = () => {
  return (
    <section className="hoo-container flex max-9xl:flex-col justify-center items-center py-6 mt-12">
      <div className="flex-col text-center 9xl:text-left text-white justify-center items-center 9xl:w-1/2">
        <h2
          className="9xl:text-4xl text-3xl font-extrabold mb-6 "
          style={{ lineHeight: 1.6 }}
        >
          You do the business, we’ll handle the money.
        </h2>
        <p className=" opacity-70 text-md">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="text-custom-darkBackground rounded-xl text-sm mt-8 bg-gradient-to-l bg-button-gradient bg-custom-blue px-6 py-4">
          Get Started
        </button>
      </div>
      <div className="flex max-9xl:mt-12 9xl:w-1/2 9xl:pl-36 w-full 9xl:flex-col flex-col md:flex-row">
        <div className="w-full my-1 py-6 px-4 rounded-3xl flex max-9xl:flex-col max-9xl:text-center justify-center 9xl:justify-start items-center ">
          <div className="w-12 h-12 m-2 max-9xl:mb-6 p-2 rounded-full flex justify-center items-center bg-custom-blue/10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4696 23.7122C29.0552 24.1138 28.8648 24.6946 28.9592 25.2642L30.3816 33.1362C30.5016 33.8034 30.22 34.4786 29.6616 34.8642C29.1144 35.2642 28.3864 35.3122 27.7896 34.9922L20.7032 31.2962C20.4568 31.165 20.1832 31.0946 19.9032 31.0866H19.4696C19.3192 31.109 19.172 31.157 19.0376 31.2306L11.9496 34.9442C11.5992 35.1202 11.2024 35.1826 10.8136 35.1202C9.86639 34.941 9.23439 34.0386 9.38959 33.0866L10.8136 25.2146C10.908 24.6402 10.7176 24.0562 10.3032 23.6482L4.52559 18.0482C4.04239 17.5794 3.87439 16.8754 4.09519 16.2402C4.30959 15.6066 4.85679 15.1442 5.51759 15.0402L13.4696 13.8866C14.0744 13.8242 14.6056 13.4562 14.8776 12.9122L18.3816 5.72817C18.4648 5.56817 18.572 5.42097 18.7016 5.29617L18.8456 5.18417C18.9208 5.10097 19.0072 5.03217 19.1032 4.97617L19.2776 4.91217L19.5496 4.80017H20.2232C20.8248 4.86257 21.3544 5.22257 21.6312 5.76017L25.1816 12.9122C25.4376 13.4354 25.9352 13.7986 26.5096 13.8866L34.4616 15.0402C35.1336 15.1362 35.6952 15.6002 35.9176 16.2402C36.1272 16.8818 35.9464 17.5858 35.4536 18.0482L29.4696 23.7122Z"
                fill="#00F6FF"
              />
            </svg>
          </div>
          <div className="w-full 9xl:ml-4 text-white">
            <h4 className="text-md font-medium mb-2">Rewards</h4>
            <p className="text-sm opacity-70">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="w-full my-1 bg-white-gradient py-6 px-4 rounded-3xl flex justify-start max-9xl:flex-col max-9xl:text-center 9xl:justify-start items-center ">
          <div className="w-12 h-12 m-2 p-3 rounded-full flex justify-center items-center max-9xl:mb-6 bg-custom-blue/10">
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.565 31.8619C13.7422 31.9544 13.9403 32.0015 14.1384 31.9999C14.3365 31.9984 14.5331 31.9497 14.7119 31.8556L20.4205 28.8039C22.0393 27.941 23.307 26.9761 24.296 25.8527C26.4464 23.4051 27.6206 20.2813 27.5997 17.0602L27.5321 6.43517C27.5256 5.21138 26.7218 4.11938 25.5331 3.72243L14.9132 0.159303C14.2737 -0.0572148 13.573 -0.0525079 12.9448 0.170286L2.36522 3.8605C1.1829 4.27314 0.39362 5.37298 0.400064 6.59834L0.467716 17.2155C0.488657 20.4413 1.70319 23.551 3.88902 25.9735C4.8877 27.0812 6.16666 28.032 7.80321 28.8808L13.565 31.8619ZM12.0538 19.3743C12.2922 19.6034 12.6014 19.7163 12.9107 19.7132C13.22 19.7116 13.5276 19.5955 13.7628 19.3633L20.0014 13.213C20.4701 12.7501 20.4653 12.0064 19.9917 11.5498C19.5165 11.0933 18.7514 11.0964 18.2826 11.5593L12.893 16.8718L10.6862 14.7505C10.211 14.294 9.44751 14.2987 8.97716 14.7615C8.50843 15.2244 8.51326 15.9681 8.98844 16.4246L12.0538 19.3743Z"
                fill="#00F6FF"
              />
            </svg>
          </div>
          <div className="w-full 9xl:ml-4 text-white">
            <h4 className="text-md font-medium mb-2">100% Secured</h4>
            <p className="text-sm opacity-70">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="w-full my-1 py-6 px-4 rounded-3xl flex justify-start items-center max-9xl:flex-col max-9xl:text-center 9xl:justify-start">
          <div className="w-12 h-12 m-2 p-3 rounded-full flex justify-center items-center max-9xl:mb-6 bg-custom-blue/10">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.4965 0.931172C30.6962 0.109757 29.5117 -0.196261 28.4072 0.125863L2.6527 7.61524C1.48742 7.93897 0.661482 8.8683 0.438991 10.0489C0.211698 11.2504 1.00562 12.7757 2.04285 13.4135L10.0957 18.3629C10.9217 18.8702 11.9877 18.743 12.6712 18.0537L21.8926 8.77488C22.3568 8.2917 23.1251 8.2917 23.5893 8.77488C24.0535 9.24196 24.0535 9.99895 23.5893 10.4821L14.3519 19.7625C13.6668 20.4503 13.5388 21.5213 14.043 22.3524L18.9634 30.486C19.5396 31.4524 20.532 32 21.6205 32C21.7485 32 21.8926 32 22.0206 31.9839C23.2691 31.8228 24.2615 30.9692 24.6297 29.7612L32.2648 4.03967C32.601 2.94445 32.2968 1.75259 31.4965 0.931172"
                fill="#00F6FF"
              />
            </svg>
          </div>
          <div className="w-full 9xl:ml-4 text-white">
            <h4 className="text-md font-medium mb-2">Balance Transfer</h4>
            <p className="text-sm opacity-70">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
