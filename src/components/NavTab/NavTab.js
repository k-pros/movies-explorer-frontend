import "./NavTab.css";

function NavTab() {
  
  return (
    <nav className="nav-tab">
      <ul className="nav-links">
        <li>
          <a href="#about" className="nav-link">О проекте</a>
        </li>
        <li>
          <a href="#tech" className="nav-link">Технологии</a>
        </li>
        <li>
          <a href="#student" className="nav-link">Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;