import React from "react";

const Card = ({ item, handleClick }) => {
  const { title, author, price, img, amount } = item;
  return (
    <div className="shadow-md p-4 flex items-center flex-col border">
      <div className="max-w-[150px]">
        <img src={img} alt="image" />
      </div>
      <div className="flex flex-col items-center justify-center my-5 gap-2">
        <p>{title}</p>
        <p>{author}</p>
        <p> Price - {price}Rs</p>
        <button
          onClick={() => handleClick(item)}
          className="bg-blue-500 px-2 py-1 rounded-md text-white text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
