import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import AuthForm from "../AuthForm/AuthForm";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // стейт  пользователя
  const [cards, setCards] = useState([]); // стейт карточек
  const [isLoading, setIsLoading] = useState(false); // стейт процесса загрузки данных
  const [isSuccess, setIsSuccess] = useState(false); // стейт успешной регистрации/авторизации

  function handleGetMovies() {
    setIsLoading(true);

    moviesApi
      .getMovies()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  // обработчик выхода из аккаунта
  function handleSignOut() {
    setIsLoggedIn(false);
    navigate("/");
  }

  // обработчик регистрации на сервере
  function handleRegister() {
    setIsSuccess(true);
  }

  // обработчик авторизации
  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/movies");
  }

  function onRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then(() => {
        navigate("/signin");
        handleRegister();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogin(email, password) {
    mainApi
      .autorize(email, password)
      .then(() => {
        navigate("/movies");
        handleLogin();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
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
            element={
              <Profile isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
            }
          />
          <Route
            path="/signup"
            element={<AuthForm onRegister={onRegister} />}
          />
          <Route 
            path="/signin" 
            element={<AuthForm onLogin={onLogin} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
