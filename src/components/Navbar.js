import React from "react";
import Dropdown from "./Dropdown";
import logo from "./utils/newsLogo.png";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar({selectedCountry}) {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-warning bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="80" alt="" 
            className="d-inline-block align-middle mr-3 p-1 bg-dark rounded-pill"/>
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold" id="nav-List">
              <li className="nav-item">
                <Link className="nav-link active li" aria-current="page" to="/">
                  Home
                </Link>
              </li>
  
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/science">
                Science
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                Technology
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/health">
                Health
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
            </ul>
            
              <li className="nav-item">
                <Dropdown 
                className="float-end" 
                selectedCountry={selectedCountry}
                />
              </li>
          </div>
        </div>
      </nav>
    </>
  );
}
