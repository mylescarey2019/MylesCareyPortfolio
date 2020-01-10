// import React, { Component } from 'react';
import React from 'react';
import './style.css';
import '../app.css';

const Resume = (props) => (
  
      <div className="resume-box box-border d-inline-block">
        <div>
          <a href={props.url} title="opens in google docs" rel="noopener noreferrer" target="_blank">
            <i className={props.icon}></i>
          </a>
          <span className="resume-name">{props.name}</span>
        </div>
      </div>   
    )

export default Resume;