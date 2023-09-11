import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import "../App.css";

// to-do
//search meaning of word using btn
//varying modal content(bootstrap) for contact us
//grammarly api check

export default function Navbar(props) {
  
  const handleAbout = () => {
    let newText =
      "Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above";
    setAbout(newText);
  };
  
  const capitalise = (word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <img
            src="../../src/assets/favicon_io/apple-touch-icon.png"
            className="symbol"
            alt=""
          />
          <a
            className="navbar-brand"
            href="/"
            onClick={handleAbout}
            style={{ fontSize: "1.5rem" }}
          >
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link"  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help us
                </a>
              </li>
            </ul>
          
            <div
              className={`form-check form-switch mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <label
                className="form-check-label me-3"
                htmlFor="flexSwitchCheckDefault"
              >
                {capitalise(props.mode)} Mode ON
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
            </div>
            <Contact />
            {/* <form className="d-flex" role="search">
              <input
                className={`form-control me-2 text-${
                  props.mode === "light" ? "#343a40" : "white"
                }`}
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
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTU: PropTypes.string,
};
Navbar.defaultProps = { title: "Set title here", aboutTU: "About text here" };


