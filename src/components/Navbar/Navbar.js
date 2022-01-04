import React, {useState, useEffect} from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [header, setHeader] = useState("header");
  const [header2, setHeader2] = useState("");
  const [header3, setHeader3] = useState("");
  const [header4, setHeader4] = useState("");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 500) {
      setHeader("header");
      setHeader2("")
      setHeader3("")
      setHeader4("")
    }if (window.scrollY > 500) {
      setHeader("")
      setHeader2("header")
      setHeader3("")
      setHeader4("")
    }
    if (window.scrollY > 1450) {
      setHeader("");
      setHeader2("");
      setHeader3("header");
      setHeader4("")
    }
    if (window.scrollY > 2000) {
      setHeader("");
      setHeader2("");
      setHeader3("");
      setHeader4("header")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <nav>
      <h2 className="navbar-title">Peter Vila</h2>
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <a href="#about" className={header}>About Me</a>
        </li>
        <li className="navbar-list__item">
          <a href="#projects" className={header2}>Projects</a>
        </li>
        <li className="navbar-list__item">
          <a href="#technical" className={header3}>Skills and Tools</a>
        </li>
        <li className="navbar-list__item">
          <a href="#contact" className={header4} target="_self">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
