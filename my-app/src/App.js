import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../src/components/home/Home';
import Header from '../src/components/header/Header';
import Contact from '../src/components/contact/contact';
import './App.css';

export default function App() {
    return (
      <Router>
        <>
        <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
    </Router>
    );
  }


