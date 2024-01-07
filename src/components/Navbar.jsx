// Internal Imports
import React, { useState } from "react";

// External Imports
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const { loginWithRedirect, isAuthenticated , logout, user} = useAuth0();

  return (
    <>
      <div className="shadow-lg  p-4 md:px-8 sticky flex w-auto justify-between items-center   bg-gray-100">      
    <Logo/>
        <i
          class="fa fa-bars md:hidden " onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`w-[30%] fixed top-0 h-screen ${
            showMobileMenu ? "right-0" : "right-[-80%]"
          } md:hidden transition-all duration-300`}
        >
          <div className="backdrop-opacity-95 bg-sky-700  text-white flex p-6 flex-col justify-center w-90 h-full">
            {/* Close Button */}
            <div className="absolute top-12 right-20 text-3xl z-50 flex-1 " onClick={toggleMobileMenu}>
              <i class="fa-solid fa-xmark"></i>
            </div>

            <Link to="/all-perfumes" className="my-2 text-xl  hover:text-sky-900">
              All Perfumes
            </Link>
            <Link to="/gifts" className="my-2 text-xl hover:text-sky-900">
              Gifts
            </Link>
            <Link to="/about" className="my-2 text-xl hover:text-sky-900">
              About Us
            </Link>
            <Link to="/contact" className="my-2 text-xl hover:text-sky-900">
              Contact Us
            </Link>
            <Link to="/cart" className="my-2 text-xl hover:text-sky-900">
              Your Cart
              <i className="fa-solid fa-cart-shopping ml-4" />
            </Link>  
            {/* {
            !isAuthenticated ? (
              <ul  className="my-2 text-xl hover:text-sky-900">
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
            </ul>
            ) : (
              <ul >
          <button onClick={() => loginWithRedirect()} className="my-2 text-xl hover:text-sky-900">Log In</button>;
          
          </ul>
            )

          } */}
           
          </div>
        </div>

        {/* Web Menu */}
        <div className="hidden md:block md:ml-10 items-center justify-center ">
          <Link to="/all-perfumes" className="mx-3 hover:text-sky-900">
            All Perfumes
          </Link>
          <Link to="/gifts" className="mx-3 hover:text-sky-900">
            Gifts
          </Link>
          <Link to="/about" className="mx-3 scroll-smooth hover:text-sky-900">
            About Us
          </Link>
          <Link to="/contact" className="my-3  hover:text-sky-900">
              Contact Us
            </Link>
        </div>

        {/* Web Menu */}
        <div className="hidden md:block hover:text-sky-900 ">
          <Link to="/cart ">
            Your Cart
            <i className="fa-solid fa-cart-shopping ml-3" />
          </Link>
          </div>
          {/* <div className="hidden md:block hover:text-sky-900">

          {/* {
            !isAuthenticated ? (
              <ul>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>   
            </ul>
            ) : (
            )
          } */}
              {/* <ul >
          <button onClick={() => loginWithRedirect()}>Log In</button>;         
          </ul> */}
          {/* </div> */} 
       
      </div>
    </>
  );
};

export default Navbar;
