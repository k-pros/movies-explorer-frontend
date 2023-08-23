import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useWindowSize } from "@uidotdev/usehooks";
import Preloader from "../Preloader/Preloader";
import { searchMovies, searchShortMovies } from "../../utils/searchMovies";

function Movies({
  cards,
  isLoggedIn,
  isLoading,
  setIsLoading,
  foundMovies,
  setFoundMovies,
  allMovies,
  searchQuery,
  setSearchQuery,
  foundShortMovies,
  setFoundShortMovies,
  setMoviesForRender,
  isToggleShortMovies,
  setIsToggleShortMovies,
}) {
  const { width } = useWindowSize(); // ширина экрана
  const [cardsForRender, setCardsForRender] = useState(0); // стейт карточек для отображения
  const [amountCards, setAmountCards] = useState(0); // стейт кол-ва карточек в зависимости от ширины экрана
  const [amountCardsToAdd, setAmountCardsToAdd] = useState(0); // стейт кол-ва карточек для добавления
  const [index, setIndex] = useState(0); // стейт кол-ва отображённых на экране карточек

  useEffect(() => {
    if (index === 0) setIndex(amountCards);
    setCardsForRender(cards.slice(0, index));
  }, [amountCards, index, cards]);

  // задание стейта для рендеринга в зависимости от состояния переключателя
  useEffect(() => {
    setMoviesForRender(
      isToggleShortMovies && foundMovies.length > 0
        ? foundShortMovies
        : foundMovies
    );
  }, [isToggleShortMovies]);

  useEffect(() => {
    setFoundShortMovies(searchShortMovies(foundMovies));
  }, [foundMovies]);

  useEffect(() => {
    setMoviesForRender(isToggleShortMovies ? foundShortMovies : foundMovies);
  }, [foundMovies, foundShortMovies]);

  // установка стейтов количества карточек в зависимости от ширины экрана
  useEffect(() => {
    if (width >= 992) {
      setAmountCards(12);
      setAmountCardsToAdd(3);
    } else if (width >= 620) {
      setAmountCards(8);
      setAmountCardsToAdd(2);
    } else {
      setAmountCards(5);
      setAmountCardsToAdd(2);
    }
  }, [width]);

  // добавление дополнительных карточек при клике на кнопку
  function addMoreCards() {
    setIndex(index + amountCardsToAdd);
    setCardsForRender(cards.slice(0, index));
  }

  function handleSearchMovies(e) {
    e.preventDefault();

    setIsLoading(true);
    setFoundMovies(searchMovies(allMovies, searchQuery));
    localStorage.setItem("searchQuery", searchQuery);
    setIsLoading(false);
  }

  function handleToggleSwitch() {
    setIsToggleShortMovies(!isToggleShortMovies);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="content">
        <SearchForm
          onSearchMovies={handleSearchMovies}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onToggleSwitch={handleToggleSwitch}
          isToggleShortMovies={isToggleShortMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : cardsForRender.length > 0 ? (
          <>
            <MoviesCardList cards={cardsForRender} />
            <button
              type="button"
              aria-label="Ещё"
              className={`movies-button btn ${
                cards.length > index ? "movies-button_visible" : ""
              }`}
              onClick={addMoreCards}
            >
              Ещё
            </button>
          </>
        ) : (
          <p className="movies__search-result">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;