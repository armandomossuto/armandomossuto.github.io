import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Main from './Components/Main/main.js';
import FrontPage from './Components/FrontPage/frontpage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={FrontPage} />
          <Route path="/main" component={Main} />
        </div>
      </Router>
      );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root'));
