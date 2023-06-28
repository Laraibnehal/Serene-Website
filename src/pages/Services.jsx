import React from "react";

const ServicesContainer = ({ logo,feature,description }) => {
  return (
    <div className="border-2 flex-col justify-between border-sky-900 p-2 w-[90%] md:w-[250px]  my-3 md:my-0 md:mx-3 cursor-pointer hover:bg-sky-600 hover:text-white  h-56 rounded-3xl">
 

          
 <p style={{
        fontSize: "26px",
        color: "rgb(12 74 110)",
        margin: "0",
        padding: "0",
        textAlign:"left"
        

      }}>{logo }</p>
    
      <p >{feature}</p>
      <p className=" mt-4 m-auto w-full text-sm  ">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="w-full p-4 md:p-8 md:py-16 flex flex-col items-center justify-center">
      <h1 className="text-center font-cursive text-7xl text-gray-600 mb-10">
        our services
      </h1>
      <div className="mt-5 flex flex-col md:flex-row justify-center w-full items-center">
        <ServicesContainer logo={<i class="fa-solid fa-truck"/>} feature={"Fast Delivery"}  
          description={"Trust us for swift and hassle-free delivery, bringing the essence of serenity right to your doorstep."}
        />
        <ServicesContainer  logo={<i class="fas fa-hand-holding-dollar"/>} feature={"Pre Paid"} description={"By paying upfront for a predetermined amount of perfume, customers can better manage their expenses and avoid unexpected costs. "} />
        <ServicesContainer logo={<i class="fa-solid fa-lock"/>} feature={"Secure Checkout"} description={"Knowing that your transactions are securely processed, allowing you to focus on the delightful experience of exploring and selecting the perfect scents from our collection."}
        />
      </div>
    </div>
  );
};

export default Services;
