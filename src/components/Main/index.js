import React, { Component } from 'react';
// import HeroImg2 from './workspace2.jpg';
import HeroImg from './workspace.jpg';
import HeadImg from './MylesCarey.jpg';
// import ExImg from '../../images/javascript2.png';
// import PortImg from '../../images/portfolio-1650.png';
import ClientSideSkills from '../../json/clientSideSkills.json'
import ServerSideSkills from '../../json/serverSideSkills.json'
import OtherSkills from '../../json/otherSkills.json'
import ProjectList from '../../json/projectList.json'
import EducationList from '../../json/educationList.json'
import ExperienceList from '../../json/experienceList.json'
import ContactList from '../../json/contactList.json'
import HeadLine from '../HeadLine';
import PortfolioSection from '../PortfolioSection'
import Hero from '../Hero'
import './style.css';
import About from '../About';
import Skills from '../Skills';
import Contacts from '../Contacts';
import Project from '../Project';
import Education from '../Education';
import Experience from '../Experience';

class Main extends Component {

  render() {
    // console.log(ClientSideSkills['title']);
    // console.log(ClientSideSkills['skills-list'][0]);
    return (
      <section id="content-wrapper">
        <div id="header" className="fixed-top text-center">This is the Header Row
          <div className="col-lg-12">
            {/* <a href="#" id="sidebar-toggle" className="navbar-brand"><i className="fa fa-bars"
               onClick={ (e) => this.props.onClickSideNav(e)}></i>
            </a> */}
            <button id="sidebar-toggle" className="navbar-brand"><i className="fa fa-bars"
               onClick={ (e) => this.props.onClickSideNav(e)}></i>
            </button>
          </div>
        </div>
        <div className="row main-section " onClick={ () => this.props.onClickMain()}>
          <div className="col-lg-12">
            {/* <div id="hero">
              <img className="img-fluid" src={HeroImg} alt={"hero"}/>
            </div> */}
            <Hero heroimg={HeroImg} />
            <PortfolioSection id="about">
              <HeadLine title={'About'} />
              <About />
              {/* <img id="auth-image" className="img-fluid" src={HeadImg}  alt="Myles Carey"/>
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
              </p>   */}
            </PortfolioSection>
            <PortfolioSection id="skills">
              <HeadLine title={'Skills'} />
              <Skills skillGroup={ClientSideSkills}/>
              <Skills skillGroup={ServerSideSkills}/>
              <Skills skillGroup={OtherSkills}/>
              {/* The next play is to define a Skills component and rende it here */}
              {/* Skills will be passed a prop that is an array of skill objects */}
              {/* The skill object prop will be mapped over to render the component */}
              {/* skill for each of the skills */}
              {/* There will be 2 or 3 seperate Skills components rendered here */}
              {/* One for Client Side, One for Server Side and one for Other (maybe) */}
                    {/* <img className="img-fluid skill-img" src={MernImg} alt="mern"></img>
                    <img className="img-fluid skill-img" src={BootstrapImg} alt="bootstrap"></img>
                    <img className="img-fluid skill-img" src={JavascriptImg} alt="javascript"></img>
                    <img className="img-fluid skill-img" src={ReactImg} alt="react"></img> */}
              {/* <img className="img-fluid skill-img" src={ExImg} alt="ex"></img>     
              <img className="img-fluid skill-img" src={PortImg} alt="ex"></img>    
              <img className="img-fluid skill-img" src={process.env.PUBLIC_URL + '/images/javascript2.png'} alt="git"></img>       */}
              {/* {ClientSideSkills['skills-list'].map(skill => (
                <img className="img-fluid skill-img" src={process.env.PUBLIC_URL + skill.skill} alt={skill.skillName}></img>
              ))} */}
            </PortfolioSection>
            <PortfolioSection id="projects" >
              <HeadLine title={'Projects'} />
              <div className="container-fluid">
                <div className="row">
                    {ProjectList.map(project => (
                      <Project 
                        key={project.id} 
                        title={project.title} 
                        img={project.img}
                        description={project.description}
                        tech={project.tech}
                      />
                    ))}
                </div>
              </div>
            </PortfolioSection>
            <PortfolioSection id="education">
              <HeadLine title={'Education'} />
              {EducationList.map(education => (
                <Education 
                  key={education.id} 
                  school={education.school} 
                  city={education.city} 
                  img={education.img}
                  description={education.description}
                  year={education.year}
                />
              ))}
              {/* <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p> */}
            </PortfolioSection>
            <PortfolioSection id="experience">
              <HeadLine title={'Experience'} />
              {ExperienceList.map(experience => (
                <Experience 
                  key={experience.id} 
                  company={experience.company} 
                  date={experience.date}
                  role={experience.role}
                  bullet1={experience.bullet1}
                  bullet2={experience.bullet2}
                  bullet3={experience.bullet3}
                  bullet4={experience.bullet4}
                />
              ))}
              {/* <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p> */}
            </PortfolioSection>
            <PortfolioSection id="contact">
              <HeadLine title={'Contacts'} />
              <Contacts contactList={ContactList}/>
              {/* <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p> */}
              </PortfolioSection>
            <PortfolioSection id="resume">
              <HeadLine title={'Resume'} />
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              </PortfolioSection>
          </div>
        </div>
      </section>
    )
  } 
}
export default Main;