import React from "react";
import Logo from '../Assets/serene logo(black) (1).png'
import '../CSS/Header.css'
function Header(){
return(
    <div  className="heading">
<h3 className="heading-left">Home</h3>
<h3 className="heading-left">All Products</h3>
<h3 className="heading-left">About Us</h3>
<img src={Logo} alt="logo" className="heading-img">
</img>
<h3 className="heading-right">Contact Us</h3>
<h3 className="heading-right">Login</h3>
<h3 className="heading-right">Cart</h3>
    </div>
)

}
export default Header