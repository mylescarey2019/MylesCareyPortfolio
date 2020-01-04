// import React, { Component } from 'react';
import React from 'react';
import Skill from '../Skill';
import './style.css';

// const Skills = (props) => (
//       <div className="skills-div">
//         {props.skillGroup['skills-list'].map(skill => (
//                 <img key={skill.id} className="img-fluid skill-img" src={process.env.PUBLIC_URL + skill.skill} alt={skill.skillName}></img>
//               ))}
//       </div>   
//     )

const Skills = (props) => (
  <div className="skills-div">
    <p className="skills-title">{props.skillGroup['title']}</p>
    {props.skillGroup['skills-list'].map(skill => (
            <Skill skill={skill.skill} skillName={skill.skillName} />
          ))}
  </div>   
)

export default Skills;