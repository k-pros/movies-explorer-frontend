import "./SearchForm.css";

function SearchForm( { onSearchMovies }) {
  return (
    <section className="search">
      <div className="search-form">
        <input type="text" placeholder="Фильм" className="search-form__input" />
        <button
          className="search-form__btn btn"
          type="button"
          aria-label="Найти"
          onClick={onSearchMovies}
        ></button>
      </div>
      <div className="search__container-toggle">
        <button
          type="button"
          aria-label="Переключатель"
          className="search__toggle btn"
        ></button>
        <p className="search__toggle-name">Короткометражки</p>
      </div>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
