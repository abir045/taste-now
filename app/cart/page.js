import React from "react";

const CartPage = () => {
  return (
    <div className="flex flex-col items-center md:items-center md:justify-around md:flex-row mx-[5%] pb-[5%]">
      {/* table */}
      <div className="relative overflow-x-auto mt-[5%] w-full ">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="font-bold px-6 py-3">
                Product
              </th>
              <th scope="col" className="font-bold px-6 py-3">
                Name
              </th>
              <th scope="col" className="font-bold px-6 py-3">
                Extras
              </th>
              <th scope="col" className="font-bold px-6 py-3">
                Price
              </th>
              <th scope="col" className="font-bold px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="font-bold px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="fonr-bold px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="fonr-bold px-6 py-4">Silver</td>
              <td className="fonr-bold px-6 py-4">Laptop</td>
              <td className="fonr-bold px-6 py-4">$2999</td>
              <td className="fonr-bold px-6 py-4 text-center">1</td>
              <td className="fonr-bold px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="fonr-bold px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="fonr-bold px-6 py-4">White</td>
              <td className="fonr-bold px-6 py-4">Laptop PC</td>
              <td className="fonr-bold px-6 py-4">$1999</td>
              <td className="fonr-bold px-6 py-4 text-center">1</td>
              <td className="fonr-bold px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="fonr-bold px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="fonr-bold px-6 py-4">Black</td>
              <td className="fonr-bold px-6 py-4">Accessories</td>
              <td className="fonr-bold px-6 py-4">$99</td>
              <td className="fonr-bold px-6 py-4 text-center">1</td>
              <td className="fonr-bold px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col  mt-[5%]  bg-gray-500 text-white px-8 py-8 items-center">
        <div className="space-y-3">
          <h2 className="">CART TOTAL</h2>
          <div className="">
            <b className="">Subtotal:</b>$79.60
          </div>
          <div className="">
            <b className="">Discount:</b>$0.00
          </div>
          <div className="">
            <b className="">Total:</b>$79.60
          </div>
          <button className="">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
