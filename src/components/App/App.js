import { useEffect, useState } from "react";
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
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ERROR_FETCH_MOVIES } from "../../utils/constants";

function App() {
  const navigate = useNavigate();
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false); // стейт попапа с ошибкой
  const [isLoggedIn, setIsLoggedIn] = useState(true); // стейт авторизации пользователя
  const [cards, setCards] = useState([]); // стейт карточек
  const [isLoading, setIsLoading] = useState(false); // стейт процесса загрузки данных
  const [isSuccess, setIsSuccess] = useState(false); // стейт успешной регистрации/авторизации
  const [errorMessage, setErrorMessage] = useState(""); // стейт сообщения с ошибкой

  // стейт текущего пользователя
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     mainApi
  //       .getUserInfo()
  //       .then((user) => {
  //         setCurrentUser(user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, []);

  // проверка токена
  // useEffect(() => {
  //   checkToken();
  // }, []);

  // функция проверки токена
  function checkToken() {
    mainApi
      .checkToken()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }

   useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), moviesApi.getMovies()])
        .then(([userInfo, movies]) => {
          setIsLoading(true)
          setCurrentUser(userInfo)
          localStorage.setItem('movies', JSON.stringify(movies))
        })
        .catch((err) => {
          console.log(err);
          handleError(ERROR_FETCH_MOVIES);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn])

  // функция получения фильмов из локального хранилища
  function handleGetMovies() {
    setCards(JSON.parse(localStorage.getItem('movies')));
  }

  // обработчик выхода из аккаунта
  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
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

  // обработчик ошибки
  function handleError(message) {
    setIsSuccess(false);
    setIsInfoTooltipPopupOpen(true);
    setErrorMessage(message);
  }

  // обработчик закрытия попапа
  function handleClosePopup() {
    setIsInfoTooltipPopupOpen(false);
    setIsSuccess(false);
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
        handleError(err);
      });
  }

  function onLogin(email, password) {
    mainApi
      .autorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          // checkToken();
        }
        navigate("/movies");
        handleLogin();
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <Route path="/signin" element={<AuthForm onLogin={onLogin} />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>

          <InfoTooltip
            isOpen={isInfoTooltipPopupOpen}
            isSuccess={isSuccess}
            onClose={handleClosePopup}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
