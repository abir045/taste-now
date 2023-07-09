import Image from "next/image";

import logo from "../public/img/logo.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Taste Now
      {/* <Image src={logo} /> */}
    </main>
  );
}
