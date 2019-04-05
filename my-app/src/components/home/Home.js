import React from 'react';
//import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';
// import HomeContainer from '../../containers/events/HomeContainer';
//import data from '../../services/data';
import { getData } from '../../services/dataSvc'
import styles from './Home.css'
import Details from '../Details/Details'

// make this class based

export default class Home extends React.PureComponent {
// constructor(props){
//   super(props)
//   this.state = {
//    data: null,
//     loading: true
//   }
// }
state = {
  data: null,
  loading: true,
  selectedProcedure: null,
};

async componentDidMount(){
  const res = await getData();
  console.log('results:', res);
  this.setState({data: res, loading: false});

}

filterByProc = (procName) => {
  const procedures = this.state.data;
  return procedures && procedures.filter(proc => proc.Unnamed === procName);
}

getProcedureNames = () => {
  const procedures = this.state.data;
  // const procedures = this.filterByProc('X-ray: Chest');
  return procedures && procedures.map((proc, i) => {
    return { name: proc.Unnamed, index: i};
  }); 
}

handleProcedureSelection = (procName) => {
  // console.log('procedure selected:', procName)
  this.setState({selectedProcedure: procName});
  // then you have the procedure to render
};

  render() {
    const procedureNames = this.getProcedureNames();
  // console.log(`state is`,this.state)
  // console.log('procedure names in home', procedureNames);

  const selectedProcedureData = this.state.selectedProcedure && this.filterByProc(this.state.selectedProcedure);
  // console.log('current state', this.state);
  // console.log('selected procedure', selectedProcedureData);
  return (
    <section className={styles.Home}>
    {/* //this.state.data.map(item => <p>{item.ultrasound}</p>) */}
    <p id="welcome">Welcome to Map My Health, a site aimed to help patients in Oregon access health costs, compare pricing and provide a map view of the hospitals that offer the procedures that they are interested in.</p>
    <Sidebar onProcedureSelect={this.handleProcedureSelection} procedures={procedureNames}/>
    {/* conditionally render another component that lists details next to sidebar */}
  {selectedProcedureData && <Details hospitals={selectedProcedureData[0]}/> }
    </section>
  );
}
}
