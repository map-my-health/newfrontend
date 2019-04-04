import React, { Component } from "react";
import './Sidebar.css'
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <a href="#">Procedure</a>
        {/* <a href="#">Outpatient</a>
        <a href="#">Imaging and Diagnostics</a>
        <a href="#">Pregnancy</a> */}
      </div>
    );
  }
}

export default Sidebar;
