import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom border-body"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-primary fw-bold" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <div
            className="search"
            style={{ position: "absolute", right: "400px" }}
          >
            <form
              className="d-flex align-items-center"
              role="search"
              // style={{paddingRight: "260px" }}
            >
              <input
                className="form-control  border border-1 border-primary"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "530px", outline: "none" }}
              />
              <button className="btn btn-outline-primary mx-2" type="submit">
                Search
              </button>
            </form>
          </div>
          {localStorage.getItem("token") !== null ? (
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn border border-0"
                style={{ cursor: "default" }}
              >
                <span className="text-primary">
                  {localStorage.getItem("name")}
                </span>
              </button>
              <Link
                className="btn btn-outline-primary me-2"
                to="/login"
                role="button"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            <div>
              <Link
                className="btn btn-outline-primary me-2"
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className="btn btn-outline-primary me-2"
                to="/signup"
                role="button"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
