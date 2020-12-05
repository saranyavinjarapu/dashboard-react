import React, { Component } from "react";
import "./Aside.css";

class Aside extends Component {
  render() {
    return (
      <div className="sidenav">
        <a href="#home">Home</a>
        <a href="#account">My Account</a>
        <a href="#company">My Company</a>
        <a href="#settings">My Settings</a>
        <a href="#news">News</a>
        <a href="#analytics">Analytics</a>
      </div>
    );
  }
}
export default Aside;
