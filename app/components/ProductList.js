"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

import pizza from "../../public/img/pizza-2.jpg";
import meedi from "../../public/img/medi1.svg";
import veg from "../../public/img/veg.jpg";
import shawarma from "../../public/img/shawarma.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

const ProductList = () => {
  return (
    <div className="mx-[5%]">
      <h1 className="text-5xl font-semibold text-[#3f3f3f] mb-10 text-center">
        Our Popular <span className="text-[#F72D57]">Categories</span>
      </h1>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="w-full max-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="p-8 rounded-t-lg justify-center"
                src={pizza}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5 text-center">
              <a href="#">
                <h5 className="text-xl font-medium tracking-tight mb-2 text-gray-900 dark:text-white">
                  Pepperoni Pizza
                </h5>
              </a>
              <span className="text-[13px] text-[#3f3f3f] font-light">
                Di napoles
              </span>

              <div className="flex items-center justify-center  mb-2">
                <span className="text-[13px] text-[#3f3f3f]  font-medium mt-2 mb-4 dark:text-white">
                  $11.99
                </span>
              </div>
              <div className="flex flex-col  items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-[#F72D57] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="p-8 rounded-t-lg justify-center"
                src={meedi}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5 text-center">
              <a href="#">
                <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white mb-2">
                  Mediterranean Pizza
                </h5>
              </a>
              <span className="text-[13px] text-[#3f3f3f] font-light  ">
                Di napoles
              </span>

              <div className="flex items-center justify-center mt-2 mb-4">
                <span className="text-[13px] text-[#3f3f3f]  font-medium dark:text-white">
                  $13.99
                </span>
              </div>
              <div className="flex flex-col  items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-[#F72D57] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="p-8 rounded-t-lg justify-center"
                src={veg}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5 text-center">
              <a href="#">
                <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white mb-2">
                  Vegetarian Pizza
                </h5>
              </a>
              <span className="text-[13px] text-[#3f3f3f] font-light  ">
                Cosa di Mario
              </span>

              <div className="flex items-center justify-center mt-2 mb-4">
                <span className="text-[13px] text-[#3f3f3f]  font-medium dark:text-white">
                  $12.99
                </span>
              </div>
              <div className="flex flex-col  items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-[#F72D57] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="p-8 rounded-t-lg justify-center"
                src={shawarma}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5 text-center">
              <a href="#">
                <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white mb-2">
                  Shawarma
                </h5>
              </a>
              <span className="text-[13px] text-[#3f3f3f] font-light  ">
                Turkish
              </span>

              <div className="flex items-center justify-center mt-2 mb-4">
                <span className="text-[13px] text-[#3f3f3f]  font-medium dark:text-white">
                  $10.99
                </span>
              </div>
              <div className="flex flex-col  items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-[#F72D57] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductList;
