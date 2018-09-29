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
      }, 2000);
    });

    fadeoutpromise.then((option) => this.setState({option: page})); 

    this.setState({fadeout: true}); 
  }

  render() {
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
  <div className={fadeout ? "fadeoutfp" : "frontpage"}> 
      <div className="frontelements">
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
            id="Projects" 
            onClick={onClick}
          >
            Projects
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
          case 'Projects':
            return(<Projects />);
              break;  
          case 'Contact':
            return(<Contact />);
              break;      
    }
  }
    return(
      <div>
        <SideBar onChange={this.pageCall} page={page} />
        <div className="mainpage">
          <PageName />
        </div>
      </div>
    );
  }
}

class SideBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      elements: ['About','Skills','CV','Projects','Contact'],
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
  <div> 
    <img src="infomatics_2.png" alt="Armando Mossuto's About me Photo" />
    <div className="Title">
      <h2>About me </h2>
    </div>
  </div>


const Skills = () =>
  <div> 
    Skills
  </div>


const CV = () =>
  <div> 
    CV
  </div>


const Projects = () =>
  <div> 
    Projects
  </div>


const Contact = () =>
  <div> 
    Contact
  </div>

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );