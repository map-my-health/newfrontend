import React from 'react';
//import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';
// import HomeContainer from '../../containers/events/HomeContainer';
import Header from '../header/Header';
//import data from '../../services/data';
import { getData } from '../../services/dataSvc'

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
    <section>
    <Header />
    {/* //this.state.data.map(item => <p>{item.ultrasound}</p>) */}
    <p>This is home</p>
    <Sidebar procedures={this.state}/>
    </section>
  );
}
}
