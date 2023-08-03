import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <button type="button" aria-label="Ещё" className="movies__button btn">Ещё</button>
    </>
  );
}

export default SavedMovies;
