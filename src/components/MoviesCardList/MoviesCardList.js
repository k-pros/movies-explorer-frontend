import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards, onSaveMovie, savedMovies, onDeleteMovie }) {
  return (
    <section className="movies">
      <ul className="movies-list">
        {cards.length > 0 &&
          cards.map((movie) => {
            return (
              <MoviesCard
                key={movie.id ?? movie._id}
                movie={movie}
                onSaveMovie={onSaveMovie}
                savedMovies={savedMovies}
                onDeleteMovie={onDeleteMovie}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
