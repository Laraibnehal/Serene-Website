import React from "react";

const FeatureContainer = ({ feature }) => {
  return (
    <div className="border-4 border-yellow-900 p-6 w-[250px] text-center my-3 md:my-0 md:mx-3 cursor-pointer hover:bg-yellow-900 hover:text-white text-xl">
      <p>{feature}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="w-full p-4 md:p-8 md:py-16 flex flex-col items-center justify-center">
      <h1 className="font-cursive text-7xl text-gray-600 mb-10">
        special features
      </h1>
      <div className="mt-5 flex flex-col md:flex-row ">
        <FeatureContainer feature={"Long Lasting"} />
        <FeatureContainer feature={"Skin Safe"} />
        <FeatureContainer feature={"Cruelty Free"} />
        <FeatureContainer feature={"Affordable Prices"} />
      </div>
    </div>
  );
};

export default Features;
