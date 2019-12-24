import React, { Component } from 'react';
import SideNav from './../SideNav'
import Main from './../Main'
import '../style.css';

class Wrapper extends Component {
  state = {
    toggleSideNavClass: ''
  };

  // toggle the SideNav state
  toggleSideNav = () => {
    console.log('CLICKED a TOGGLE NAV');
    if (this.state.toggleSideNavClass)  {
      console.log(`you clicked toggle sideNav and it is open so close it`);
      this.setState( { toggleSideNavClass: '' } );
    } else {
      console.log(`you clicked toggle sideNav and it is closed so open it`);
      this.setState( { toggleSideNavClass: 'toggled' } );
    }
  };

  // Toggle the SideNav open-close  only used on small media query break point
  toggleSideNavClick = () => this.toggleSideNav();

  // Close the SideNav after clicking a Nav Link
  closeSideNavClick = () => { 
    console.log('CLICKED a NAV Link');
    this.setState( { toggleSideNavClass: '' } ); };

  // if window size is expanded past small breakpoint when SideNav bar is open
  // then close it
  componentDidMount() {
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", () => {
      // console.log(`JELLO: ${window.innerWidth}`);
      if (window.innerWidth > 767) {
        this.setState( { toggleSideNavClass: '' } );
      }
    })
  };

  render() {
    return (
      <div id="wrapper" className={this.state.toggleSideNavClass}>
        <SideNav onClickSideNav={this.toggleSideNavClick}
                 onClickNavLink={this.closeSideNavClick}/>
        <Main onClickSideNav={this.toggleSideNavClick}/>
      </div>
    )
  }
}
export default Wrapper;