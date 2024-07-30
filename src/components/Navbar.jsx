import React from "react";
import { FaCartPlus } from "react-icons/fa";
const Navbar = ({ cart, setShow }) => {
  return (
    <nav className="bg-gray-500 py-5 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div
          className="text-xl font-semibold text-white cursor-pointer"
          onClick={() => setShow(true)}
        >
          Add To Cart
        </div>
        <div className="relative cursor-pointer" onClick={() => setShow(false)}>
          <FaCartPlus className="size-6 text-white" />
          <span className="absolute top-2 -right-4 bg-white rounded-full w-[15px] h-[15px] flex items-center justify-center text-xs">
            {cart}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
