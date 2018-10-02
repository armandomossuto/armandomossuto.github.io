import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      option: null,
      fadeout: false,
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

    fadeoutpromise.then((option) => this.setState({option: page})); 

    this.setState({fadeout: true}); 
  }

  render() {
    console.log("rendering");
    const { option, fadeout } = this.state;
    console.log(option);
    return(
      <div>
        {option 
          ? <MainPage option={option} /> 
          : <FrontPage fadeout={fadeout} onClick={this.onClick}/>}
      </div>
    );
  }
}


const FrontPage = ({ onClick, fadeout }) =>
  <div className= "frontpage"> 
      <div className={fadeout ? "fadeoutfp" : "frontelements"}>
        <h2 className="title"> Armando Mossuto </h2>
        <h5 className="subtitle"> Front-End Developper </h5>
        <div className="options">
          <span 
            id="About" 
            onClick={onClick}
          >
            About
          </span>
          <span
            id="Skills" 
            onClick={onClick}
          >
            Skills
          </span>
          <span
            id="CV" 
            onClick={onClick}
          >
            CV
          </span>
          <span
            id="Portfolio" 
            onClick={onClick}
          >
            Portfolio
          </span>
        </div>
      </div>
  </div>
  

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.option,
    }
    this.pageCall = this.pageCall.bind(this);
  }

  pageCall(element) {
    if (element === this.state.page) {
      return;
    }

    this.setState({page: element});
  }

  render() {
    const {page} = this.state;
    const PageName = () => {
      switch(page) {
          case 'About':
              return(<About />);
              break;
          case 'Skills':
              return(<Skills />);
              break;              
          case 'CV':
            return(<CV />);
              break;
          case 'Portfolio':
            return(<Portfolio />);
              break;  
          case 'Contact':
            return(<Contact />);
              break;      
    }
  }
    return(
      <div>
        <SideBar onChange={this.pageCall} page={page} />
        <PageName />
      </div>
    );
  }
}

class SideBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      elements: ['About','Skills','CV','Portfolio','Contact'],
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    let element = event.target.id;
    this.props.onChange(element);
  }

  render() {
    const {elements} = this.state;
    const {page} = this.props;
    return(
      <div className="sidenav">
        <img src="cvphotoedit.jpeg" alt="Armando Mossuto's Photo" />
        {elements.map(item =>
          <div key={item}>
            <p 
              className={page==item ? "elementselected" : "element"}
              id={item}
              onClick={(e) => this.onClick(e)}
             >
              {item}
             </p>
          </div>
        )}
      </div>
    );
  }
}

      
const About = () =>
  <div className="aboutpage"> 
    <img src="infomatics_2.png" alt="Armando Mossuto's About me Photo" />
    <div className="abouttext">
      <h2>About me </h2>
      <p> My name is Armando Mossuto and I am a web developer from Venezuela. I live in Lisbon, Portugal, with my wife and our son.  I hold a 
      bachelor’s degree in Electronics Engineer from Universidad Simón Bolívar. </p>
      <p>My work experience includes working as a QA Engineer in a software company and Team Leader for a Delivery Operations Project.</p>
       
      <p>I have moved into programming, where I would like to develop myself professionally 
      and I am focused in front-end development, especially in creating dynamic websites and single page applications.</p>
    </div>
  </div>


const Skills = () =>
  <div className="skillspage">
    <h2> Skillset </h2>
    
    <div className="skillsbox">
        <div className="leftskills">
          <p>JavaScript</p>
          <div className="skillshow">
            <div id="js"></div>
          </div>
          <p>React.JS</p>
          <div className="skillshow">
            <div id="react"></div>
          </div>
        </div>
        <div className="rightskills">
          <p>CSS</p>
          <div className="skillshow">
            <div id="css"></div>
          </div>
          <p>HTML</p>
          <div className="skillshow">
            <div id="html"></div>
          </div>
        </div>
    </div>

    <h3> Other Skills and Tools</h3>
    <div className="skillsbox">
      <ul className="tools">
        <li>jQuery</li>
        <li>Git</li>
      </ul>
      <ul className="tools">
        <li>NPM</li>
        <li>Assembly</li>
      </ul>
      <ul className="tools">
        <li>LabView</li>
        <li>Excel</li>
      </ul>
    </div>

  </div>

