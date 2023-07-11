import Image from "next/image";
import Featured from "./components/Featured";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Delivery from "./components/Delivery";
import Work from "./components/Work";

export default function Home() {
  return (
    <main>
      <Featured />
      <ProductList />
      <Banner />
      <Delivery />
      <Work />
      {/* <Image src={logo} /> */}
    </main>
  );
}
