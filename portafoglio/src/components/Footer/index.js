import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer container">
      <div className="row">
      <div className="col-xs-4 sig">This is how I
      <span>DAWIT</span> { new Date().getFullYear() }</div>
      </div>
    </footer>
  );
}

export default Footer;
