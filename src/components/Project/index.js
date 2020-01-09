// import React, { Component } from 'react';
import React from 'react';
import './style.css';
import '../app.css';

const Project = (props) => (
      <div className="col-md-6 col-xl-4">
        <div className="project-box box-border d-inline-block my-5">
          <img className="img-fluid project-img" src={process.env.PUBLIC_URL + props.img} alt={props.title}></img>
        </div>   
      </div>
    )

export default Project;