import React from "react";
import "./style.css";

function Footer() {
  return (
    // <footer className="footer container">
    //   <div className="row">
    //   <div className="col-xs-4 sig">This is how I
    //   <span>DAWIT</span> { new Date().getFullYear() }</div>
    //   </div>
    // </footer>
    <footer>
    <div id="text">created by SD_WORKS</div>
    <div id="image">
       <img src={require("../../assets/img/favicon.ico").default} alt={"juju"}/>8/20
    </div>
</footer>
  );
}

export default Footer;
