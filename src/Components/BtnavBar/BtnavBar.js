import React, { useState } from "react";
import "./BtnavBar.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const BtnavBar = () => {

const [navbar ,setNavbar] = useState(false);

const changeBackground = () => {
  // console.log(window.scrollY);
  if (window.scrollY >= 80) {
    setNavbar(true);
  } else {
    setNavbar(false);
  }
};
window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <nav class={navbar ? "navbar navbar-expand-lg fixed-top navbar-dark bg-dark":"navbar  navbar-expand-lg navbar-dark bg-transparent" }>
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#count">
                  {" "}
                  Product
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {" "}
                  Services
                </a>
              </li>
              <li class="nav-item">
               
                <Link  class="nav-link" to='contact'> Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BtnavBar;
