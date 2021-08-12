import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import "../assets/css/header_style.css";

export default function Header() {
  return (
    <header>
      <div className="my-nav">
        <div className="container px-0">
          <div className="row">
            <div className="nav-items">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="menu-toggle">
                <div className="menu-hamburger"></div>
              </div>
              <div className="menu-items">
                <div className="menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
