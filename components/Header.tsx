import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <nav className="hoo-container mx-auto flex justify-between text-white items-center">
        <Link href={"/"}>
          <Image alt="logo" width={118} height={32} src={logo} />
        </Link>
        <div className="w-1/2 font-extralight flex justify-between max-md:hidden">
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
          {/* <div className="translate-y-1.5">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="9" y="4" width="15" height="2" fill="white" />
              <rect x="9" width="15" height="2" fill="white" />
              <rect x="9" y="6" width="15" height="2" fill="#B22234" />
              <rect x="9" y="2" width="15" height="2" fill="#B22234" />
              <rect width="9" height="8" fill="#3C3B6E" />
              <rect y="14" width="24" height="2" fill="#B22234" />
              <rect y="10" width="24" height="2" fill="#B22234" />
              <rect y="12" width="24" height="2" fill="white" />
              <rect y="8" width="24" height="2" fill="white" />
            </svg>
          </div> */}
        </div>
        <div className="hubberger md:hidden" />
      </nav>
    </header>
  );
};

export default Header;
