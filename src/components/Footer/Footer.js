import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__date">&copy; 2023</p>
        <nav>
          <ul className="footer__links">
            <li>
              <Link
                to="https://practicum.yandex.ru"
                className="footer__link link"
                target="_blank"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/tager-pro"
                className="footer__link link"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;