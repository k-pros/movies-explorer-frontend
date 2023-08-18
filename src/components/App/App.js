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

  
  // загрузка информации о фильмах с сервера Beatfilm
  useEffect(() => {
    moviesApi.getMovies()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
  //   mainApi.register('11test@test.ru', 'name11', '123')
  //     .then((data) => {
  //       // console.log(data);
  //     })
  //     .catch((err) => console.log(err));

    // console.log(cards);
  }, []);

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
