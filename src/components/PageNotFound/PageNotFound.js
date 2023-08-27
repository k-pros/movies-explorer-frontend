import { Link, useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-3);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <button onClick={goBack} className="not-found__link link">Назад</button>
    </section>
  );
}

export default PageNotFound;