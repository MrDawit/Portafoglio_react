import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const sideDrawer = props => {
  return (
    <nav className="side-drawer">
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