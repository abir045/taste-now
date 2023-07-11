import Image from "next/image";
import Burger from "../../public/img/Burger.jpg";
import slide1 from "../../public/img/slide1.jpg";
import slide2 from "../../public/img/slide2.jpg";
import kebab from "../../public/img/kebab.jpg";
import grilling from "../../public/img/grilling.jpg";
import food from "../../public/img/Food.jpg";

const Featured = () => {
  return (
    <div className="md:flex  items-center justify-between ">
      <a
        href="#"
        className="block  max-w-xl bg-white  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-[5%]"
      >
        <h5 className="text-5xl leading-[64px] font-bold tracking-normal text-[#3F3F3F] dark:text-white mb-5">
          Experience food <span className="text-[#f72d57]">Delivery</span> like
          no other
        </h5>
        <p className="font-light text-[#3f3f3f] text-base  dark:text-gray-400">
          We deliver the food of your choice wherever, whenever. Select your
          food from only the top restaurants in the area, and get it in a flash.
          Download the app now to discover more.
        </p>
      </a>

      <div className="flex w-full">
        <Image src={food} className="w-full" alt="hero image" />
      </div>
    </div>
  );
};

export default Featured;
