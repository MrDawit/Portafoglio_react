import React from "react";
import {Container, Row, Col} from "react-bootstrap";
 import "./style.css";


function Footer() {
  return (
  
    <>
    <footer id="outer_footer">
    <div id="texting">Created By NEW DIGITAL WORLD</div>
    <div id="image">
       <img src={require("../../assets/img/favicon.ico").default} alt={"juju"}/> 12/20
    </div>
</footer>
</>
  );
}

export default Footer;
