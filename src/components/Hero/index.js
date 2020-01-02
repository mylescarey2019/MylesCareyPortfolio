// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Hero = (props) => (
      <div id="hero">
        <img className="img-fluid" src={props.heroimg} alt={"hero"}/>
      </div>   
    )

export default Hero;