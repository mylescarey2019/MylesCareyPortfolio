// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Skills = (props) => (
      <div className="skills-div">
        {props.skillGroup['skills-list'].map(skill => (
                <img className="img-fluid skill-img" src={process.env.PUBLIC_URL + skill.skill} alt={skill.skillName}></img>
              ))}
      </div>   
    )

export default Skills;