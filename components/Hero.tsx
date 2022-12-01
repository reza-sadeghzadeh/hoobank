import Image from "next/image";
import React from "react";
import TopCard from "../public/assets/hero/TopCard";

import shine from "../public/assets/hero/shine.png";
import hand from "../public/assets/hero/hand.svg";
import { motion } from "framer-motion";

import MiddleCard from "../public/assets/hero/MiddleCard";
import BottomCard from "../public/assets/hero/BottomCard";
import Discount from "./subComps/Discount";

const Hero = () => {
  return (
    <section className="hoo-container flex justify-center items-center py-8 my-12">
      <div className="w-1/2 h-screen/2 relative text-white pt-8 pb-20">
        <Discount />
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-semibold mt-8"
        >
          The Next
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl font-semibold my-2 linear-text"
        >
          Generation
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-6xl font-semibold"
        >
          Payment Method.
        </motion.h1>
        <button className="w-32 absolute right-12 font-medium top-16 h-32  rounded-full border-gradient flex-col flex justify-center items-center">
          <div className="flex justify-center items-center linear-text">
            GET
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9898 21.2615C10.7559 20.9828 10.7697 20.5786 11.0079 20.3167L11.0784 20.2489L22.0903 11.0089C22.3943 10.7537 22.8477 10.7934 23.1029 11.0975C23.3368 11.3762 23.3229 11.7804 23.0848 12.0423L23.0143 12.1101L12.0024 21.3501C11.6983 21.6053 11.2449 21.5656 10.9898 21.2615Z"
                fill="white"
              />
              <path
                d="M14.3388 11.5797C13.9433 11.546 13.65 11.198 13.6837 10.8025C13.7144 10.4429 14.0048 10.1679 14.3545 10.1462L14.461 10.1475L22.6132 10.843C22.9739 10.8738 23.2493 11.1657 23.2697 11.5165L23.268 11.6233L22.538 19.7732C22.5026 20.1686 22.1534 20.4604 21.758 20.425C21.3986 20.3928 21.1247 20.1012 21.1045 19.7514L21.1062 19.645L21.7714 12.2139L14.3388 11.5797Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="linear-text -mt-2">Started</div>
        </button>
        <p className="text-white opacity-70  font-light text-md mt-12 w-2/3">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="pointer-events-none cursor-default scale-90 w-1/2 flex justify-center flex-col items-center h-96">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute w-28 h-28 rounded-full left-12 opacity-80 -top-24 radial-gradient-ball"
          />
          <motion.div
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute w-16 h-16 rounded-full right-16 opacity-80 bottom-6 radial-gradient-ball"
          />
          <motion.div
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute w-8 h-8 rounded-full left-40 opacity-80  bottom-0 radial-gradient-ball"
          />
        </motion.div>

        <div className="w-full relative">
          <Image
            className="absolute scale-150 left-6 -top-80 z-0"
            src={shine}
            width="600"
            height={700}
            alt="effect"
          />
          <motion.div
            className="w-full absolute left-0"
            initial={{ x: 100, y: -20, opacity: 0.2 }}
            animate={{ opacity: 1, y: -260, x: [100, 105, 100] }}
            transition={{ duration: 1 }}
          >
            <TopCard />
          </motion.div>

          <motion.div
            className="w-full absolute   z-10"
            initial={{ x: 70, y: -40, opacity: 0.2 }}
            animate={{ opacity: 1, y: -200 }}
            transition={{ duration: 1 }}
          >
            <MiddleCard />
          </motion.div>
          <motion.div
            className="w-full absolute  z-0"
            initial={{ x: 150, y: -10, opacity: 0.2 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1 }}
          >
            <BottomCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
