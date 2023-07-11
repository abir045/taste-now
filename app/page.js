import Image from "next/image";
import Featured from "./components/Featured";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Delivery from "./components/Delivery";

export default function Home() {
  return (
    <main>
      <Featured />
      <ProductList />
      <Banner />
      <Delivery />
      {/* <Image src={logo} /> */}
    </main>
  );
}
