import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
     <ul id="drawer_ul">
                    <li className="drawer_item">
                    <Link className="drawer_links" id="red" to="/main">ABOUT</Link>   
                    </li>
                    <li className="drawer_item">
                    <Link className="drawer_links" id="green" to="/portfolio">PORTFOLIO</Link>
                    </li>
                    <li className="drawer_item">
                    <Link className="drawer_links" id="blue" to="/contact">CONTACT</Link>
                    </li>
                </ul>
    </nav>
  )
}

export default sideDrawer