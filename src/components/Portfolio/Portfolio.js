import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__subtitle">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link
            to="#"
            className="portfolio__link link"
            target="blank"
            rel="noreferrer"
          >
            Статичный сайт
            <div className="portfolio__ico"></div>
          </Link>
        </li>
        <li className="portfolio__list-item link">
          <Link
            to="#"
            className="portfolio__link"
            target="blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <div className="portfolio__ico"></div>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link
            to="#"
            className="portfolio__link link"
            target="blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <div className="portfolio__ico"></div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
