import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { HeaderWrapper} from "../styles";

function Header() {
    const location = useLocation();
    return (
      <HeaderWrapper>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume/contact"
            className={location.pathname === "/resume/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
        
      </ul>
      </HeaderWrapper>
    );
}


export default Header;