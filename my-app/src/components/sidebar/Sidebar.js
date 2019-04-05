import React, { Component } from "react";
import './Sidebar.css'
import { Link } from 'react-router-dom';
import CTScan from '../Details/CTScan';
import UltraSound from '../Details/UltraSound';
import Cardio from '../Details/Cardio';
import Details from '../Details/Details'

class Sidebar extends Component {
 

  render() {
  const procNames = this.props.procedures;
  // console.log('procNames in Sidebar', procNames);
  
    if(!procNames) return null;
    return (
      <div className="sidebar">
      {procNames.map(proc => (<a onClick={() => this.props.onProcedureSelect(proc.name)} key={proc.index}>{proc.name}</a>))}
      {/* {getProcedures} */}
      {/* <h2 className='procedure-list'>Procedures</h2>
      <Link to='/details' component={Details}>CT scan: Abdomen</Link>
      <Link to='/details' component={Details}>Cardiovascular: Echocardiography</Link>
    <Link to='/details' component={Details}>Ultrasound</Link> */}

      {/* <Link to='/ctscan' component={CTScan}>CT scan: Abdomen/GI</Link>
      <Link to='/Cardio' component={Cardio}>Cardiovascular: Echocardiography</Link>
      <Link to='/Ultrasound' component={UltraSound}>Ultrasound</Link> */}
        {/* {procedures && procedures.map((proc, i) => <li key={i} >{Object.keys(proc.Procedures[0])}</li>)} */}
        {/* <a href="#">Outpatient</a>
        <a href="#">Imaging and Diagnostics</a>
        <a href="#">Pregnancy</a> */}
      </div>
    );
  }
}

export default Sidebar;
