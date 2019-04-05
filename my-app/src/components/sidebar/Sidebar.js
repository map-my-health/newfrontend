import React, { Component } from "react";
import './Sidebar.css'
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  handleProcedure(){
    console.log(`this was clicked`)
    return
    
  }
  render() {
  //   console.log(`This was passed to sidebar`,this.props.procedures.data)
  // let procedures=this.props.procedures.data
  // let getProcedures= procedures && procedures.map((proc,i) => {
  //   console.log(`here are the procedures`,proc.Procedure)
  //   return(
  //    <li key={i}>{proc.Procedure}</li>
  //   )
  // })
 
    // let getProcedures=procedures.map((item, i)=> {
    //   console.log(item.Procedure)
    // })
    // procedures && procedures.map(proc=>{
    //   console.log(Object.keys(proc.Procedures[0]))
    // }

    //console.log(`these are the keys`,Object.keys(procedures))
    return (
      <div className="sidebar">
      <h2 className='procedure-list'>Procedures</h2>
      <Link to='/ctscan' onClick={this.handleProcedure}>CT scan: Abdomen/GI</Link>
      <Link to='/Cardio' onClick={this.handleProcedure}>Cardiovascular: Echocardiography</Link>
      <Link to='/Ultrasound' onClick={this.handleProcedure}>Ultrasound</Link>
        {/* {procedures && procedures.map((proc, i) => <li key={i} >{Object.keys(proc.Procedures[0])}</li>)} */}
        {/* <a href="#">Outpatient</a>
        <a href="#">Imaging and Diagnostics</a>
        <a href="#">Pregnancy</a> */}
      </div>
    );
  }
}

export default Sidebar;
