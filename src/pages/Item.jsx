import React from 'react'

function Item() {
  return (
    <div className=' container flex flex-row justify-center content-center my-3 md:my-0 md:mx-3'>
      <div className=' gap-16 grid grid-cols-3 '>
      <div className='services-1 flex flex-col justify-center md:w-auto w-[90%] h-96 p-4 rounded-md shadow-lg shadow-indigo-500/40 content-center bg-slate-200'>

      <i class="fa-solid fa-infinity"/>
        <h1 className="text-xl font-bold">Long Lasting</h1>
        <p className="my-2 text-lg">Our scents are carefully crafted to linger on your skin, leaving a captivating trail that lasts throughout the day.
        </p>
      </div>

      <div className=" services-2 gap-16 bg-transparent shadow-none flex flex-col justify-center w-auto content-center  ">
    <div className='services-column-2 bg-slate-200 flex justify-center flex-col content-center rounded-md p-4 shadow-indigo-500/40'>
    <i className="fas fa-user-shield "/>
    <h1 className="text-xl font-bold">Skin Safe</h1>
    <p className="my-2 text-lg">Our fragrances are carefully crafted with skin-safe ingredients, providing a gentle and enjoyable experience without compromising on safety.</p>
    </div>
    <div className='services-column-2  bg-slate-200 flex justify-center flex-col content-center rounded-md p-4 shadow-indigo-500/40'>
    <i class="fa-solid fa-heart text-red-600"  />
    <h1 className="text-xl font-bold">
Cruelty Free</h1>
<p className="my-2 text-lg">At Serene Perfume, we take pride in offering cruelty-free fragrances, ensuring that no animals are harmed in the production or testing process.</p>
    </div>
      </div>
    <div className='flex flex-col justify-center w-auto h-96 p-4 rounded-md shadow-lg shadow-indigo-500/40 content-center bg-slate-200'>
    <i class="fas fa-hand-holding-dollar"/>
    <h1 className="text-xl font-bold">Affordable Prices</h1>
    <p className="my-2 text-lg">Experience the allure of our affordable fragrances and enhance your everyday moments with a touch of elegance and sophistication.</p>
    </div>
      </div>
    </div>
  )
}

export default Item
