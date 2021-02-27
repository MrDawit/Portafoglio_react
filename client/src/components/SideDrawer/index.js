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
     <ul>
                    <li>
                    <Link id="red" to="/main">ABOUT</Link>   
                    </li>
                    <li>
                    <Link id="green" to="/portfolio">PORTFOLIO</Link>
                    </li>
                    <li>
                    <Link id="blue" to="/contact">CONTACT</Link>
                    </li>
                </ul>
    </nav>
  )
}

export default sideDrawer