// import React, { Component } from 'react';
import React from 'react';
import './style.css';
import '../app.css';

const Project = (props) => (
      <div className="col-md-6 col-xl-4">
        <div className="project-box box-border d-inline-block my-5">
          <img className="img-fluid project-img" src={process.env.PUBLIC_URL + props.img} alt={props.title}></img>
          <p>{props.title}</p>
          <p>{props.description}</p>
          <p>{props.tech}</p>
          <a href={props.extLink} rel="noopener noreferrer" target="_blank">
            <i className={props.extLinkIcon}></i>
          </a>
          <a href={props.repoLink} rel="noopener noreferrer" target="_blank">
            <i className={props.repoLinkIcon}></i>
          </a>
        </div>   
      </div>
    )

export default Project;