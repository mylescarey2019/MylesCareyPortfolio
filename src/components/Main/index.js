import React, { Component } from 'react';
// import HeroImg2 from './workspace2.jpg';
import HeroImg from './workspace.jpg';
// import ExImg from '../../images/javascript2.png';
// import PortImg from '../../images/portfolio-1650.png';
import ClientSideSkills from '../../json/clientSideSkills.json'
import ServerSideSkills from '../../json/serverSideSkills.json'
import OtherSkills from '../../json/otherSkills.json'
import ProjectList from '../../json/projectList.json'
import EducationList from '../../json/educationList.json'
import HeadLine from '../HeadLine';
import PortfolioSection from '../PortfolioSection'
import Hero from '../Hero'
import './style.css';
import Skills from '../Skills';
import Project from '../Project';
import Education from '../Education';

class Main extends Component {

  render() {
    // console.log(ClientSideSkills['title']);
    // console.log(ClientSideSkills['skills-list'][0]);
    return (
      <section id="content-wrapper">
        <div id="header">This is the Header Row
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
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
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
              {ProjectList.map(project => (
                <Project 
                  key={project.id} 
                  title={project.title} 
                  img={project.img}
                  description={project.description}
                  tech={project.tech}
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
            <PortfolioSection id="contact">
              <HeadLine title={'Contacts'} />
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