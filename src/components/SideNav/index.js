import React, { Component } from 'react';
import '../style.css';

class SideNav extends Component {
  render() {
    return (
      <aside id="sidebar-wrapper">
      <div className="sidebar-brand">
        <h2>Logo</h2>
        <h2>
          <a id="sidebar-close" href="#" onClick={ () => this.props.onClickSideNav()}
            ><i className="fa fa-window-close"></i>
          </a>
        </h2>
      </div>
      <ul className="sidebar-nav">
        <li>
          <a href="#about" onClick={ () => this.props.onClickNavLink()}>
            <i className="fa fa-user"></i>About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={ () => this.props.onClickNavLink()}
            ><i className="fa fa-chart-line"></i>Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={ () => this.props.onClickNavLink()}>
            <i className="fa fa-laptop"></i>Projects
          </a>
        </li>
        <li>
          <a href="#education" onClick={ () => this.props.onClickNavLink()}>
            <i className="fa fa-graduation-cap"></i>Education
          </a>
        </li>
        <li>
          <a href="#experience" onClick={ () => this.props.onClickNavLink()}>
            <i className="fa fa-building"></i>Experience
          </a>
        </li>
      </ul>
    </aside>
    )
  }
}

export default SideNav;