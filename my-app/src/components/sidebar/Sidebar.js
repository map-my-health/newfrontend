import React, { Component } from "react";
import './Sidebar.css'
class Sidebar extends Component {
  handleProcedure(){
    let procedureData=Object.keys(this.state.data)
    procedureData.map(item=>{
      console.log(item)
    })
  }
  render() {
    console.log(`This was passed tp sidebar`,this.props.procedures.data)
    let procedures=this.props.procedures.data
    //console.log(Object.keys(procedures))
   
    //console.log(`these are the keys`,Object.keys(procedures))
    return (
      <div className="sidebar">
        {procedures && procedures.map(proc => <a href="#">{proc.Name}</a>)}
        {/* <a href="#">Outpatient</a>
        <a href="#">Imaging and Diagnostics</a>
        <a href="#">Pregnancy</a> */}
      </div>
    );
  }
}

export default Sidebar;
