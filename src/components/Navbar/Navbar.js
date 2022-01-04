import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <h2 className="navbar-title">Peter Vila</h2>
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <a href="#about">About Me</a>
        </li>
        <li className="navbar-list__item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-list__item">
          <a href="#technical">Skills and Tools</a>
        </li>
        <li className="navbar-list__item">
          <a href="#contact" target="_self">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
