import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div class="header">
      <h1 class="header">Map My Health</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
