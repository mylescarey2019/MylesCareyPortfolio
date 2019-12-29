import React, { Component } from 'react';
import HeroImg2 from './workspace2.jpg';
import HeroImg from './workspace.jpg';
import HeadLine from '../HeadLine';
import '../style.css';

class Main extends Component {

  render() {
    return (
      <section id="content-wrapper">
        <div id="header" className="row">This is the Header Row
          <div className="col-lg-12">
            <a href="#" id="sidebar-toggle" className="navbar-brand"><i className="fa fa-bars"
               onClick={ (e) => this.props.onClickSideNav(e)}></i>
            </a>
          </div>
        </div>
        <div className="row main-section portfolio-section" onClick={ () => this.props.onClickMain()}>
          <div className="col-lg-12">
            <div id="hero">
              <h2 className="head-offset"></h2>
              <img id="hero-img" className="img-fluid" src={HeroImg} alt={"hero"}/>
            </div>
            <div id="about">
            {/* <h2 className="content-title head-offset">About Section</h2> */}
            <HeadLine title={'About Section'} />
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
            </div>
            <div id="skills">
            {/* <h2 className="portfolio-section head-offset">Skills section</h2> */}
            <HeadLine title={'Skills Section'} />
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
            </div>
            <div id="projects" >
            {/* <h2 className="portfolio-section head-offset">Projects section</h2> */}
            <HeadLine title={'Projects Section'} />
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
            </div>
            <div id="education">
            {/* <h2 className="portfolio-section head-offset">Education section</h2> */}
            <HeadLine title={'Education Section'} />
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
            </div>
            <div id="experience">
            {/* <h2 className="portfolio-section head-offset">Experience section</h2> */}
            <HeadLine title={'Experience Section'} />
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
            </div>
            <div id="contact">
            {/* <h2 className="portfolio-section head-offset">Contact section</h2> */}
            <HeadLine title={'Contact Section'} />
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
            </div>
            <div id="resume">
            {/* <h2 className="portfolio-section head-offset">Resume section</h2> */}
            <HeadLine title={'Resume Section'} />
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
            </div>
          </div>
        </div>
      </section>
    )
  } 
}
export default Main;