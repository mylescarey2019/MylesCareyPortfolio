import React, { Component } from 'react';
// import ScrollspyNav from "react-scrollspy-nav";
import Scrollspy from 'react-scrollspy';
import '../style.css';

class SideNav extends Component {
  render() {
    return (
      <aside id="sidebar-wrapper">
      <div className="sidebar-brand">
        <h4 id="logo">
          <a href="#hero" onClick={ (e) => this.props.onClickNavLink(e)}>
            <i id="home" className="fa fa-home"></i>Logo 
          </a>
        </h4>
        <h2>
          <a id="sidebar-close" href="#" onClick={ (e) => this.props.onClickSideNav(e)}
            ><i className="fa fa-window-close"></i>
          </a>
        </h2>
      </div>
      <nav>
        <Scrollspy className="sidebar-nav"
          items={["about", "skills", "projects","education","experience",
                  "contact","resume"]}
          currentClassName="active-nav"
        >
          {/* <ul className="sidebar-nav"> */}
            <li>
              <a href="#about" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-address-card"></i>About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={ (e) => this.props.onClickNavLink(e)}
                ><i className="fa fa-wrench"></i>Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-laptop-code"></i>Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-graduation-cap"></i>Education
              </a>
            </li>
            <li>
              <a href="#experience" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-building"></i>Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-envelope"></i>Contact
              </a>
            </li>
            <li>
              <a href="#resume" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-file-pdf"></i>Resume
              </a>
            </li>
          {/* </ul> */}
        </Scrollspy>
      </nav>
    </aside>
    )
  }
}

export default SideNav;