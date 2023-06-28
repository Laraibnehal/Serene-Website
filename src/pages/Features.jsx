import React from "react";

const FeatureContainer = ({ feature ,logo,description}) => {
  return (
    <div className="border-2 flex-col justify-between border-sky-900 p-2 w-[90%] md:w-[250px]  my-3 md:my-0 md:mx-3 cursor-pointer hover:bg-sky-600 hover:text-white  h-56 rounded-3xl">
      
      <p style={{
        fontSize: "40px",
        color: "rgb(12 74 110)",
        margin: "0",
        padding: "0",
        textAlign:"left"
        

      }}>{logo }</p>
    
      <p >{feature}</p>
      <p className=" mt-4  w-full text-sm ">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="w-full p-4 md:p-8 md:py-16 flex flex-col items-center justify-center">
      <h1 className="text-center font-cursive text-7xl text-gray-600 mb-10">
        special features
      </h1>
      <div className="mt-5 flex flex-col md:flex-row justify-center w-full items-center">
        <FeatureContainer logo={<i class="fa-solid fa-infinity"/>} feature={"Long Lasting"} description={"Our scents are carefully crafted to linger on your skin, leaving a captivating trail that lasts throughout the day."} />
        <FeatureContainer logo={<i className="fas fa-user-shield "/>} feature={"Skin Safe"} description={"Our fragrances are carefully crafted with skin-safe ingredients, providing a gentle and enjoyable experience without compromising on safety. "} />
        <FeatureContainer logo={<i class="fa-solid fa-heart"/>} feature={"Cruelty Free"} description={"At Serene Perfume, we take pride in offering cruelty-free fragrances, ensuring that no animals are harmed in the production or testing process."} />
        <FeatureContainer logo={<i class="fas fa-hand-holding-dollar"/>} feature={"Affordable Prices"} description={" Experience the allure of our affordable fragrances and enhance your everyday moments with a touch of elegance and sophistication."} />
      </div>
    </div>
  );
};

export default Features;
