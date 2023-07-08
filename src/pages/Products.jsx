import React from "react";

import { Cards } from "../components";
import { Link } from "react-router-dom";

// External Imports
// import { Carousel } from "@trendyol-js/react-carousel";

import Adira30 from "../assets/adira-30.jpg";
import Cher30 from "../assets/cher-30.jpg";
import Lubov30 from "../assets/lubov-30.jpeg";
import ArcaneTester from "../assets/imgtester.jpeg"

const Products = () => {
  return (
    <>
      <div className="w-full p-4 md:p-8 md:py-16 flex flex-col items-center justify-center">
        <h1 className="font-cursive text-7xl text-gray-600 mb-10 text-center">
          gallery
        </h1>
        <div className="my-4 w-full flex flex-wrap md:flex-row items-center justify-center gap-2 ">
          <Cards
            image={Adira30}
            name="Adira"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"Rs. 379 /-"}
          />
          <Cards
            image={Cher30}
            name="Cher"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"Rs. 379 /-"}
          />
          <Cards
            image={Lubov30}
            name="Lubov"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"Rs. 379 /-"}
          />
          <Cards
            image={ArcaneTester}
            name="Arcane"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"2 ML"}
            cost={"Rs. 30 /-"}
          />
        <Link to='/all-perfumes'>
          <button className=" text-black hover:text-white   hover:bg-sky-900  text-center bg-white rounded-md w-32 ml-3 mb-2 border-2 border-black hover:border-white p-2 mt-7">See More</button>
        </Link>
        </div>
      </div>
      <div className="w-full p-4 md:p-8 md:py-16 flex flex-col items-center justify-center">
        <h1 className="text-center font-cursive text-7xl text-gray-600 mb-10">
          best seller fragrances
        </h1>
        <div className="my-4 w-full flex flex-col md:flex-row items-center justify-center gap-2">
          <Cards
            image={Adira30}
            name="Adira"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"10 ML"}
            cost={"Rs. 299 /-"}
          />
          <Cards
            image={Cher30}
            name="Cher"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"Rs. 599 /-"}
          />
       <Cards
            image={Lubov30}
            name="Lubov"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"Rs. 379 /-"}
          />
          <Cards
            image={ArcaneTester}
            name="Arcane"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"2 ML"}
            cost={"Rs. 30 /-"}
          />
        </div>
        <Link to='/all-perfumes'>
          <button className=" text-black hover:text-white   hover:bg-sky-900  text-center bg-white rounded-md w-32 ml-3 mb-2 border-2 border-black hover:border-white p-2 mt-7">See More</button>
        </Link>
      </div>
    </>
  );
};

export default Products;
