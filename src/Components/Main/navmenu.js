import  React, { Component } from 'react';
import { HashRouter as  Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavMenu extends Component {
  constructor(props){
    super(props);

    this.state = {
      elements: ['about','skills','cv','portfolio','contact'],
    }

    this.onClick = this.onClick.bind(this);

  }

    onClick(event) {
      let page = event.currentTarget.id;
      console.log(page);
      this.props.history.push('/main/'+ page);
    }


  render() {
    const {elements} = this.state;
    const page = this.props.location.pathname.replace("/main/","");
    return(
      <div className="sidenav">
        <img src="cvphotoedit.jpeg" alt="Armando Mossuto's Photo" />
        {elements.map(item =>
          <div key={item} id={item} className={page==item ? "elementselected" : "element"} onClick={this.onClick}>
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(NavMenu);