const CV = () =>
  <div className="cvpage"> 
    <h3>Education</h3>
    <div className="cvbox" id="education">
          <div className="lefteducation">
            <p>2004-2009</p>
          </div>
          <div className="righteducation">
            <p> Universidad Simón Bolívar, Caracas – Venezuela</p>
            <p>Electronics Engineer (5 years of studies, pre-Bologna)</p> 
          </div> 
    </div>

    <h3>Professional Experience</h3>
    <div className="profexperience"> 
      <p className="companyname">Accenture</p>
      <p className="location">Warsaw/Lisbon</p>
      <div className="cvbox">
        <p className="lefteducation">January 2017 - Present</p>     
        <p className="righteducation"> Service Delivery Operations Team Leader</p>     
      </div>
      <ul>
        <li> Overseeing and managing a team of 14 Data Analysts, monitoring their quality performance and output.</li>
        <li> Actively used coaching, huddles and data analysis in order to reach the project targets. 
        Provided constant feedback on personal and team performance to engage and motivate them to go beyond the expected performance, 
        developing their skills and preparing them for professional grow.</li>
        <li>Identified improvement opportunities in work-flow, and/or team structure.</li>
        <li>Managed ad-hoc process improvements and initiatives from the client.</li>
        <li>Cooperation with other team leads in order to manage the project, develop improvements to the process and drive engagement to reach the targets.</li>
      </ul>
       <div className="cvbox">
        <p className="lefteducation">June 2015 – January 2017</p>     
        <p className="righteducation"> Quality Auditor Analyst</p>     
      </div>
      <p>Executed quality audits to ensure that client requirements were being executed correctly. Provided support and training to key process, 
      working as point of contact with the client.</p>
    </div>
    <div className="profexperience">
      <p className="companyname">ETELIX </p>
      <p className="location">Caracas, Venezuela</p>
      <div className="cvbox">
        <p className="lefteducation">February 2014 - June 2015</p>     
        <p className="righteducation"> Network Engineer</p>     
      </div>
      <p>Quality control of a complex network environment, handling resolution of alerts problems.</p>
      <ul>
        <li> Control the status of Network Elements using management systems.</li>
        <li> Performed end to end tests.</li>
        <li> Solved a variety of network problems.</li>
        <li> Gathered diagnostic information for incident escalation. </li>
        <li> Technical support to commercial department and retail customers.</li>
      </ul>
    </div>
    <div className="profexperience">
      <p className="companyname">SMARTMATIC</p>
      <p className="location">Caracas, Venezuela</p>
      <div className="cvbox">
        <p className="lefteducation">2012 – 2013</p>     
        <p className="righteducation"> QA Functional Engineer</p>     
      </div>
      <p>Designed and executed the systematic activities needed to fulfill the quality requirements of the firmware and software of diverse products.</p>
      <ul>
        <li> Designing and conducting of test cycles. </li>
        <li> Involved in performance and integration testing. </li>
        <li> Documentation creation of product functionalities.</li>
        <li> In charge of testers in the execution of tests. </li>
        <li> Reported any issues or potential improvements of the products.</li>
        <li> Testing within SCRUM development methodology.</li>
      </ul>
    </div>  
  <h3>Languages</h3>
 <div className="skillsbox">
        <div className="leftskills">
          <p>Spanish</p>
          <div className="skillshow">
            <div id="spanish"></div>
          </div>
          <p>English</p>
          <div className="skillshow">
            <div id="english"></div>
          </div>
        </div>
        <div className="rightskills">
          <p>French</p>
          <div className="skillshow">
            <div id="french"></div>
          </div>
          <p>Portuguese</p>
          <div className="skillshow">
            <div id="portuguese"></div>
          </div>
        </div>
    </div>
  </div>


const Portfolio = () =>
  <div className="projectspage"> 
    <h2>Portfolio</h2>
    <div className="projectsbox">
      <div className="projectrow">
          <div className="projectelement">
            <a href="/weather-app" target="_blank" rel="noopener noreferrer">
            </a>
          </div>
        <p>Lisbon Weather App</p>
      </div>
     <div className="projectrow">
        <div className="projectelement">
        </div>
        <p>Lisbon Weather App</p>
      </div>
    </div>
     <div className="projectsbox">
      <div className="projectrow">
        <div className="projectelement">
        </div>
        <p>Lisbon Weather App</p>
      </div>
     <div className="projectrow">
        <div className="projectelement">
        </div>
        <p>Lisbon Weather App</p>
      </div>
    </div>   
  </div>


class Contact extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      form: false,
      formwindow: false,
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('Name', 'John');
    formData.append('mail', 'John123');
    formData.append('body', 'assdsd');
    fetch('http://formspree.io/armandomossuto@gmail.com', {
      method: 'POST',
      body: "formData"
    }).then(function(response) {
    console.log(response);
    })
  }

  render() {
    return(
      <div className="projectspage"> 
          <h2> Contact Me </h2>
          <div className="contactinfo"> 
            <div className="flexbox">
              <p> E-mail </p>
              <p> Telephone </p>
            </div>
            <div className="flexbox">
              <p> armandomossuto@gmail.com </p>
              <p> +351915931095 </p>
            </div>
            <a href='https://pt.linkedin.com/in/armando-mossuto-moreno-5787868' title="Linkedin Profile" target="_blank" rel="noopener noreferrer">
              <img src='In-2C-54px-R.png' alt='Linkdn Logo Link' />
            </a>
            <a href='https://github.com/armandomossuto' title="Github Repositories" target="_blank" rel="noopener noreferrer">
              <img src="GitHub_Logo.png" alt="Github Logo Link" /> 
            </a>
          </div>
          <form onSubmit={this.onSubmit}>
           <h3> Contact Form </h3>
            <label>Name</label>
            <input type="text" name="name" />        
            <label>E-mail</label>
            <input type="email" name="mail" />
            <label>Comments</label>
            <textarea   name="body">
            </textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      );
  }
}
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );