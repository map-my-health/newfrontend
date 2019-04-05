import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
export default function Header() {
  return (
    <div className="header">
      <img id="logo" src={require('../../assets/images/logo5.png')} alt="logo"/>
      <h1 id="title">Map My Health</h1>
      <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
