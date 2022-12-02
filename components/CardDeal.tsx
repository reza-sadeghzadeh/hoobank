import Image from "next/image";
import cardDeal from "../public/assets/main-page/card-deal.png";

const CardDeal = () => {
  return (
    <section className="hoo-container flex max-9xl:flex-col  justify-center items-center py-6 mt-6">
      <div className="flex-col text-center 9xl:text-left text-white justify-center items-center 9xl:w-1/2">
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
          <button className="rounded-xl text-sm mt-8 bg-gradient-to-l bg-button-gradient bg-custom-blue px-6 py-4">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex max-9xl:mt-16 9xl:w-1/2  w-full  justify-center md:flex-row">
        <Image src={cardDeal} width={500} height={700} alt="info" />
      </div>
    </section>
  );
};

export default CardDeal;
