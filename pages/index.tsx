import Head from "next/head";
import BillControl from "../components/BillControl";
import Brands from "../components/Brands";
import Business from "../components/Business";
import CardDeal from "../components/CardDeal";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Opinions from "../components/Opinions";

export default function Home() {
  return (
    <main className="bg-custom-darkBackground ">
      <Head>
        <title>Hoo Bank Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Counter />
      <Business />
      <BillControl />
      <CardDeal />
      <Opinions />
      <Brands />
    </main>
  );
}
