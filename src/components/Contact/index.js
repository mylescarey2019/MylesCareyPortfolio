// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Contact = (props) => (
      // <div className="contact-box">
        <li className="contact-list">
          <a href={props.url}>
            <i className={props.icon}></i>
          </a>
          <span className="contact-name">{props.name}</span>
        </li>

      // </div>   
    )

export default Contact;


        {/* <img className="img-fluid skill-img" src={process.env.PUBLIC_URL + props.skill} alt={props.skillName}></img> */}
        {/* <p className="contact-name">{props.name}</p> */}