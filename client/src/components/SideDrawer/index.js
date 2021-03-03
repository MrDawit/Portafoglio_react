import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const sideDrawer = props => {
  // const [ronald, setRonald] = useState(false);
  let drawerClasses = "side-drawer";
  
 // let wicked = false;
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  

  // if(props.close){
  //   drawerClasses = "side-drawer";
  // }


//   let handleClicked = () => {
//    drawerClasses = "side-drawer"
// }

  // if(props.clickED) {
  //   drawerClasses = "side-drawer";
  // }
  // show={this.state.sideDrawerOpen}
//   if (wicked){
// this.props.ronald=true;
//   }
  // if (closeDrawer){
  //   drawerClasses = "side-drawer";
  //   backdrop = false;
  //   sideDrawerOpen = false; 
  // }
  return (
    <nav className={drawerClasses} >
     <ul id="drawer_ul">
                    <li className="drawer_item">
                    <Link className="drawer_links" id="red" to="/main" onClick={props.click} >ABOUT</Link>   
                    </li>
                    <li className="drawer_item">
                    <Link className="drawer_links" id="green" to="/portfolio" onClick={props.click} >PORTFOLIO</Link>
                    </li>
                    <li className="drawer_item">
                    <Link className="drawer_links" id="blue" to="/contact" onClick={props.click}>CONTACT</Link>
                    </li>
                </ul>
    </nav>
  )
}

export default sideDrawer