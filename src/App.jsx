import "./App.css";
import { Alert } from "./components/Alert";
import { About } from "./components/About.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { TextForm } from "./components/TextForm.jsx";
import { Help } from "./components/Help.jsx";
import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  const toggleMode = useCallback(() => {
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
  }, [mode]);

  return (
    <Router>
      <div className="container1">
        <Navbar title="Case Converter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
      </div>
      <div className="container2 my-2">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/help" element={<Help mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}
