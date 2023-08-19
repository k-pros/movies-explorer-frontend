import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // стейт авторизации пользователя
  const [cards, setCards] = useState([]); // стейт карточек
  const [isLoading, setIsLoading] = useState(false); // стейт процесса загрузки данных

   function handleGetMovies() {
    setIsLoading(true);

    moviesApi.getMovies()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => console.log(err))
    .finally(()=> setIsLoading(false));
  }

  function handleLogin() {
    setIsLoggedIn(true);
    navigate('/movies');
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    navigate('/');
  }

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route
            path="/"
            element={<Main isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/movies"
            element={
              <Movies 
                cards={cards}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                onGetMovies={handleGetMovies}
              />
            } 
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/profile"
            element={<Profile isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />}
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
