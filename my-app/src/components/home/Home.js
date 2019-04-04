import React from 'react';
//import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';
// import HomeContainer from '../../containers/events/HomeContainer';
import Header from '../header/Header';
import data from '../../services/dataSvc';

// make this class based

export default class Home extends React.PureComponent {

  //componentDidMount(){}
  // create componentDidMount here and add state with data = null
  // when component mounts, set const data = getData() then add it to state
  // access its properties from state in your render method
  render() {
  
  return (
    <section>
    <Header />
    <p>This is home</p>
    <Sidebar />
    </section>
  );
}
}
