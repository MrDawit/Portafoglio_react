import React, { useEffect, useState, useCallback } from "react";
import "./style.css";

function Spacer() {


  const [backgroundColor, setBackgroundColor] = useState("")
  // const listenScrollEvent = () => {

  //    window.scrollY > 650 

  //     // ? setOpacity(".2")
  //     // : setOpacity("1")

  //     ? setOpacity("gold")
  //     : setOpacity("")
  // }



  //   const listenMoveEvent = () => {
  const listenMouseMove = useCallback(
    ({ clientX }) => {
      //  window.clientX > 100
      clientX > 300
        //  ? setOpacity(".2")
        //  : setOpacity("1")
        ? setBackgroundColor("purple")
        // ? console.log("DID IT")
        : setBackgroundColor("")
    },
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", listenMouseMove);

    // return () => {
    //   window.removeEventListener("mousemove", listenMouseMove);
    // };

  });

  return (

    <>
      <div style={{ background: backgroundColor }}>
        {/* <div style={{color: testColor}}>FOOD for Thought-test</div> */}
        <div id="globe">
          <img id="globe_spacer"
            // className={`undefined ${
            //         small ? "small" : ""
            //       }`} 


            // style={{opacity: testOpacity}}

            // style={{background: testOpacity}}
            src={require('../../assets/img/globe3.png').default} alt={"spacer"} />
        </div>
        {/* <div id="image_spacer"> */}
        <img id="image_spacer" src={require("../../assets/img/spacer.jpg").default} alt={"spacer"} />

      </div>

    </>
  );
}

export default Spacer;
