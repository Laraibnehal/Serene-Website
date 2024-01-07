// Internal Imports
import React, { useState } from "react";

// External Imports
import { Link } from "react-router-dom";
import Logo from '../assets/serene logo(black) (1).png'
import Contact from "../pages/Contact";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <div className="shadow-lg w-full p-4 md:px-8 sticky flex justify-between items-center  top-0 left-0 bg-gray-100">
        <p>
        <Link to="/" className="my-2 text-xl hover:text-sky-900">
         Serene
        </Link></p>
        <i
          className="fa fa-bars md:hidden font-thin"
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`w-[60%] fixed top-0 h-screen ${
            showMobileMenu ? "right-0" : "right-[-80%]"
          } md:hidden transition-all duration-300`}
        >
          <div className="backdrop-blur-md flex p-6 flex-col justify-center w-full h-full">
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
            <Link to="/about" className="my-2 text-xl hover:text-sky-900">
              Contact Us
            </Link>
            <Link to="/cart" className="my-2 text-xl hover:text-sky-900">
              Your Cart
              <i className="fa-solid fa-cart-shopping ml-4" />
            </Link>
          </div>
        </div>

        {/* Web Menu */}
        <div className="hidden md:block md:ml-10">
         
         
          <Link to="/all-perfumes" className="mx-3 hover:text-sky-900">
            All Perfumes
          </Link>
          <Link to="/gifts" className="mx-3 hover:text-sky-900">
            Gifts
          </Link>
          <Link to="/about" className="mx-3 scroll-smooth hover:text-sky-900">
            About Us
          </Link>
          <Link to="/contact" className="mx-3 scroll-smooth hover:text-sky-900">
            Contact Us
          </Link>
        </div>

        {/* Web Menu */}
        <div className="hidden md:block hover:text-sky-900">
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
