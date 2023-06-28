import React from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
const Cards = ({ image, cost, name, description, ratings, quantity }) => {
  return (
    <div className=" cursor-pointer shadow-lg " >
      {image && <img src={image} className="w-full h-[250px] object-cover" />}
      <div className="p-4 w-[95%] md:w-[300px]">
        <p className="text-2xl justify-between flex">
          {name} {cost && <span className="text-lg "> {cost} </span>}
        </p>
        <p className="text-sm my-2 h-[65px]">{description}</p>
        <Rating name="read-only" defaultValue={4} readOnly size="small"/>
         
      </div>
      <div className="p-2 text-black hover:text-white   hover:bg-sky-600  text-center bg-white rounded-full w-32 ml-3 mb-2 border-2 border-black hover:border-white">
        {/* <p className="text-white">Rs {cost}</p> */}
        <Link to='/cart'>
        <button>Add to Cart</button>

        </Link>
      </div>
    </div>
  );
};

export default Cards;
