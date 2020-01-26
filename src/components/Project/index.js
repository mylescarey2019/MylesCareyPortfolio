// import React, { Component } from 'react';
import React from 'react';
import './style.css';
import '../app.css';

const Project = (props) => (
      <div className="col-sm-6 col-xl-4">
        <div className="project-box box-border d-inline-block my-5">
          <div className="image-box">
            <img className="project-img img-fluid" src={process.env.PUBLIC_URL + props.img} alt={props.title}></img>
          </div>
          <p className="project-title">{props.title}</p>
          <p className="project-p2">{props.description}</p>
          <p className="project-p3">{props.tech}</p>
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