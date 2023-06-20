import React from 'react';
import '../CSS/mainBody.css';
import image1 from '../Assets/20230531_083324 copy.jpg';
import image2 from '../Assets/imgbox.jpeg';
import { useState } from 'react';
// import image3 from '../Assets/img2.jpeg';
// import image4 from '../Assets/img3.jpg';
// import image5 from '../Assets/img4.jpg';
// import image6 from '../Assets/imgtester.jpeg';
 import image7 from '../Assets/img7.jpg';
 

const MainBody = () => {
    const [checked, setChecked] = React.useState(true);
  return (

    <div className="mainBody">
        <div className="mainBody__container">
            <img src={image1} className="mainBody_img" style={{
                height:"100%",
                width:"50%",
                backgroundSize:"contain",
                display:"flex",
                float:"left",
                marginRight:"10px",            
            }}></img>
            <h1 style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
                // color:"white",
                fontSize:"50px",
                fontFamily: "'Diphylleia', serif",
                fontWeight:"bold",
                // marginTop:"100px",
                marginLeft:"10px",
                marginRight:"10px",
            

            }}>Premium Non Alcoholic Perfumes</h1>
        </div>
        <div className='mainBody_right_container'>

        <label style={{
            display:"flex",
            margin:"2rem",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            flexDirection:"row",
            fontSize:"1.7rem",
            marginLeft:"2rem",
            marginTop:"1rem",
        }} >
        <input
          type="checkbox"
          checked={checked}
            // onChange={() => setChecked(!checked)}
            style={{
                color:"black",
                marginRight:"1rem",
                marginLeft:"1rem",
                height:"10rem"
            }}
        />
       All the perfumes has alcohol in it which is Harmful for skin.Serene makes non-Alcoholic Perfume. 
      </label>
        <label style={{
            display:"flex",
            margin:"2rem",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            flexDirection:"row",
            fontSize:"1.7rem",
            marginLeft:"2rem",
            // marginTop:"1rem",
        }} >
        <input
          type="checkbox"
          checked={checked}
            // onChange={() => setChecked(!checked)}
            style={{
                color:"black",
                marginRight:"1rem",
                marginLeft:"1rem",
                height:"10rem"
            }}
        />
     Hand-Made perfumes 
      </label>
        <label style={{
            display:"flex",
            margin:"2rem",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            flexDirection:"row",
            fontSize:"1.7rem",
            marginLeft:"2rem",
            // marginTop:"1rem",
        }} >
        <input
          type="checkbox"
          checked={checked}
            // onChange={() => setChecked(!checked)}
            style={{
                color:"black",
                marginRight:"1rem",
                marginLeft:"1rem",
                height:"10rem"
            }}
        />
       All the perfumes are Long Lasting
      </label>
        </div>
        <div className="mainBody__container">
            <img src={image2} className="mainBody_img" style={{
                height:"100%",
                width:"50%",
                backgroundSize:"contain",
                display:"flex",
                marginLeft:"10px",
                float:"right",

            }}></img>
        </div>
    </div>
  
 
  );
};

export default MainBody;
