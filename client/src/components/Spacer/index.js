import React, { useEffect, useState, useCallback }  from "react";
import "./style.css";

function Spacer() {

  const [state, setState] = useState({
    newWidth: 200 / 2,
    newBarAmount: 200,
    isDragging: false
  });


  // const [small, setSmall] = useState(false);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () =>
  //       setSmall(window.pageYOffset > 600)
  //     );
  //   }
  // }, []);
  // const handleMove = (e) => {
  //   e.nativeEvent.clientX
  //   console.log("F U C K " + e.nativeEvent.clientX); // has value
  // }
  // const [testOpacity, setOpacity] = useState("")
  // const listenScrollEvent = () => {
  //    window.scrollY > 650 
    
  //     // ? setOpacity(".2")
  //     // : setOpacity("1")

  //     ? setOpacity("gold")
  //     : setOpacity("")
  // }


  const handleMouseMove = useCallback(
    ({ clientX }) => {
      if (state.isDragging) {
        setState(prevState => ({
          ...prevState,
          newWidth: clientX > 0 ? clientX / 2 : 0,
          newBarAmount: clientX > 0 ? clientX : 0
        }));
      }
    },
    [state.isDragging]
  );
//   const listenMoveEvent = () => {
//    window.clientX > 100
//      ? setOpacity(".2")
//      : setOpacity("1")
//  }

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  // window.addEventListener("scroll", listenScrollEvent);
  // window.addEventListener("nativeEvent",listenMoveEvent);
  window.addEventListener("mousemove", handleMouseMove);

// })
return () => {
  window.removeEventListener("mousemove", handleMouseMove);
};
}, [handleMouseMove]);



  return (
  
    <>
    
  <div style={{background: handleMouseMove}}>
    {/* <div style={{color: testColor}}>FOOD for Thought-test</div> */}
    <div id="globe">
  <img id="globe_spacer" 
  // className={`undefined ${
  //         small ? "small" : ""
  //       }`} 


  // style={{opacity: testOpacity}}

  // style={{background: testOpacity}}
        src={require('../../assets/img/globe3.png').default} alt={"spacer"}/>
    </div>
    {/* <div id="image_spacer"> */}
       <img id="image_spacer" src={require("../../assets/img/spacer.jpg").default} alt={"spacer"}/>
       
    </div>

</>
  );
}

export default Spacer;
