import React from 'react';
//import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';
// import HomeContainer from '../../containers/events/HomeContainer';
//import data from '../../services/data';
import { getData } from '../../services/dataSvc'
import styles from './Home.css'

// make this class based

export default class Home extends React.PureComponent {

  state = {
    data: null,
    loading: true
  }

async componentDidMount(){
  const res = await getData();
  console.log('results:', res);
  this.setState({data: res, loading: false});

}

  // create componentDidMount here and add state with data = null
  // when component mounts, set const data = getData() then add it to state
  // access its properties from state in your render method
  render() {
  console.log(`state is`,this.state)
  return (
    <section className={styles.Home}>
    {/* //this.state.data.map(item => <p>{item.ultrasound}</p>) */}
    <p id="welcome">Welcome to Map My Health, a site aimed to help patients in Oregon access health costs, compare pricing and provide a map view of the hospitals that offer the procedures that they are interested in</p>
    <Sidebar procedures={this.state}/>
    </section>
  );
}
}
