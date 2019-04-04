import React, { component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <a href="#">Inpatient</a>
        <a href="#">Outpatient</a>
        <a href="#">Imaging and Diagnostics</a>
        <a href="#">Pregnancy</a>
      </div>
    );
  }
}

export default Sidebar;
