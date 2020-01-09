// import React, { Component } from 'react';
import React from 'react';
import HeadImg from './MylesCarey.jpg';
import './style.css';
import '../app.css';

const About = (props) => (
      <div className="about-box m-4">
        <img id="auth-image" className="box-border img-fluid" src={HeadImg}  alt="Myles Carey"/>
        <p className="text-left">Full Stack Web Developer who loves solving problems through programming and team collaboration.  
        </p>
        <p className="text-left">
          Full Stack Web Development Certification from the University of Washington, a strong portfolio and a Bachelor of Science degree
          in Computer Science from the University of Wisconsin.</p>
        <p className="text-left">
          Enjoys the challenge of problem solving and reward of seeing teammates grow and succeed while reaching project goals. 
        </p>
        <p className="text-left">
          Develops visually compelling individual and team web projects with attention to well-organized code and documentation.  
          Successful prior career as a programmer analyst in a team environment developing new retail, wholesale and master data management systems. 
        </p>
        <p className="text-left">
          Resourceful and resilient with a strong skill set including Javascript, JQuery, HTML, CSS, React, Git, Node, Express, Mongo, SQL, Unix, 
          relational databases and professional experience executing all aspects of the product life cycle including team collaboration, customer requirements, project design, development, testing, deployment, and support.
        </p>
        <p className="text-left">
          In my free time I enjoy camping on the Washington and Oregon coasts with my wife and two teenage daughters.
        </p>  
      </div>   
    )

export default About;