import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <Link className="navbar-brand" to="/admin/addSlider">
        Admin Panel
      </Link>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/addSlider">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/allSliders">
                All Sliders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
