import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

const SideBar = ({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
  isSideBarOpen: boolean;
}) => {
  return (
    <motion.aside
      initial={{ left: "100%" }}
      animate={{ left: isSideBarOpen ? 0 : "100%" }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 w-full h-screen bg-black/95  text-white z-50 top-0 md:hidden"
    >
      <div className="flex justify-end w-full absolute items-center p-12">
        <button
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          style={{ transform: "scale(2)" }}
        >
          ×
        </button>
      </div>
      <div className=" flex-col flex justify-center items-center h-full">
        <a href="" className="font-extralight">
          Home
        </a>
        <a href="" className="font-extralight opacity-70 ">
          About Us
        </a>
        <a href="" className="font-extralight opacity-70">
          Features
        </a>
        <a href="" className="font-extralight opacity-70">
          Solution
        </a>
      </div>
    </motion.aside>
  );
};

export default SideBar;
