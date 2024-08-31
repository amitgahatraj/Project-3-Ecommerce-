import React, { useState, useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";

const Navbar = ({ onSearch }) => {
  const { cart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    console.log("Search change event fired");
    const value = e.target.value;
    console.log("Search Query:", value);
    setSearchQuery(value);
    onSearch(value); // Call onSearch with the current value
  };

  return (
    <div className="flex justify-between items-center py-3 px-5 bg-gray-700 text-white">
      <Link to="/" className="text-2xl font-bold">
        Shop
      </Link>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="p-2 border border-gray-300 rounded text-black"
      />
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
