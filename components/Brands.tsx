import Image from "next/image";
import React from "react";

import airBNB from "../public/assets/brands/airbnb.png";
import dropbox from "../public/assets/brands/dropbox.png";
import coinbase from "../public/assets/brands/coinbase.png";
import binance from "../public/assets/brands/binance.png";

const Brands = () => {
  return (
    <section className="hoo-container flex justify-around items-center max-md:flex-col w-full   py-12">
      <Image
        className="max-md:my-8"
        src={airBNB}
        height={50}
        width={150}
        alt="airBNB"
      />
      <Image
        className="max-md:my-8"
        src={dropbox}
        height={50}
        width={150}
        alt="dropbox"
      />
      <Image
        className="max-md:my-8"
        src={coinbase}
        height={50}
        width={150}
        alt="coinbase"
      />
      <Image
        className="max-md:my-8"
        src={binance}
        height={50}
        width={150}
        alt="binance"
      />
    </section>
  );
};

export default Brands;
