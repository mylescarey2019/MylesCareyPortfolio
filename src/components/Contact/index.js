// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Contact = (props) => (
      <div className="contact-box d-inline-block">
        {/* <img className="img-fluid skill-img" src={process.env.PUBLIC_URL + props.skill} alt={props.skillName}></img> */}
        <p className="contact-name">{props.name}</p>
      </div>   
    )

export default Contact;