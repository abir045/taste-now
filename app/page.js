import Image from "next/image";
import Featured from "./components/Featured";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main>
      <Featured />
      <ProductList />
      <Banner />
      {/* <Image src={logo} /> */}
    </main>
  );
}
