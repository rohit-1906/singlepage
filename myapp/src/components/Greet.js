import React from 'react';
import './Tour.css';
 

import { Link } from 'react-router-dom';

function Render(){
    return (
        <div>
          <nav class = "navbar">
        <ul className='containers'>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to = "/Places">places</Link></li>
          <li><Link to="/Hotels" >Hotels</Link></li>
          <li>Guides</li>
          <li>vehicles</li>
        </ul>
        <ul className='containers'>
          <li><Link to = '/Login'>Login</Link></li>
          <li>Signup</li>
          </ul>
      </nav>
    </div>

    )
    
}


export default Render;
