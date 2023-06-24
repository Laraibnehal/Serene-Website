import React from "react";

import { Cards } from "../components";

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
        <div className="my-4 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-2">
          <Cards
            image={Adira30}
            name="Adira"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"379 /-"}
          />
          <Cards
            image={Cher30}
            name="Cher"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"379 /-"}
          />
          <Cards
            image={Lubov30}
            name="Lubov"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"379 /-"}
          />
          <Cards
            image={ArcaneTester}
            name="Arcane"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"2 ML"}
            cost={"30 /-"}
          />
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
            cost={"299 /-"}
          />
          <Cards
            image={Cher30}
            name="Cher"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"599 /-"}
          />
       <Cards
            image={Lubov30}
            name="Lubov"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"379 /-"}
          />
          <Cards
            image={ArcaneTester}
            name="Arcane"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"2 ML"}
            cost={"30 /-"}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
