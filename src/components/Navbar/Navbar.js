import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <div>
      <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <Link class="navbar-brand border border-light" to="#">
              MaggieMania</Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page " to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active "to="/contact">Contact</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-warning" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div >
  )
}
export default Navbar;