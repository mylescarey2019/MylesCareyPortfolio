import React, { Component } from 'react';
// import ScrollspyNav from "react-scrollspy-nav";
import Scrollspy from 'react-scrollspy';
import '../style.css';

class SideNav extends Component {
  render() {
    return (
      <aside id="sidebar-wrapper">
      <div className="sidebar-brand">
        <h2>Logo</h2>
        <h2>
          <a id="sidebar-close" href="#" onClick={ (e) => this.props.onClickSideNav(e)}
            ><i className="fa fa-window-close"></i>
          </a>
        </h2>
      </div>
      <nav>
        <Scrollspy className="sidebar-nav"
          items={["about", "skills", "projects","education","experience"]}
          currentClassName="active-nav"
        >
          {/* <ul className="sidebar-nav"> */}
            <li>
              <a href="#about" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-user"></i>About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={ (e) => this.props.onClickNavLink(e)}
                ><i className="fa fa-chart-line"></i>Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-laptop"></i>Projects
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
          {/* </ul> */}
        </Scrollspy>
      </nav>
    </aside>
    )
  }
}

export default SideNav;