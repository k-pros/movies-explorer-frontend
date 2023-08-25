import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useWindowSize } from "@uidotdev/usehooks";
import Preloader from "../Preloader/Preloader";
import { searchMovies, searchShortMovies } from "../../utils/searchMovies";
import {
  DESCTOP_CARD_COUNT,
  DESCTOP_MORE_CARD_COUNT,
  DESCTOP_VIEW_WIDTH,
  MOBILE_CARD_COUNT,
  MOBILE_MORE_CARD_COUNT,
  TABLET_CARD_COUNT,
  TABLET_MORE_CARD_COUNT,
  TABLET_VIEW_WIDTH,
} from "../../utils/constants";

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
  onSaveMovie,
  savedMovies,
  onDeleteMovie,
  onGetMovies,
  currentUser,
  getSavedMovies,
  handleError,
}) {
  const { width } = useWindowSize(); // ширина экрана
  const [cardsForRender, setCardsForRender] = useState(0); // стейт карточек для отображения
  const [amountCards, setAmountCards] = useState(0); // стейт кол-ва карточек в зависимости от ширины экрана
  const [amountCardsToAdd, setAmountCardsToAdd] = useState(0); // стейт кол-ва карточек для добавления
  const [index, setIndex] = useState(0); // стейт кол-ва отображённых на экране карточек

  useEffect(() => {
    getSavedMovies();
  }, [currentUser]);

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
  }, [isToggleShortMovies, foundMovies, foundShortMovies]);

  useEffect(() => {
    setFoundShortMovies(searchShortMovies(foundMovies));
  }, [foundMovies]);

  // установка стейтов количества карточек в зависимости от ширины экрана
  useEffect(() => {
    if (width >= DESCTOP_VIEW_WIDTH) {
      setAmountCards(DESCTOP_CARD_COUNT);
      setAmountCardsToAdd(DESCTOP_MORE_CARD_COUNT);
    } else if (width >= TABLET_VIEW_WIDTH) {
      setAmountCards(TABLET_CARD_COUNT);
      setAmountCardsToAdd(TABLET_MORE_CARD_COUNT);
    } else {
      setAmountCards(MOBILE_CARD_COUNT);
      setAmountCardsToAdd(MOBILE_MORE_CARD_COUNT);
    }
  }, [width]);

  // добавление дополнительных карточек при клике на кнопку
  function addMoreCards() {
    setIndex(index + amountCardsToAdd);
    setCardsForRender(cards.slice(0, index));
  }

  useEffect(() => {
    setFoundMovies(searchMovies(allMovies, searchQuery));
  }, [allMovies])

  function handleSearchMovies(e) {
    e.preventDefault();
    onGetMovies();
    localStorage.setItem("searchQuery", searchQuery);
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
            <MoviesCardList
              cards={cardsForRender}
              onSaveMovie={onSaveMovie}
              savedMovies={savedMovies}
              onDeleteMovie={onDeleteMovie}
            />
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
