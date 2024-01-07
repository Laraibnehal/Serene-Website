import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/serene logo(black).png'
function Logo() {
  return (
    <div>
          <p>
        <Link to="/" className="  flex hover:text-sky-900">
         Serene
         {/* <img src={logo} className="w-52 h-16 max-h-36"/> */}
        </Link></p>
    </div>
  )
}

export default Logo