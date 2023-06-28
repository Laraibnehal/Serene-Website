// Internal Imports
import React, { useState } from "react";

// External Imports
import { Link } from "react-router-dom";
import Logo from '../assets/serene logo(black) (1).png'
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <div className="shadow-lg w-full p-4 md:px-8 sticky flex justify-between items-center top-0 left-0 bg-gray-100">
        <p>
        <Link to="/" className="my-2 text-xl">
         Serene
        </Link></p>
        <i
          className="fa-solid fa-bars md:hidden font-thin"
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`w-[80%] fixed top-0 h-screen ${
            showMobileMenu ? "right-0" : "right-[-80%]"
          } md:hidden transition-all duration-300`}
        >
          <div className="backdrop-blur-md flex p-6 flex-col justify-center w-full h-full">
            {/* Close Button */}
            <div className="absolute top-5 right-5 z-50" onClick={toggleMobileMenu}>
              <i class="fa-solid fa-xmark"></i>
            </div>

            <Link to="/all-perfumes" className="my-2 text-xl">
              All Perfumes
            </Link>
            <Link to="/gifts" className="my-2 text-xl">
              Gifts
            </Link>
            <Link to="/cart" className="my-2 text-xl">
              Your Cart
              <i className="fa-solid fa-cart-shopping ml-4" />
            </Link>
          </div>
        </div>

        {/* Web Menu */}
        <div className="hidden md:block md:ml-10">
         
         
          <Link to="/all-perfumes" className="mx-3">
            All Perfumes
          </Link>
          <Link to="/gifts" className="mx-3">
            Gifts
          </Link>
        </div>

        {/* Web Menu */}
        <div className="hidden md:block">
          <Link to="/cart">
            Your Cart
            <i className="fa-solid fa-cart-shopping ml-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
