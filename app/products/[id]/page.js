"use client";
import React from "react";
import { useState } from "react";
import pizza from "../../../public/img/pizza.png";
import Image from "next/image";

const SingleProductPage = () => {
  const [size, setSize] = useState(0);

  const product = {
    id: 1,
    img: { pizza },
    name: "pepperoni",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales velit eu consectetur ultricies. Sed lobortis facilisis risus, a ornare eros varius ac. Mauris eget pharetra lectus. Fusce vel augue blandit, mattis nisl nec, mollis magna. Integer dui urna, viverra sit amet commodo at, tempor et neque",
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-around w-full mt-5">
      <Image src={pizza} alt="pizza" />

      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <span class="mb-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.price[0]}$
          </span>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.desc}
          </p>

          <h3 className="font-bold text-xl">Choose the size</h3>
          {/* size options */}

          <div className="flex items-center justify-between mt-5 mb-5">
            <div className="" onClick={() => setSize(0)}>
              {/* <Image src="/img/size.png" layout="fill" alt="" /> */}
              <span className="border font-bold text-xl border-gray-500 rounded-full p-3">
                S
              </span>
            </div>
            <div className="" onClick={() => setSize(1)}>
              {/* <Image src="/img/size.png" layout="fill" alt="" /> */}
              <span className="border font-bold text-xl border-gray-500  rounded-full p-3">
                M
              </span>
            </div>
            <div className="" onClick={() => setSize(2)}>
              {/* <Image src="/img/size.png" layout="fill" alt="" /> */}
              <span className="border font-bold text-xl border-gray-500 rounded-full p-3">
                L
              </span>
            </div>
          </div>

          <h3 className="font-bold text-xl mb-5">
            Choose additional ingredients
          </h3>

          {/* additiional ingredients options */}
          <div className="flex justify-between items-center py-5">
            <div className="w-full flex space-x-2 items-center">
              <input type="checkbox" id="double" name="double" className="" />
              <label htmlFor="double">Double Ingredients</label>
            </div>
            <div className="w-full flex space-x-2 items-center">
              <input
                // className="flex space-x-2 items-center"
                type="checkbox"
                id="cheese"
                name="cheese"
              />
              <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div className="w-full flex space-x-2 items-center">
              <input
                // className="flex space-x-2 items-center"
                type="checkbox"
                id="spicy"
                name="spicy"
              />
              <label htmlFor="spicy">Spicy Sauce</label>
            </div>
            <div className="w-full flex space-x-2 items-center">
              <input className="" type="checkbox" id="garlic" name="garlic" />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <input type="number" defaultValue={1} className="" />
            <button className="bg-[#F72D57] text-white px-5 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SingleProductPage;
