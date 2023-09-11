import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Help from "./components/Help.jsx";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("Light mode enabled");

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      setAlert("Dark mode has been enabled.");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#343a40";
      setAlert("Light mode has been enabled.");
    }
  };
  return (
    <>
      {/* <Router> */}
        <div className="container1">
          <Navbar title="Case Converter" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        </div>
        <div className="container2 my-2">
          {/* <Routes> */}
            {/* <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter the text to analyse" mode={mode} />
              }
            ></Route> */}
            <TextForm heading="Enter the text to analyse" mode={mode} />

            {/* <Route exact path="/about" element={<About mode={mode}/>}></Route> */}
            
            <About mode={mode}/>
            {/* <Route exact path="/help" element={<Help />}></Route> */}
            <Help />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}