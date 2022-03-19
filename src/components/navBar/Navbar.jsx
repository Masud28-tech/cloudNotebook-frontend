import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from "../../assets/l2.svg";

const Navbar = () => {
  let location = useLocation();

  return (
    <>
      {/*  <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div className="container">
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              height="50rem"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </Link>

          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>


          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">


            {/* <!-- Left links --> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"}? "active" : "" `} to="/">Dashboard</Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about"}? "active" : "" `} to="/about">About</Link>
              </li>
            </ul>

            {/* <!-- Search form --> */}
            <form className="input-group w-auto my-auto d-none d-sm-flex">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search"
                style={{ minWidth: "125px" }}
              />
              <span className="input-group-text border-0 d-none d-lg-flex">
                <i className="fas fa-search"></i>
              </span>
            </form>

            {/* <!-- Left links --> */}
            <div className="d-flex align-items-center">
              <Link role="button" className="btn btn-outline-primary px-3 mx-2" to="/login">
                Login
              </Link>

              <Link type="button" className="btn btn-primary me-2" to="/sign-up">
                Sign up for free
              </Link>

              <Link className="btn btn-dark px-3" role="button" to="git-gub" >
                <i className="fab fa-github"></i>
              </Link>
            </div>

          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
}

export default Navbar;