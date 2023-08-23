import "./SearchForm.css";

function SearchForm({
  onSearchMovies,
  setSearchQuery,
  onToggleSwitch,
  isToggleShortMovies,
  searchQuery
}) {

  function handleToggle() {
    onToggleSwitch();
  }

  function handleChange(e) {
    const { value } = e.target;
    setSearchQuery(value);
  }

  return (
    <section className="search">
      <form onSubmit={onSearchMovies} className="search-form">
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          onChange={handleChange}
          value={searchQuery || ""}
        />
        <button
          className="search-form__btn btn"
          type="submit"
          aria-label="Найти"
        ></button>
      </form>
      <div className="search__container-toggle">
        <button
          type="button"
          aria-label="Переключатель"
          className={`search__toggle btn ${
            isToggleShortMovies ? "search__toggle_active" : ""
          }`}
          onClick={handleToggle}
        ></button>
        <p className="search__toggle-name">Короткометражки</p>
      </div>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
