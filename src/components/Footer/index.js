import React from "react";
import "./style.css";

function Footer() {
  return (
  
    <>
    <div id="outer_footer">
    <footer>
    <div id="text">Created By SD_WORKS</div>
    <div id="image">
       <img src={require("../../assets/img/favicon.ico").default} alt={"juju"}/> 12/20
    </div>
</footer>
</div>
</>
  );
}

export default Footer;
