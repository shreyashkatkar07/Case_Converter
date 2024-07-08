/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Contact } from "./Feedback";
import "../App.css";
import { Link } from "react-router-dom";

export const Navbar = React.memo((props) => {
  const capitalise = useCallback((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg shadow navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a href="/">
            <img
              src="../../src/assets/favicon_io/apple-touch-icon.png"
              className="symbol"
              alt=""
              style={{ width: "3rem", display: "flex" }}
            />
          </a>
          <a className="navbar-brand" href="/" style={{ fontSize: "1.5rem" }}>
            {props.title}
          </a>
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
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  Help us
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-center pb-2 pb-lg-0">
              <div
                className={`form-check text-center form-switch mx-1 text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                style={{ width: "170px" }}
              >
                <label
                  className="form-check-label me-3"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {capitalise(props.mode)} Mode
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
              </div>
            </div>
            <Contact mode={props.mode} />
            <form className="d-flex m-2" role="search">
              <input
                className="form-control mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#343a40",
                }}
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                href="/"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
});

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTU: PropTypes.string,
};
Navbar.defaultProps = { title: "Set title here", aboutTU: "About text here" };
