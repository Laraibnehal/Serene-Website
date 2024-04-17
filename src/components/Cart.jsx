import React , {useState} from 'react'

function Cart() {
  // const [cartItems, setCartItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const currentItem = items[currentItemIndex];

  const addToCart = (item) => {

    console.log('Added to cart:', currentItem.name);
 
  };
  const handleNextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePreviousItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className='w-screen'>
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden ">
        <img src={currentItem.image} alt={currentItem.name} className="w-full md:w-1/2 overflow-hidden object-cover bg-slate-500" />
   
        <p>{currentItem.rating}</p>
    <h3 className='text-3xl m-6 '>{currentItem.name} Eau de Parfum</h3>
        <p m-6>{currentItem.quantity}</p>
        <p>{currentItem.description}</p>
        <p>{currentItem.cost}</p>
      

    <br/>
        <p>Price: ${currentItem.price}</p>
        <button onClick={addToCart}>Add to Cart</button>
          
        <div>
        <button onClick={handlePreviousItem}>Previous Item</button>
        <button onClick={handleNextItem}>Next Item</button>
      </div>
    </div>

 
  </div>
  )
}

export default Cart
