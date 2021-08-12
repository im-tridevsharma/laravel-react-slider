import React from "react";

import "../assets/css/footer_style.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="footer-content">
              <h2>SMART CHARITABLES</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                adipisci veniam voluptatum voluptatem sed ex error beatae,
                asperiores dignissimos?
              </p>
              <ul>
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fab fa-google"></i>
                </li>
                <li>
                  <i className="fab fa-skype"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="footer-content">
              <h2>Quick Links</h2>
              <ol>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>About Us
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>Services
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>Blog
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>Contact Us
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="footer-content">
              <h2>Services</h2>
              <ol>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>About Us
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>Services
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>Blog
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-angle-double-right"></i>Contact Us
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="footer-content">
              <h2>News Letters</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <i className="fal fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="copy-right-card">
            <p>
              2015 @ All Rights Reserved Designed and developed by
              <a href="https://www.smarteyeapps.com">SmarteyeTechnologies</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
