import React, { Component } from 'react';
import Sidebar from './Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../src/components/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
    );
  }
}

export default App;
