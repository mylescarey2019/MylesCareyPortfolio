// import React, { Component } from 'react';
import React from 'react';
import Contact from '../Contact';
import './style.css';
import '../app.css';

// const Skills = (props) => (
//       <div className="skills-div">
//         {props.skillGroup['skills-list'].map(skill => (
//                 <img key={skill.id} className="img-fluid skill-img" src={process.env.PUBLIC_URL + skill.skill} alt={skill.skillName}></img>
//               ))}
//       </div>   
//     )

const Contacts = (props) => (
  <div className="contacts-div box-border mx-auto text-center">
    {/* <p className="skills-title text-center text-sm-center text-md-left">{props.skillGroup['title']}</p> */}
    {props.contactList.map(contact => (
            <Contact key={contact.id} name={contact.name} icon={contact.icon} url={contact.url} />
          ))}
  </div>   
)

export default Contacts;