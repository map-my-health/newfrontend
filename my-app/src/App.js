import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import Home from '../src/components/home/Home';
import './App.css';

export default function App() {
  return (
    <Router>
      <>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </>
    </Router>
  );
}
