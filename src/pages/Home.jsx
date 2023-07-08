import React from "react";
import { Link } from "react-router-dom";
// Assets
import Perfume1 from "../assets/perfume1.jpg";
import Perfume2 from "../assets/imgbox.jpeg";

// Pages
import About from "./About";
import Products from "./Products";
import Features from "./Features";

const Home = () => {
  return (
    <div className="w-screen">
      <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <img
          src={Perfume1}
          className="w-full md:w-1/2 overflow-hidden object-cover"
        />
        <img
          src={Perfume2}
          className="w-full md:w-1/2 overflow-hidden object-cover"
        />
      </div>


      <About id="about" className="scroll-smooth"/>

      <Products />
      <Features />
    </div>
  );
};

export default Home;
