import React from 'react';
import styles from './Home.css';
// import HomeContainer from '../../containers/events/HomeContainer';
import Header from '../header/Header';

function Home() {
  return (
    <section className={styles.Home}>
    <Header />
    <p>This is home</p>
    </section>
  );
}

export default Home;