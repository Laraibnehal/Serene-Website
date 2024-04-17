import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import {FaInstagram, FaFacebook} from "react-icons/fa"
function Footers() {
 
  return (
   
    <div className='dark:bg-slate-800 w-full whitespace-nowrap overflow-hidden text-wrap'>
    {/* {web menu} */}
    <section className='  contact-short max-w-2xl mx-auto rounded-2xl shadow-cyan-300 bg-slate-200 p-2 md:p-4 md:max-w-4xl md:text-center md:mt-24 translate-y-0 md:translate-y-2/4'>
    <div className='flex flex-col  md:flex-row justify-between'>
<div className='mt-4'>
    <h3 className='md:text-2xl text-xl font-semibold'>Ready to get started?</h3>
    <h3 className='md:text-2xl font-semibold'>Talk to us Today</h3>
</div>
<div className=' '>

<button className=" text-black hover:text-white   hover:bg-sky-900  text-center bg-white rounded-md w-32 ml-3 mb-5 border-2 border-black hover:border-white p-2 mt-5">
    <Link to="/Contact"> Contact Us </Link>
</button>
</div>
    </div>

    </section>
    
    <footer className=' bg-cyan-900 md:pt-24 pt-10 '>
<div className=' ml-0 md:ml-24  flex justify-between content-between sm:flex-row flex-col'>

<div className='footer-about p-1 hidden md:block'>
<h3 className='mb-3 mt-4 text-zinc-200'>Serene</h3>
<p className='text-white'>Make Them Remember</p>

</div>
<div className='footer-subscribe ml-8 '>
    <h3 className=' text-zinc-200'>Subscribe To Our Newsletter!</h3>
    <form action='#'  >
    <input type="text" placeholder='Your Email Address...' className='border-black md:w-56 w-58 border-2 '/>
<input type='submit' value="Subscribe" className=' text-black hover:text-white   hover:bg-sky-900  text-center bg-white rounded-md flex  mb-5 border-2 border-black hover:border-white p-1 mt-5'/>
    </form>
</div>
<div className='footer-social md:pr-3 pr-5 ml-9'>
    <h3 className='text-zinc-200 mb-4 mt-5 text-md '>Follow Us</h3>
<div className=' flex  items-center space-x-2'>
<div className='p-3 rounded-3xl border-2 border-white'>
<a href='https://www.instagram.com/___serene.__/' target='_blank'><FaInstagram className="relative cursor-pointer text-xl text-white"/></a>

</div>
<div className='flex relative  cursor-pointer text-2xl'>
<div className='p-3 rounded-3xl border-2 border-white'>
<a href="https://www.facebook.com/profile.php?id=100079662549115" target='_blank'><FaFacebook className="relative cursor-pointer text-xl text-white"/></a>
</div>
</div>
</div>
</div>


<div className='footer-contact ml-9 md:mr-12 mb-0'>
    <h3 className='text-zinc-200 mb-4 mt-5 text-md'>Call Us</h3>
   <a href='tel: +91 9073228268' className='text-zinc-200 hover:text-blue-500'>+91 907 3228 268</a>
</div>
</div>
{/* //bottom footer */}
<div className='footer-bottom--section pt-8 md:pt-9 '>
    <hr className='mb-3 h-1 border-zinc-700'/>
    <div className='flex justify-between text-zinc-200 ml-0 md:ml-24 md:flex-row flex-col '>
        <p className='flex  items-center md:mb-0 mb-2'>@{new Date().getFullYear()} Serene. All Rights Reserved</p>
        <a href="https://github.com/Laraibnehal" className="text-cyan-200 hover:text-zinc-400 flex items-center md:mb-0 mb-2">  Laraib Nehal  </a>
       
    <div className='text-zinc-200 cursor-pointer flex flex-col md:flex-col  text-wrap mr-12 justify-between md:justify-center'>

    <Link to="/privacy-policy" className='hover:text-blue-700 pb-1 '>PRIVACY POLICY</Link>
    <Link to="/terms" className='hover:text-blue-700 pb-1'> TERMS & CONDITIONS</Link>
    <Link to="/Cancellation-policy" className='hover:text-blue-700 pb-1 '>CANCELLATION POLICY</Link>
    <Link to="/refund-policy" className='hover:text-blue-700 pb-1 '>REFUND POLICY</Link>
    </div>
  
    </div>


</div>
    </footer>
    {/* mobile view */}
    <footer className='md:pt-0'>
<div>

</div>
    </footer>
    </div>
   
  )
}



