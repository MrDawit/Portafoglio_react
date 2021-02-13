import React from "react";

import { Link } from 'react-router-dom';
import ScrollToTop from "../ScrollToTop/index.js";
// import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import "./style.css";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarFull() {
  return (
    <nav className="navbar">
                <h2>Shalom Dawit</h2>
                <form>
                  <ScrollToTop />
                <Link id="red" to="/main">ABOUT</Link>               
                    <Link id="green" to="/portfolio">PORTFOLIO</Link>
                    <Link id="blue" to="/contact">CONTACT</Link> 
                </form>
            </nav>
  );
}

export default NavbarFull;
