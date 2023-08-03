import { Route, Routes } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <Routes>
      <Route path="/movies" element={
        <p>AAAAAAAAAAA</p>
      } />
      <Route path="/saved-movies" element={
        <p>BBBBBBBBBBB</p>
      } />
    </Routes>
  );
}

export default MoviesCard;
