// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Contact = (props) => (
        <li className="contact-list">
          <a className={props.class} href={props.url} rel="noopener noreferrer" target="_blank">
            <i className={props.icon}></i>
          </a>
          <span className="contact-name">{props.name}</span>
        </li>
    )

export default Contact
