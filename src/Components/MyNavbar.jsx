import React from "react";
import { Link } from "react-router-dom";

import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
       
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tv-shows">
                  Tv Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/harry-poter">
                  Harry Poter
                </Link>
              </li>
            
              {/* <li className="nav-item">
                <Link className="nav-link" to="/my-list">
                  My List
                </Link>
              </li> */}
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;
