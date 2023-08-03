import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <div className="search-form">
        <input type="text" className="search-form__input" />
        <button
          className="search-form__btn btn"
          type="button"
          aria-label="Найти"
        ></button>
      </div>
      <div className="search__container-toggle">
        <button
          type="button"
          aria-label="Переключатель"
          class="search__toggle btn"
        ></button>
        <p className="search__toggle-name">Короткометражки</p>
      </div>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
