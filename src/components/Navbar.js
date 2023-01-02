import responsivo from "./Navbar.module.css";
import Theme from "../Theme";

function Navbar() {
  return (
    <div>
      <header className={responsivo.header}>
        <h1 className={responsivo.LogoText}>GO</h1>
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
            
              <Theme />
            
            <li>Projetos</li>
            <li>Experiencia</li>
            <li>Home</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
