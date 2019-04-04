import React from 'react';
//import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';
// import HomeContainer from '../../containers/events/HomeContainer';
import Header from '../header/Header';

function Home() {
  return (
    <section>
    <Header />
    <p>This is home</p>
    <Sidebar />
    </section>
  );
}

export default Home;