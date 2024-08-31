import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex justify-between py-3 px-5 bg-gray-700 text-white">
      <Link to="/" className="text-2xl font-bold">
        Shop
      </Link>
      <Link
        to="/cart"
        className="text-xl flex items-center text-white no-underline"
      >
        <BsCart className="mr-2" />
        {cart.length}
      </Link>
    </div>
  );
};

export default Navbar;
