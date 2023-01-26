import React from "react";
import responsivo from "./Navbar.module.css";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";

const Menu = ({ children }) => {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const handleChange = (event) => {
    setDarkTheme(event.target.checked);
    console.log(event.target.checked);
  };
  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <switch
        checked={darkTheme}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      <header className={responsivo.header}>
        <Switch
          className="switch_button"
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
            <li>
              <Link to={"Projects"}>Projetos</Link>
            </li>

            <li>Experiência</li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Menu;
