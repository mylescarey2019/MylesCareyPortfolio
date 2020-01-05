// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Project = (props) => (
      <div className="project-box">
        <img className="img-fluid project-img" src={process.env.PUBLIC_URL + props.img} alt={props.title}></img>
      </div>   
    )

export default Project;