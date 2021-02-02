import React from "react";
import "./style.css";

function Spacer() {
  return (
  
    <>
  <div >
    <div id="globe">
  <img id="globe_spacer" src={require('../../assets/img/globe3.png').default} alt={"spacer"}/>
    </div>
    {/* <div id="image_spacer"> */}
       <img id="image_spacer" src={require("../../assets/img/spacer.jpg").default} alt={"spacer"}/>
       
    </div>

</>
  );
}

export default Spacer;
