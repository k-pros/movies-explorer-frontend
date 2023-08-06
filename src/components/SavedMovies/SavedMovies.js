import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({isLoggedIn}) {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
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

export default SavedMovies;
