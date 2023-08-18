import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({cards}) {
  return (
    <section className="movies">
      <ul className="movies-list">
        {
          cards.length > 0 && cards.map((movie) => {
            return (
              <MoviesCard key={movie.id} movie={movie}/>  
            )
          }
        )}
      </ul>
    </section>
  );
}

export default MoviesCardList;
