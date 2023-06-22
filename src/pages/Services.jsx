import React from "react";

const ServicesContainer = ({ feature }) => {
  return (
    <div className="border-4 border-yellow-900 p-6 w-[250px] text-center my-3 md:my-0 md:mx-3 cursor-pointer hover:bg-yellow-900 hover:text-white text-xl">
      <p>{feature}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="w-full p-4 md:p-8 md:py-16 flex flex-col items-center justify-center">
      <h1 className="font-cursive text-7xl text-gray-600 mb-10">
        our services
      </h1>
      <div className="mt-5 flex flex-col md:flex-row ">
        <ServicesContainer feature={"Fast Delivery"} />
        <ServicesContainer feature={"Pre Paid"} />
        <ServicesContainer feature={"Secure Checkout"} />
      </div>
    </div>
  );
};

export default Services;
