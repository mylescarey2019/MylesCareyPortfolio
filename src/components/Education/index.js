// import React, { Component } from 'react';
import React from 'react';
import './style.css';
import '../app.css';

const Education = (props) => (
      <div className="education-box box-border d-inline-block">
        {/* <div className="container-fluid">
          <div className="row">
            <div id="logo" className="col-5">
              <img className="img-fluid logo-img" src={process.env.PUBLIC_URL + props.img} alt={props.school}></img>
            </div>
            <div className="col-7">
              <p>{props.school}, {props.city}</p>
              <p>{props.description} - {props.year}</p>
            </div> */}
            {/* <span className="helper float-left"></span> */}
            <div className="logo float-left">
              <img className="img-flui logo-img" src={process.env.PUBLIC_URL + props.img} alt={props.school}></img>
            </div>
            <div className="school">
              <p className="education-city">{props.school} - {props.city}</p>
              {/* <p>{props.description}</p> */}
              <p className="education-type">{props.description} - {props.year}</p>
              {/* <p>{props.year}</p> */}
            </div>
          {/* </div>
        </div> */}
      </div>   
    )

export default Education;