//       <section className='contact-short max-w-3xl  rounded-2xl shadow-cyan-300 bg-slate-200 p-6 md:p-10 md:max-w-4xl md:text-center md:mt-24'>
//         <div className='grid grid-cols-2 gap-8'>
//           <div className='mt-4'>
//               <h3 className='text-2xl font-semibold'>Ready to get started?</h3>
//               <h3 className='text-2xl font-semibold'>Talk to us Today</h3>
//           </div>
//           <div className='justify-self-center self-center md:justify-self-end'>
//             <button className="bg-white text-black hover:text-white hover:bg-sky-900 text-center rounded-md w-32 ml-3 mb-5 border-2 border-black hover:border-white p-2 mt-5">
//               <Link to="/Contact"> Contact Us </Link>
//             </button>
//           </div>
//         </div>
//       </section>
//       <footer className='pt-0 bg-cyan-900 md:pt-24'>
//         <div className='container grid grid-cols-4 ml-0 md:ml-24 gap-8'>
//           <div className='footer-about p-1 rounded-3xl border-zinc-700 '>
//             <h3 className='mb-3 mt-4 text-zinc-200'>Serene</h3>
//             <p className='text-white'>Make Them Remember</p>
//           </div>
//           <div className='footer-subscribe flex-shrink-0'>
//               <h3 className='mb-1 mt-4 text-zinc-200'>Subscribe To Our Newsletter!</h3>
//               <form action='#'  >
//               <input type="text" placeholder='Your Email Address...' className='border-black md:w-56 w-28 border-2 p-2 md:mt-5 mt-3'/>
//               <input type='submit' value="Subscribe" className=' text-black hover:text-white   hover:bg-sky-900  text-center bg-white rounded-md w-28 ml-0 md:ml-3 mb-5 border-2 border-black hover:border-white p-1'/>
//               </form>
//           </div>
//           <div className='footer-social md:pr-3 pr-5'>
//               <h3 className='text-zinc-200 mb-4 mt-5 text-md'>Follow Us</h3>
//               <div className=' flex gap-8'>
//                 <div className='p-3 rounded-3xl border-2 border-white'>
//                   <a href='https://www.instagram.com/___serene.__/' target='_blank'><FaInstagram className="relative cursor-pointer text-xl text-white"/></a>
//                 </div>
//                 <div className='flex gap-2 cursor-pointer relative text-2xl'>
//                   <div className='p-3 rounded-3xl border-2 border-white'>
//                     <a href="https://www.facebook.com/profile.php?id=100079662549115" target='_blank'><FaFacebook className="relative cursor-pointer text-xl text-white"/></a>
//                   </div>
//                 </div>
//               </div>
//           </div>
//           <div className='footer-contact ml-6 md:ml-0'>
//               <h3 className='text-zinc-200 mb-4 mt-5 text-md'>Call Us</h3>
//               <a href='tel: +91 9073228268' className='text-zinc-200 hover:text-blue-500'>+91 907 3228 268</a>
//           </div>
//         </div>
//         {/* //bottom footer */}
//         <div className='footer-bottom--section pt-36 md:pt-9 '>
//             <hr className='mb-3 h-1 border-zinc-700'/>
//             <div className='grid grid-cols-3 text-zinc-200 ml-0 md:ml-24 gap-8'>
//                 <p>{new Date().getFullYear()} Serene. All Rights Reserved</p>
//                 <a href="https://github.com/Laraibnehal" className="text-cyan-200 hover:text-zinc-400 ">
//                     Laraib Nehal
//                   </a>
              
// const Wrapper = styled.section`
//   .iSIFGq {
//     margin: 0;
//   }

//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);

//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }

//   footer {
//     padding: 14rem 0 9rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 9rem;

//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;

//       .grid div:last-child {
//         justify-self: center;
//       }
//     }

//     footer {
//       padding: 9rem 0 9rem 0;
//     }

//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }


export default Footers;
