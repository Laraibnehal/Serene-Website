// External Imports
import { Routes, Route, Await } from "react-router-dom";
import {React, useEffect, useState } from "react";
// Internal Imports
import routes from "./routes";
import Axios from 'axios'
// Components
import { Navbar, NotificationBar } from "./components";
import Footers from "./components/Footers";
import Error from "./pages/Error";

const App = () => {
  // const [data,setData]=useState("")
  // const getData= async()=>{
  //   const response = await Axios.get('http://localhost:3000/getData',data);
  //   setData(response.data)

  // }
  // useEffect(()=>{
  //   getData()
  // },[])
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
      {/* <Error/> */}
      <Footers/>
  
      {/* {data} */}
    </div>
 
  );
};

export default App;
