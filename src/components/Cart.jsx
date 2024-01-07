import React, { useState } from 'react';
import items from '../perfumeData.json';
import Quantity from './Quantity';
import axios from 'axios';
import { useEffect } from 'react';
function Cart() {
 const [currentItemIndex, setCurrentItemIndex] = useState(0);

 const currentItem = items[currentItemIndex];
 const[cart,setcart] = useState([])
 useEffect(()=>{
   axios.get("/api/cart")
   .then((response)=>{
     setcart(response.data)
   })
   .catch((error)=>{
     console.log("Error in fetching data");
   })
 })
 return (
    <div className="w-screen flex">
      {/* <h1>Data from Backend</h1> */}
      <div>
      
          <div
            className="w-[50%] h-screen flex flex-1 flex-row md:flex-col items-center justify-center overflow-hidden "
            
          >
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="w-full md:w-[50%] overflow-hidden object-cover bg-slate-500 left-0"
            />
          </div>
        <div className="flex flex-1 flex-col">
          <h3 className="text-3xl m-6 h-[35px] ">
            {currentItem.name} Eau de Parfum( {currentItem.quantity})
          </h3>
          <p>{currentItem.rating}</p>
          <p>{currentItem.description}</p>
          <p>Price: ${currentItem.price}</p>
          <Quantity />
          <button className="p-2 text-black hover:text-white   hover:bg-sky-900 text-center bg-white w-[30%] ml-6 mb-2 border-2 border-black hover:border-white mt-6">
            Buy Now
          </button>
        </div>
       
      </div>
    </div>
 );
}

export default Cart;