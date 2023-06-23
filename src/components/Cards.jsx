import React from "react";

const Cards = ({ image, cost, name, description, ratings, quantity }) => {
  return (
    <div className="w-[300px] cursor-pointer shadow-lg">
      {image && <img src={image} className="w-full h-[250px] object-cover" />}
      <div className="p-4">
        <p className="text-2xl">
          {name} {quantity && <span className="text-lg">( {quantity} ) </span>}
        </p>
        <p className="text-sm my-2 h-[65px]">{description}</p>
      </div>
      <div className="p-4 text-center bg-orange-900">
        <p className="text-white">Rs {cost}</p>
      </div>
    </div>
  );
};

export default Cards;
