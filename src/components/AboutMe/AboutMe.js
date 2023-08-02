import "./AboutMe.css";
import { Link } from "react-router-dom";
import photo from "../../images/about-me_photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title subtitle">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__container-info">
          <div className="about-me_info">
            <h3 className="about-me__name">Кирилл</h3>
            <p className="about-me__about">Фронтенд-разработчик, 35 лет</p>
            <p className="about-me__text text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, aspernatur voluptatem. Sit eaque aperiam nisi quos
              impedit nam eos temporibus reprehenderit non debitis commodi
              tempore inventore, facilis, cumque alias ducimus, earum
              accusantium veniam quod ea ipsum voluptas. Obcaecati, animi autem!
            </p>
          </div>
          <Link
            to="https://github.com/tager-pro"
            className="about-me__github"
            target="blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
        <img src={photo} alt="фото" className="about-me__photo" />
      </div>
      <div className="portfolio">
        <h4 className="portfolio__subtitle">Портфолио</h4>
        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <Link
              to="#"
              className="portfolio__link"
              target="blank"
              rel="noreferrer"
            >
              Статичный сайт
              <div className="portfolio__ico"></div>
            </Link>
          </li>
          <li className="portfolio__list-item">
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
              className="portfolio__link"
              target="blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <div className="portfolio__ico"></div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
