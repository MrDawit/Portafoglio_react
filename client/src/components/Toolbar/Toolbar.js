import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton';
import { Link } from 'react-router-dom';
import './style.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo">
                {/* <a href="/">THE LOGO</a> */}
                <h2>Shalom Dawit</h2>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
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
            </div>
        </nav>
    </header>
)

export default toolbar