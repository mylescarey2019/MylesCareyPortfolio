import React, { Component } from 'react';
import '../style.css';

class SideNav extends Component {
  render() {
    return (
      <aside id="sidebar-wrapper">
      <div className="sidebar-brand">
        <h2>Logo</h2>
        <h2>
          <a id="sidebar-close" href="#"><i className="fa fa-window-close"></i></a>
        </h2>
      </div>
      <ul className="sidebar-nav">
        <li>
          <a href="#"><i className="fa fa-home"></i>Home</a>
        </li>
        <li>
          <a href="#"><i className="fa fa-plug"></i>Plugins</a>
        </li>
        <li>
          <a href="#"><i className="fa fa-user"></i>Users</a>
        </li>
      </ul>
    </aside>
    )
  }
}

export default SideNav;