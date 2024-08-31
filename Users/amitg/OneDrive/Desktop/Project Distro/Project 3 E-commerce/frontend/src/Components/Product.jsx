import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
        <img
          src={product.thumbnail}
          className="w-full h-48 object-cover"
          alt={product.title}
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h4 className="text-lg font-semibold">{product.title}</h4>
          <h5 className="text-gray-700 text-lg">${product.price}</h5>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
