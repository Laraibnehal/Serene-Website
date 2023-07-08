import React, {useState, useEffect} from 'react'
import img7 from '../assets/bg.jpg'
function Gifts() {
    const [countdown,setcountdown] = useState(null);

    //calculate the remaining time until the specified date
    const calculateTimeLeft = ()=>{
      const targetDate = new Date('2023-12-31');
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      if(difference > 0){
        //calculate the remaining days,hours,minutes and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        //update the countdown state
        setcountdown({
          days:days,
          hours:hours,
          minutes:minutes,
          seconds:seconds
    });
  }
}
    useEffect(()=>{
      
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft,1000);
        return()=>{
          clearInterval(timer);
        }
      },[]);
    
  return (
    <div className='h-screen w-full relative'>
        <div className=' flex   h-[100%] w-[100%] '>
        <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <img
          src={img7}
          className="w-full  overflow-hidden object-cover"
        />
      <div className='absolute top-[40%] left-[50] w-full text-center md:w-[50%] text-sky-600 bg-blue-200 font-bold p-7  mb-2'>
        <h1 className='text-2xl leading-loose'>COMING SOON</h1>
        <div className="coming-soon">
      {countdown ? (
        <div className="countdown leading-10">
          <div>{countdown.days} days / {countdown.hours} hours / {countdown.minutes} minutes / {countdown.seconds} seconds</div>
        
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
        <p className='text-sm '>Our team is working hard to bring you the best gifts for your loved ones. Stay tuned!</p>
      </div>
      </div>
      
        </div>
    </div>
  )
}

export default Gifts