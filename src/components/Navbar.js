import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ marginBottom: "7%" }}>
      <nav class="navbar navbar-expand-lg shadow p-2 mb-3">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/about">
                  About Me
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
