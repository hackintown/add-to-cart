import React from "react";
import list from "./List";
import Card from "./Card";

const Shop = ({ handleClick }) => {
  return (
    <section className="container mx-auto my-10 p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Shop Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {list.map((item) => {
          return (
            <Card
              key={item.id}
              item={item}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
