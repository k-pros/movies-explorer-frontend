import { Link, useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { useEffect, useState } from "react";

function MoviesCard({ movie, onSaveMovie, savedMovies, onDeleteMovie }) {
  const location = useLocation();
  const [isSavedMovie, setIsSaved] = useState(false);

  useEffect(() => {
    // checkSavedMovie(movie, savedMovies)
    savedMovies.forEach((item) => {
      if (item.movieId === movie.id) {
        movie._id = item._id;
        setIsSaved(true);
      }
    });
  }, [movie, savedMovies]);

  function convertDuration(movie) {
    const hours = Math.floor(movie / 60);
    const minutes = movie % 60;
    return `${hours}ч ${minutes}м`;
  }

  // обработчик клика по кнопке сохранения
  function handleSaveButton() {
    if (!isSavedMovie) {
      handleSaveMovie();
    } else {
      handleDeleteMovie();
    }

    setIsSaved(!isSavedMovie);
  }

  function handleSaveMovie() {
    const movieForSave = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };

    onSaveMovie(movieForSave);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  if (location.pathname === "/movies") {
    return (
      <li className="card">
        <div className="card__container">
          <div className="card__description">
            <h2 className="card__title">{movie.nameRU}</h2>
            <p className="card__time">{convertDuration(movie.duration)}</p>
          </div>
          <div
            className={`card__save-btn btn ${
              isSavedMovie ? "card__save-btn_active" : ""
            }`}
            onClick={handleSaveButton}
          ></div>
        </div>
        <Link
          to={movie.trailerLink}
          className="card__link link"
          target="_blank"
        >
          <img
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt="Обложка фильма"
            className="card__image"
          />
        </Link>
      </li>
    );
  }

  if (location.pathname === "/saved-movies") {
    return (
      <>
        <li className="card">
          <div className="card__container">
            <div className="card__description">
              <h2 className="card__title">{movie.nameRU}</h2>
              <p className="card__time">{convertDuration(movie.duration)}</p>
            </div>
            <div
              className="card__save-btn btn card__save-btn_delete"
              onClick={handleDeleteMovie}
            ></div>
          </div>
          <img src={movie.image} alt="Обложка фильма" className="card__image" />
        </li>
      </>
    );
  }
}

export default MoviesCard;
