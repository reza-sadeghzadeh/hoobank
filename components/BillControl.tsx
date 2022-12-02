import Image from "next/image";
import React from "react";
import billControl from "../public/assets/main-page/bill-control.png";
import appleStore from "../public/assets/main-page/apple-store.png";
import googlePlay from "../public/assets/main-page/google-play.png";
import Link from "next/link";

const BillControl = () => {
  return (
    <section className="hoo-container flex max-9xl:flex-col-reverse  justify-center items-center py-6 mt-12">
      <div className="flex max-9xl:mt-12 9xl:w-1/2  w-full 9xl:flex-col flex-col justify-center md:flex-row">
        <Image src={billControl} width={500} height={700} alt="info" />
      </div>
      <div className="flex-col text-center 9xl:text-left text-white 9xl:pr-12 justify-center items-center 9xl:w-1/2">
        <h2
          className="9xl:text-4xl text-3xl font-extrabold mb-6 "
          style={{ lineHeight: 1.6 }}
        >
          Easily control your billing & invoicing.
        </h2>
        <p className=" opacity-70 text-md">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex justify-start max-9xl:justify-center items-center">
          <Link
            href={"/"}
            className="rounded-xl text-sm mt-8 bg-gradient-to-l   px-2 py-4"
          >
            <Image
              src={appleStore}
              width={128}
              quality={100}
              height={42}
              alt="info"
            />
          </Link>
          <Link
            href={"/"}
            className="rounded-xl text-sm mt-8 bg-gradient-to-l   px-2 py-4"
          >
            <Image
              quality={100}
              src={googlePlay}
              width={128}
              height={42}
              alt="info"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BillControl;
