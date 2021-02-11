import React from "react";
import "./style.css";

function Footer() {
  return (

    <>
      <footer id="outer_footer">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-9 col-md-8 col-sm-4">

            </div>
            <div className="col-lg-3 col-md-4 col-sm-8" id="inner_footer">
              <div id="texting">Created By NEW DIGITAL WORLD</div>
              <div id="image">
                <img src={require("../../assets/img/favicon.ico").default} alt={"juju"} /> 
                12/20
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
