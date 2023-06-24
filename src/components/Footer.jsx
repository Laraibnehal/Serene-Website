import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-screen p-4 md:p-8 md:py-1 bg-yellow-950 text-white ">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <Link to="/terms" className="my-2 text-xs px-6 py-3 ml-5">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="my-2 text-xs px-6 py-3 ml-5">
              Refund Policy
            </Link>
            <Link to="/privacy-policy" className="my-2 text-xs px-6 py-3 ml-5">
              Privacy Policy
            </Link>
            <Link
              to="/Cancellation-policy"
              className="my-2 text-xs px-6 py-3 ml-5"
            >
              Cancellation Policy
            </Link>
          </div>
          <div className=" text-xl px-9 py-4 mx-9 my-4 justify-center text-center ">
            <h2 className="pb-5">Contact Us at</h2>

            <p className="ml-2 flex mx-6 py-4">
              <span className="mx-3 ">Phone - </span> +91 9073228268
            </p>
            <p className="ml-2 flex">
              <span className="mx-3">Email -</span> perfumeserene@gmail.com
            </p>
          </div>
          <div className="">
            <Link to="https://www.instagram.com/___serene.__/">
              <i
                className="fa-brands fa-instagram flex-col px-7 text-4xl mx-14 my-4"
                style={{ color: "#d1e0d4" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
      <hr className="text-gray-500" />
      <div>
        <p className="text-center text-xs mt-3 mb-0 justify-center">
          © 2023,Serene created by{" "}
          <a href="https://github.com/Laraibnehal" className="text-cyan-200">
            Laraib Nehal
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
