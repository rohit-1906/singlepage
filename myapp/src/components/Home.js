import React from "react";
import img from './images/download (1)-removebg-preview.jpg';
import './Tour.css';
function Input(props){

   return( 
   <>
   <div className="Home">
   <h1>{props.title}<img src={img} alt='logo'/></h1>
   
   </div>
   <div>
    <input type='search' autoComplete='off' placeholder='Search for Trips'></input>
    </div>
    <div class = "bat">
      
    </div>
    </>
   )
}

export default Input;