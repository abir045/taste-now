import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter, Poppins, Praise } from "next/font/google";
import Featured from "./components/Featured";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Taste Now",
  description: "Food delivery web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {/* <Featured /> */}
        {/* <ProductList /> */}
        {/* <Banner /> */}
        <main>{children}</main>

        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
