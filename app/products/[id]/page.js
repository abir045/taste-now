"use client";
import React from "react";
import { useState } from "react";
import pizza from "../../../public/img/pizza.png";

const SingleProductPage = () => {
  const [size, setSize] = useState(0);

  const product = {
    id: 1,
    img: { pizza },
    name: "pepperoni",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet",
  };

  return (
    <div>
      <a
        href="/products/all/"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={product.img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.desc}
          </p>
        </div>
      </a>
    </div>
  );
};

export default SingleProductPage;
