import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Album from './components/body.js';
import About from './components/about';
import Barang from './components/barang';
import Howto from './components/howto';
import Pembayaran from './components/pembayaran';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Album} />
          <Route path="/about" component={About} />
          <Route path="/barang" component={Barang} />
          <Route path="/howto" component={Howto} />
          <Route path="/pembayaran" component={Pembayaran} />
        </Switch>
      </Router>
    );
  }
}

export default App;
