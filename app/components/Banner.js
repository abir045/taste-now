import React from "react";
import Burger from "../../public/img/Burgerking.jpg";
import Image from "next/image";
import burgerSvg from "../../public/img/BurgerSvg.svg";
const Banner = () => {
  return (
    <div className="flex relative items-center ">
      <section className="bg-[#F72D57] pl-[50%]  dark:bg-gray-900 dark:text-black mt-[5%]">
        <div className="py-8 px-4   max-w-screen-xl   lg:py-6">
          <h1 className="mb-4  text-white text-4xl font-bold  tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-white">
            Don’t miss out on your favourite food
          </h1>
          <p className="mb-4 w-full text-base  font-light text-white lg:text-xl sm:px-6 md:px-6 lg:px-2 dark:text-gray-400">
            Sign up now to enjoy your favourite food anywhere, anytime. It is
            quick, easy and accessible to anyone of any age. Free of charge,
            taste now is the solution to your every day foods.
          </p>
        </div>

        <div className="hidden md:block absolute left-0 top-[5%]">
          <Image src={burgerSvg} className="max-w-lg" alt="burger" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
