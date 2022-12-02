import Image from "next/image";
import React from "react";
import Herman from "../public/assets/main-page/people/Herman.png";
import Kenn from "../public/assets/main-page/people/Kenn.png";
import Steve from "../public/assets/main-page/people/Steve.png";

const Opinions = () => {
  const comments = [
    {
      name: "Herman Jensen",
      icon: Herman,
      position: "Founder & Leader",
      comment:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    },
    {
      name: "Kenn Gallagher",
      icon: Kenn,
      position: "Founder & Leader",
      comment:
        "It is usually people in the money business, finance, and international trade that are really rich.",
    },
    {
      name: "Steve Mark",
      icon: Steve,
      position: "Founder & Leader",
      comment:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
    },
  ];
  return (
    <section className="hoo-container flex justify-center flex-col items-center py-16">
      <div className="text-white flex justify-center items-center w-full">
        <h3 className="text-left  9xl:text-4xl text-3xl font-medium w-1/2 mb-6 9xl:w-1/3">
          What people are saying about us
        </h3>
        <p className="opacity-70 text-md 9xl:px-52 w-1/2 9xl:w-2/3">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-between max-9xl:flex-col items-start w-full py-12 mt-12">
        {comments.map((c, i) => (
          <div
            className={`px-8 flex flex-col justify-center items-start ${
              i == 0 ? "bg-white-gradient" : ""
            }  mx-6  rounded-3xl py-12`}
          >
            <svg
              width="43"
              className="mb-10"
              height="28"
              viewBox="0 0 43 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z"
                fill="#00D9F5"
                fill-opacity="0.6"
              />
            </svg>
            <p className="text-md  text-white font-light">{c.comment}</p>
            <div className="flex justify-start items-center mt-8">
              <Image
                src={c.icon}
                width={48}
                height={48}
                className="rounded-full"
                alt="poeple"
              />
              <div className="text-white ml-4 ">
                <h6 className="text-lg">{c.name}</h6>
                <p className="opacity-60 text-sm font-light">{c.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opinions;
