import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
    setPrice(totalPrice);
  }, [cart]);

  return (
    <article className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
      {cart?.map((item) => (
        <div
          className="flex items-center justify-between p-4 mb-4 bg-white shadow-md rounded-lg"
          key={item.id}
        >
          <div className="flex items-center gap-4">
            <img className="w-16 h-16 object-cover rounded" src={item.img} alt={item.title} />
            <div>
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-gray-600">Price: Rs {item.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleChange(item, -1)}
              className="text-xl mx-1 bg-gray-300 px-2 py-2 rounded hover:bg-gray-400"
            >
              -
            </button>
            <span className="text-lg mx-2">{item.amount}</span>
            <button
              onClick={() => handleChange(item, +1)}
              className="text-xl mx-1 bg-gray-300 px-2 py-2 rounded hover:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="text-right mt-4">
        <span className="text-xl font-semibold">Total Price of your Cart: Rs {price}</span>
      </div>
    </article>
  );
};

export default Cart;
