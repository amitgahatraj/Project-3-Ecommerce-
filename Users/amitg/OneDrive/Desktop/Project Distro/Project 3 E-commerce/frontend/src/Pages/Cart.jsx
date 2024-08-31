import React, { useContext, useState } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../Components/CartProduct";
import { totalItem, totalPrice } from "../Features/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCheckoutClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-3">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3">
          {cart.map((p) => (
            <CartProduct product={p} key={p.id}></CartProduct>
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-700 p-4 text-white rounded">
            <h5 className="text-lg">Total Items: {totalItem(cart)}</h5>
            <h5 className="text-lg">Total Price: ${totalPrice(cart)}</h5>
            <button
              className="mt-3 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>
            <p>Total Items: {totalItem(cart)}</p>
            <p>Total Price: ${totalPrice(cart)}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => {
                  closeModal();
                  alert("Checkout successful!");
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
