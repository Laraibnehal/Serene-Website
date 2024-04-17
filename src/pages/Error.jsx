import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Error = () => {
  return <div className="container p-36 text-center">
  <div>
    <h2 className="text-7xl text-sky-900">404</h2>
    <h2 className="text-4xl">Page not found!</h2>
<p className="m-5">
  The page you are looking for does not exist. Please go back to the homepage or try again later.
</p>
<Link to="/">
<button className=" text-black hover:text-white   hover:bg-sky-900  text-center bg-white rounded-md w-42 ml-3 mb-5 border-2 border-black hover:border-white p-2 mt-5">Go Back to Home Page</button>
</Link>

  </div>
  </div>;
};

export default Error;
