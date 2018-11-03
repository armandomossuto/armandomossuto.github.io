import  React, { Component } from 'react';
import { HashRouter as  Router, Route } from 'react-router-dom';
import About from "./About/about.js"
import Contact from "./Contact/contact.js"
import CV from "./CV/cv.js"
import Skills from "./Skills/skills.js"
import Portfolio from "./Portfolio/portfolio.js"
import NavMenu from "./navmenu.js"


export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	    return (
	        	<div className="main">
	        		<NavMenu />
	        		<Route path="/main/about" component={About} />
	        		<Route path="/main/contact" component={Contact} />
	        		<Route path="/main/cv" component={CV} />
	        		<Route path="/main/skills" component={Skills} />
	        		<Route path="/main/portfolio" component={Portfolio} />
	        	</div>
	      );
	  }
	}