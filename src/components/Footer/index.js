import React from "react";
import "./style.css";
import Spacer from "../Spacer"
function Footer() {
  return (
  
    <>
   <Spacer/>
    <footer>
    <div id="text">Created By SD_WORKS</div>
    <div id="image">
       <img src={require("../../assets/img/favicon.ico").default} alt={"juju"}/> 12/20
    </div>
</footer>

</>
  );
}

export default Footer;
