import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../src/components/home/Home';
import Contact from '../src/components/contact/contact';
import CTScan from './components/Details/CTScan';
import UltraSound from './components/Details/UltraSound';
import Cardio from './components/Details/Cardio';

import './App.css';

export default function App() {
    return (
      <Router>
        <>
      <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/ultrasound" component={UltraSound} />
        <Route exact path="/cardio" component={Cardio} />
        <Route exact path="/ctscan" component={CTScan} />
      </Switch>
    </main>
    </>
    </Router>
    );
  }


