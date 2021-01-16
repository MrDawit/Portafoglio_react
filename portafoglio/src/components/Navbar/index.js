import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <a className="navbar-brand" href="/">
        About
      </a>
      </div>
      <div>
      <a className="navbar-brand" href="/contact">
        Contact
      </a>
      </div>
      {/* <a className="navbar-brand" href="/portfolio">
        Portfolio
      </a> */}
    </nav>
  );
}

export default Navbar;
