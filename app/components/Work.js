import React from "react";
import Image from "next/image";
import work from "../../public/img/delivery.svg";

const Work = () => {
  return (
    <div className="flex flex-col md:items-center md:flex-row mt-[5%]">
      <Image src={work} className="w-full" alt="delivery work" />
      <div className="max-w-xl  p-6 bg-white  dark:bg-gray-800 dark:border-gray-700 mx-[5%]">
        <a href="#">
          <h5 className="mb-5 text-4xl font-bold tracking-normal text-[#3f3f3f] dark:text-white">
            Work <span className="text-[#F72D57]">whenever</span> you want,
            <span className="text-[#F72D57]">wherever</span> you are
          </h5>
        </a>
        <p className="mb-5  text-base font-light text-[#3f3f3f] dark:text-gray-400">
          Work with us and accomodate your schedule as you like. Our work rates
          have never been higher, this is because we give our empoyees several
          benefits that they enjoy throughout their journey.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-10 py-3 text-base font-normal text-center text-white bg-[#F72D57] rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Join Us
        </a>
      </div>
    </div>
  );
};

export default Work;
