// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Experience = (props) => (
  
      <div className="experience-box d-inline-block">
        <p>{props.company} - {props.date}</p>
        <p>{props.role}</p>
        <ul>
          <li className="text-left">{props.bullet1}</li>
          <li className="text-left">{props.bullet2}</li>
          <li className="text-left">{props.bullet3}</li>
          <li className="text-left">{props.bullet4}</li>
        </ul>
      </div>   
    )

export default Experience;