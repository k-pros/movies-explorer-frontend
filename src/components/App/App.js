import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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
            element={<Movies isLoggedIn={isLoggedIn} />} />
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
