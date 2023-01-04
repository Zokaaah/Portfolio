import "./App.css";
import HomeStart from "./components/HomeStart";
import React from "react";
import responsivo from "./components/Navbar.module.css";
import { Switch } from "@mui/material";
import Footer from "./components/Footer.js";


function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const handleChange = (event) => {
    setDarkTheme(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <div>
      <div className={darkTheme ? "dark-theme" : "light-theme"}>
        <switch
          checked={darkTheme}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />

        <header className={responsivo.header}>
          
          <Switch className="switch_button"
          color="success"
            onChange={() => setDarkTheme((prevTheme) => !prevTheme)}
          ></Switch>{" "}
          <input
            className={responsivo.side_menu}
            type="checkbox"
            id="side_menu"
          />
          <label className={responsivo.hamb} for="side_menu">
            <span className={responsivo.hamb_line}></span>
          </label>
          <nav className={responsivo.nav}>
            <ul className={responsivo.menu}>
              <li>Projetos</li>
              <li>Experiência</li>
              <li>Home</li>
            </ul>
          </nav>
        </header>
        <HomeStart />
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
