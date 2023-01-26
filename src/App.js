import "./App.css";
import HomeStart from "./components/HomeStart";
import React from "react";

import Footer from "./components/Footer.js";
import Projects from "./components/Projects";
import Menu from "./components/Menu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menu>
          <Routes>
            <Route path="/" element={<HomeStart />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </Menu>
      </Router>
      <Footer />

    </>
  );
}

export default App;
