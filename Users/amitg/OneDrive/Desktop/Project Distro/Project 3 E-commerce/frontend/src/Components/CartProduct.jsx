import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="flex border mb-3 p-3">
      <img
        src={product.thumbnail}
        className="w-1/4 h-1/4 object-cover"
        alt=""
      />
      <div className="ml-4">
        <h4 className="text-lg font-semibold">{product.title}</h4>
        <h5 className="text-md text-gray-700">${product.price}</h5>
        <div className="flex items-center space-x-2 mt-2">
          <button
            className="rounded-full px-3 py-1 bg-gray-200 hover:bg-gray-300"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <span className="px-3 py-1 border rounded">{product.quantity}</span>
          <button
            className="rounded-full px-3 py-1 bg-gray-200 hover:bg-gray-300"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="mt-3 px-4 py-1 bg-yellow-500 text-white text-sm font-medium rounded hover:bg-yellow-600"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
