import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <Header />
      <main className="content">
        <SearchForm />
        <MoviesCardList />
        <button type="button" aria-label="Ещё" className="movies__button btn">
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
