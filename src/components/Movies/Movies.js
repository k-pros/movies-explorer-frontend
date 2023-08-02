import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <button type="button" aria-label="Ещё" className="movies__button btn">Ещё</button>
    </>
  );
}

export default Movies;
