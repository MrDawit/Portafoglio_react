import React from "react";
import "./style.css";

function Footer() {
  return (
  
    <>
    <footer id="outer_footer" >
 
  <div className="row footerRow">
    
      <div className="col-lg-9  col-md-6 col-sm-6"/>
    <div id="texting" className="col-lg-3"> Created By NEW DIGITAL WORLD</div>
    </div>
    <div className="row footerRow">
    <div className="col-10"/>
    <div id="image" className="col-2">
       <img  src={require("../../assets/img/favicon.ico").default} alt={"juju"}/> 12/20
    </div>
    </div>
</footer>
</>
  );
}

export default Footer;
