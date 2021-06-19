import React, { useEffect, useState }  from "react";
import "./style.css";

function Spacer() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 600)
      );
    }
  }, []);


  return (
  
    <>
  <div >
    <div id="globe">
  <img id="globe_spacer" className={`img ${
          small ? "small" : ""
        }`} 
        src={require('../../assets/img/globe3.png').default} alt={"spacer"}/>
    </div>
    {/* <div id="image_spacer"> */}
       <img id="image_spacer" src={require("../../assets/img/spacer.jpg").default} alt={"spacer"}/>
       
    </div>

</>
  );
}

export default Spacer;
