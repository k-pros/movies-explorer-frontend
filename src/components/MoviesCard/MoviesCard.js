import { Link, useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard({ movie }) {
  const location = useLocation();
  const [isSavedMovie, setIsSaved] = useState(false);

  // if (location.pathname === "/movies" || location.pathname === "/movies/") {
  //   return (
  //     <>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn card__save-btn_active"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn card__save-btn_active"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn card__save-btn_active"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //     </>
  //   );
  // }

  // if (
  //   location.pathname === "/saved-movies" ||
  //   location.pathname === "/saved-movies/"
  // ) {
  //   return (
  //     <>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn card__save-btn_delete"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn card__save-btn_delete"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //       <li className="card">
  //         <div className="card__container">
  //           <div className="card__description">
  //             <h2 className="card__title">33 слова о дизайне</h2>
  //             <p className="card__time">1ч 47м</p>
  //           </div>
  //           <div className="card__save-btn btn card__save-btn_delete"></div>
  //         </div>
  //         <img src={cardImage} alt="Обложка фильма" className="card__image" />
  //       </li>
  //     </>
  //   );
  // }

  function convertDuration(movie) {
    const hours = Math.floor(movie/60);
    const minutes = movie % 60;
    return `${hours}ч ${minutes}м`
  }

  // обработчик клика по кнопке сохранения
  function handleSaveMovie() {
    setIsSaved(!isSavedMovie);
  }

  return(
    <li className="card">
      <div className="card__container">
        <div className="card__description">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__time">{convertDuration(movie.duration)}</p>
        </div>
        <div className={`card__save-btn btn ${isSavedMovie ? "card__save-btn_active" : ""}`} onClick={handleSaveMovie}></div>
      </div>
      <Link to={movie.trailerLink} className="card__link link" target="_blank">
        <img src={`https://api.nomoreparties.co${movie.image.url}`} alt="Обложка фильма" className="card__image" />
      </Link>
    </li>
  );
}

export default MoviesCard;
