import "./AboutMe.css";
import { Link } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import photo from "../../images/about-me_photo.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title subtitle">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__container-info">
          <div className="about-me__info">
            <h3 className="about-me__name">Кирилл</h3>
            <p className="about-me__about">Фронтенд-разработчик, 35 лет</p>
            <p className="about-me__text text">
            «Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно» Альберт Эйнштейн
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
      <Portfolio />
    </section>
  );
}

export default AboutMe;
