import React from "react";
import Image from "next/image";
import delivery from "../../public/img/Taste-now.jpg";

const Delivery = () => {
  return (
    <div className="flex flex-col items-center md:justify-between md:flex-row  mt-[10%]">
      <div className="max-w-xl p-6 bg-white  dark:bg-gray-800 dark:border-gray-700 mx-[5%]">
        <a href="#">
          <h5 className="mb-5 text-4xl font-bold tracking-normal text-[#3f3f3f] dark:text-white">
            Food <span className="text-[#F72D57]">delivery</span> within 45
            minutes
          </h5>
        </a>
        <p className="mb-5  text-base font-light text-[#3f3f3f] dark:text-gray-400">
          If your food takes more than 45 minutes, it’s on us. We are proud to
          say we take delivery very seriously, so that you don’t have to worry
          about how or when the food gets to you.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-8 py-3 text-base font-normal text-center text-white bg-[#F72D57] rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Order now
        </a>
      </div>

      <Image src={delivery} />
    </div>
  );
};

export default Delivery;
