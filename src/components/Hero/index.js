import React from 'react';
import './style.css';

const Hero = (props) => (
      <div>
      <div id="hero">
        <img className="img-fluid" src={props.heroimg} alt={"hero"}/>
      </div>   
      </div>
    )

export default Hero;