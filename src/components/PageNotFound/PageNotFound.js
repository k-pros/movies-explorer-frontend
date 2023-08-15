import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <Link to="/" className="not-found__link link">Назад</Link>
    </section>
  );
}

export default PageNotFound;
