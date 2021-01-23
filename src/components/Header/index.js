import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <nav class="navbar">
                <h2>Shalom Dawit</h2>
                <form>
                <Link id="red" to="/main">ABOUT</Link>               
                    <Link id="green" to="/portfolio">PORTFOLIO</Link>
                    <Link id="blue" to="/contact">CONTACT</Link> 
                </form>
            </nav>
  );
}

export default Header;
