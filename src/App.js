import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Album from './components/body.js';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Album} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
