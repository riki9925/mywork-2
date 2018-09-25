import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Album from './components/body.js';
import About from './components/about';
import Barang from './components/barang';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Album} />
          <Route path="/about" component={About} />
          <Route path="/barang" component={Barang} />
        </Switch>
      </Router>
    );
  }
}

export default App;
