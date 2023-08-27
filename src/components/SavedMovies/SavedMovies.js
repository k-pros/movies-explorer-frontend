import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { searchMovies, searchShortMovies } from "../../utils/searchMovies";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  isLoggedIn,
  isLoading,
  setIsLoading,
  cards,
  setMoviesForRender,
  savedMovies,
  onDeleteMovie,
  moviesForRender,
  currentUser,
  getSavedMovies,
}) {
  
  const [searchQuerySavedMovies, setSearchQuerySavedMovies] = useState("");
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [foundShortSavedMovies, setFoundShortSavedMovies] = useState([]);
  const [isToggleSavedMovies, setIsToggle] = useState(false);

  useEffect(() => {
    getSavedMovies();
  }, [currentUser]);

  useEffect(() => {
    searchQuerySavedMovies
      ? setFoundSavedMovies(moviesForRender)
      : setFoundSavedMovies(savedMovies);

    searchShortMovies(savedMovies, searchQuerySavedMovies);
  }, [savedMovies]);

  useEffect(() => {
    setFoundShortSavedMovies(searchShortMovies(foundSavedMovies));
  }, [foundSavedMovies]);

  useEffect(() => {
    setMoviesForRender(
      isToggleSavedMovies && foundSavedMovies.length > 0
        ? foundShortSavedMovies
        : foundSavedMovies
    );
  }, [isToggleSavedMovies, foundShortSavedMovies]);
  
  function handleSearchMovies(e) {
    e.preventDefault();
    
    setIsLoading(true);
    setFoundSavedMovies(searchMovies(savedMovies, searchQuerySavedMovies));
    setIsLoading(false);
  }

  function handleToggleSwitch() {
    setIsToggle(!isToggleSavedMovies);
  }

  function handleDelete() {
    onDeleteMovie();
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="content">
        <SearchForm
          onSearchMovies={handleSearchMovies}
          searchQuery={searchQuerySavedMovies}
          setSearchQuery={setSearchQuerySavedMovies}
          onToggleSwitch={handleToggleSwitch}
          isToggleShortMovies={isToggleSavedMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : moviesForRender.length > 0 ? (
          <MoviesCardList
            cards={cards}
            savedMovies={savedMovies}
            onDeleteMovie={onDeleteMovie}
          />
        ) : (
          <p className="movies__search-result">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
