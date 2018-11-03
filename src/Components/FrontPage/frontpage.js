import  React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class FrontPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
      		redirect: false,
      		fadeout: false,
      		page: '',
    	}

    	this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
	    let page = event.target.id;
	    
	    let fadeoutpromise = new Promise(function(resolve, reject) {
	        setTimeout(function() { 
	        resolve();
	      }, 500);
	    });

	    fadeoutpromise.then((option) => this.setState({redirect: true})); 

	    this.setState({fadeout: true, page: page}); 
  	}


	render() {
		const { redirect, page, fadeout } = this.state;
		if(redirect) {
     		 return <Redirect push to={"/main/"+page} />;
    }

		return(
			<div className= "frontpage"> 
		      <div className={fadeout ? "fadeoutfp" : "frontelements"}>
		        <h2 className="title"> Armando Mossuto </h2>
		        <h5 className="subtitle"> Front-End Developper </h5>
		        <div className="options">
		          <span 
		            id="about" 
		            onClick={this.onClick}
		          >
		            About
		          </span>
		          <span
		            id="skills" 
		            onClick={this.onClick}
		          >
		            Skills
		          </span>
		          <span
		            id="cv" 
		            onClick={this.onClick}
		          >
		            CV
		          </span>
		          <span
		            id="portfolio" 
		            onClick={this.onClick}
		          >
		            Portfolio
		          </span>
		        </div>
		      </div>
		  </div>
	)}
}
  
