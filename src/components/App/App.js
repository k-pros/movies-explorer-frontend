import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import { ERROR_FETCH_MOVIES, ERROR_PROFILE } from "../../utils/constants";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false); // стейт попапа с ошибкой
  const [isLoggedIn, setIsLoggedIn] = useState(false); // стейт авторизации пользователя
  const [cards, setCards] = useState([]); // стейт карточек для рендеринга
  // стейт всех фильмов
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  // стейт найденных фильмов
  const [foundMovies, setFoundMovies] = useState(
    JSON.parse(localStorage.getItem("foundMovies")) || []
  );
  // стейт найденных короткометражных фильмов
  const [foundShortMovies, setFoundShortMovies] = useState(
    JSON.parse(localStorage.getItem("foundShortMovies")) || []
  );
  // стейт переключателя короткометражек
  const [isToggleShortMovies, setIsToggleShortMovies] = useState(
    JSON.parse(localStorage.getItem("isToggleShortMovies")) || false
  );
  // стейт поискового запроса фильмов
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery") || ""
  );
  const [moviesForRender, setMoviesForRender] = useState([]); // стейт фильмов для рендеринга
  const [isLoading, setIsLoading] = useState(false); // стейт процесса загрузки данных
  const [isSuccess, setIsSuccess] = useState(false); // стейт успешной регистрации/авторизации
  const [isProfileUpdating, setIsProfileUpdating] = useState(false); // стейт редактирования профайла
  const [errorMessage, setErrorMessage] = useState(""); // стейт сообщения с ошибкой
  const [savedMovies, setSavedMovies] = useState([]); // стейт сохранённых фильмов
  const [isBtnLoading, setIsBtnLoading] = useState(false); // стейт блокировки формы на время процесса отправки

  // стейт текущего пользователя
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const location = useLocation();

  useEffect(() => {
    setCards(moviesForRender);
  }, [moviesForRender]);

  useEffect(() => {
    localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
    localStorage.setItem("foundShortMovies", JSON.stringify(foundShortMovies));
    localStorage.setItem("isToggleShortMovies", isToggleShortMovies);
  }, [foundMovies, foundShortMovies, isToggleShortMovies]);

  function getUserInfo() {
    mainApi
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // функция проверки токена
  function checkToken() {
    const path = location.pathname;

    mainApi
      .checkToken()
      .then()
      .then(() => {
        setIsLoggedIn(true);
        navigate(path);
      })
      .catch((err) => console.log(err));
  }

  // проверка токена
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    getSavedMovies();
  }, [currentUser]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), moviesApi.getMovies()])
        .then(([userInfo, movies]) => {
          setCurrentUser(userInfo);
          localStorage.setItem("movies", JSON.stringify(movies));
          handleGetMovies();
        })
        .catch((err) => {
          console.log(err);
          handleError(ERROR_FETCH_MOVIES);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);

  // функция получения фильмов из локального хранилища
  function handleGetMovies() {
    setAllMovies(JSON.parse(localStorage.getItem("movies")));
  }

  // обработчик выхода из аккаунта
  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.clear();
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

  // получение сохранённых фильмов
  function getSavedMovies() {
    mainApi
      .getMovies()
      .then((movies) => {
        setSavedMovies(
          movies.filter((item) => {
            return item.owner._id === currentUser._id;
          })
        );
      })
      .catch((err) => console.log(err));
  }

  // обработчик сохранения фильмов
  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then(() => {
        getSavedMovies();
      })
      .catch((err) => console.log(err));
  }

  // обработчик удаления фильмов
  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        getSavedMovies();
      })
      .catch((err) => console.log(err));
  }

  // функция регистрации пользователя
  function onRegister(name, email, password) {
    setIsBtnLoading(true)
    mainApi
      .register(name, email, password)
      .then(() => {
        navigate("/signin");
        handleRegister();
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      })
      .finally(() => setIsBtnLoading(false));
  }

  // функция авторизации пользователя
  function onLogin(email, password) {
    setIsBtnLoading(true)
    mainApi
      .autorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        navigate("/movies");
        handleLogin();
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      })
      .finally(() => setIsBtnLoading(false))
  }

  // функция обновления профиля
  function onUpdateProfile(name, email) {
    mainApi
      .updateUser(name, email)
      .then(() => {
        setIsProfileUpdating(false);
        getUserInfo();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(ERROR_PROFILE);
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
                <ProtectedRoute
                  element={Movies}
                  cards={cards}
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  allMovies={allMovies}
                  foundMovies={foundMovies}
                  setFoundMovies={setFoundMovies}
                  foundShortMovies={foundShortMovies}
                  setFoundShortMovies={setFoundShortMovies}
                  setMoviesForRender={setMoviesForRender}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  isToggleShortMovies={isToggleShortMovies}
                  setIsToggleShortMovies={setIsToggleShortMovies}
                  onSaveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  cards={cards}
                  setMoviesForRender={setMoviesForRender}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  moviesForRender={moviesForRender}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  onSignOut={handleSignOut}
                  onUpdateProfile={onUpdateProfile}
                  currentUser={currentUser}
                  setIsProfileUpdating={setIsProfileUpdating}
                  isProfileUpdating={isProfileUpdating}
                  errorMessage={errorMessage}
                  setMoviesForRender={setMoviesForRender}
                  getSavedMovies={getSavedMovies}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <AuthForm onRegister={onRegister} isBtnLoading={isBtnLoading} />
              }
            />
            <Route
              path="/signin"
              element={
                <AuthForm onLogin={onLogin} isBtnLoading={isBtnLoading} />
              }
            />
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
