import React, { useState } from 'react';

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);


  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
      <div className='flex flex-col text-center justify-between align-middle'>
    <h2 className='mt-4 flex-1 flex justify-items-center text-justify ml-14 tracking-widest font-semibold'>QUANTITY</h2>
      <div className='flex border-2 w-[20%] ml-9  font-3  h-[30px]  justify-center cursor-pointer  text-black font-semibold  mt-2  mb-2  pr-7 pl-7 border-black'>
      <button onClick={handleDecrease}>
        &#8722;
      </button>
      <h2 className='ml-6 mr-6'> {quantity}</h2>
      <button  onClick={handleIncrease}>
        &#43;
      </button>
        
      </div>
  
    </div>
  );
};

export default Quantity;
