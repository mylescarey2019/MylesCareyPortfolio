// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Project = (props) => (
      <div className="col-sm-6 col-lg-4">
        <div className="project-box d-inline-block">
          <img className="img-fluid project-img" src={process.env.PUBLIC_URL + props.img} alt={props.title}></img>
        </div>   
      </div>
    )

export default Project;