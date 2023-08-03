import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const cardImage =
  "https://avatars.mds.yandex.net/i?id=793583fe8aeffa99db89a11a272229168759f768-9085653-images-thumbs&n=13";

function MoviesCard() {
  const location = useLocation();

  if (location.pathname === "/movies" || location.pathname === "/movies/") {
    console.log(location.pathname);
    return (
      <>
        <li className="card">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
        <li className="card__item">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
        <li className="card__item">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn card__save-btn_active"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
        <li className="card__item">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn card__save-btn_active"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
        <li className="card__item">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
        <li className="card__item">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn card__save-btn_active"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
      </>
    );
  }

  if (
    location.pathname === "/saved-movies" ||
    location.pathname === "/saved-movies/"
  ) {
    return (
      <>
        <li className="card">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn card__save-btn_delete"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
        <li className="card">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn card__save-btn_delete"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
        <li className="card">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 47м</p>
            </div>
            <div className="card__save-btn btn card__save-btn_delete"></div>
          </div>
          <img src={cardImage} alt="Обложка фильма" className="card__image" />
        </li>
      </>
    );
  }

  return <></>;
}

export default MoviesCard;
