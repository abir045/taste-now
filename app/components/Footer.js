import React from "react";
import Image from "next/image";

import logo from "../../public/img/Taste-now-white.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F72D57]    dark:bg-gray-800 mt-[15%] py-2">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <a href="/">
            <Image src={logo} className="h-4" alt="Logo" />
          </a>

          <div className="flex flex-col items-baseline">
            <ul className="flex flex-wrap items-center mt-3 text-[13px] font-light text-white dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-16 ">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-8">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Help
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap items-center mt-3 text-[13px] font-light text-white dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-8">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
