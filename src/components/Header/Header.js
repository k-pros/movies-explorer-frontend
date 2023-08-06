import React from "react";
import "./Header.css";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../Logo/Logo";
import ProfileLink from "../ProfileLink/ProfileLink";
import Navbar from "../Navbar/Navbar";

function Header(props) {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

  function handleBurgerClick() {
    setIsNavbarOpen(true)
  }

  function closeNaveBar() {
    setIsNavbarOpen(false)
  }

  return (
    <Routes>
      <Route
        // path="/"
        element={
          <header className="header header_main-page">
            <Logo />
            <div className="header__container">
              <ul className="header__account">
                <li>
                  <Link to="#" className="header__signup-link link">
                    Регистрация
                  </Link>
                </li>
                <li>
                  <button
                    className="header__signin-btn btn"
                    type="button"
                    aria-label="Войти"
                  >
                    Войти
                  </button>
                </li>
              </ul>
            </div>
          </header>
        }
      />

      <Route
        path="/"
        element={
          <header className="header">
            <Logo />
            <div className="header__container">
              <ul className="header__links">
                <li>
                  <Link
                    to="/movies"
                    className="header__nav-link header__nav-link_active link"
                  >
                    Фильмы
                  </Link>
                </li>
                <li>
                  <Link to="/saved-movies" className="header__nav-link link">
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
              <ProfileLink />
            </div>
            <button onClick={handleBurgerClick} type="button" className="burger-btn btn"></button>

            <Navbar
              isOpen={isNavbarOpen}
              onClose={closeNaveBar}
            />

          </header>
        }
      />
    </Routes>
  );
}

export default Header;
