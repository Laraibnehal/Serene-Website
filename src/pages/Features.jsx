import React from "react";

const FeatureContainer = ({ feature ,logo,description}) => {
  return (
    <div className="border-2 grid-cols-3   w-[90%] md:w-[250px] flex flex-col justify-center  h-96 p-4  shadow-lg shadow-indigo-500/40 content-center bg-slate-200 my-3 md:my-0 md:mx-3 cursor-pointer   rounded-3xl">
 
      <p style={{
        fontSize: "40px",
        color: "rgb(12 74 110)",
        margin: "0",
        padding: "0",
        textAlign:"left"
        

      }}>{logo }</p>
    
      <p className="text-lg font-bold">{feature}</p>
      <p >{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="w-full p-4 md:p-8 md:py-16 flex flex-col items-center justify-center">
      <h1 className="text-center font-cursive text-7xl text-gray-600 mb-10">
        special features
      </h1>
      <div className="mt-5 flex flex-col md:flex-row justify-center w-full items-center ">
        
        <FeatureContainer logo={<i class="fa-solid fa-infinity"/>} feature={"Long Lasting"} description={"Our scents are carefully crafted to linger on your skin, leaving a captivating trail that lasts throughout the day."} />
        <div className="  flex justify-center flex-col content-center rounded-md p-4 shadow-indigo-500/40">

        <FeatureContainer logo={<i className="fas fa-user-shield "/>} feature={"Skin Safe"} description={"Our fragrances are carefully crafted with skin-safe ingredients, providing a gentle and enjoyable experience without compromising on safety. "} />
        </div>
        <div className='services-column-2   flex justify-center flex-col content-center rounded-md p-4 shadow-indigo-500/40'>

        <FeatureContainer logo={<i class="fa-solid fa-heart"/>} feature={"Cruelty Free"} description={"At Serene Perfume, we take pride in offering cruelty-free fragrances, ensuring that no animals are harmed in the production or testing process."} />
        </div>
        <FeatureContainer logo={<i class="fas fa-hand-holding-dollar"/>} feature={"Affordable Prices"} description={" Experience the allure of our affordable fragrances and enhance your everyday moments with a touch of elegance and sophistication."} />
      </div>
    </div>
  );
};

export default Features;
