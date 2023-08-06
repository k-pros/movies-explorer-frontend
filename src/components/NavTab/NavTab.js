import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
  
  return (
    <nav className="nav-tab">
      <ul className="nav-links">
        <li>
          <Link to="#" className="nav-link">О проекте</Link>
        </li>
        <li>
          <Link to="#" className="nav-link">Технологии</Link>
        </li>
        <li>
          <Link to="#" className="nav-link">Студент</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;