// External Imports
import { Routes, Route, Await } from "react-router-dom";
import {React, useEffect, useState } from "react";
// Internal Imports
import routes from "./routes";
import Axios from 'axios'
// Components
import { Footer, Navbar, NotificationBar } from "./components";

const App = () => {

 
  return (
   
    <div className="w-screen min-h-screen bg-gray-100">
      <NotificationBar
        notification={
          "Flat 20% Discount - Use code Flat20 (Minimum order of 599/-)"
        }
      />
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Routes>
      <Footer />
  
      
    </div>
 
  );
};

export default App;
