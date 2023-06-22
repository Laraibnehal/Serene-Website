import React from "react";

// Assets
import Perfume1 from "../assets/perfume1.jpg";
import Perfume2 from "../assets/perfume2.jpg";

const Home = () => {
  return (
    <div className="w-screen">
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <img src={Perfume1} className="w-1/2 overflow-hidden" />
        <img src={Perfume2} className="w-1/2 overflow-hidden" />
      </div>
    </div>
  );
};

export default Home;
