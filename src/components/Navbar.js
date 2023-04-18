import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-2 mb-5 mt-4 navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-5 heading">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" aria-current="page" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
