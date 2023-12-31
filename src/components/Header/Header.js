import { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import ProfileLink from "../ProfileLink/ProfileLink";
import Navbar from "../Navbar/Navbar";

function Header({ isLoggedIn }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  function handleBurgerClick() {
    setIsNavbarOpen(true);
  }

  function closeNavbar() {
    setIsNavbarOpen(false);
  }

  return (
    <>
      <header
        className={`header ${
          location.pathname === "/" ? "header_main-page" : ""
        }`}
      >
        <Logo />
        {!isLoggedIn ? (
          <>
            <div className="header__container">
              <ul className="header__auth">
                <li>
                  <Link to="/signup" className="header__signup-link link">
                    Регистрация
                  </Link>
                </li>
                <li>
                  <Link to="/signin" className="header__signin-link btn">
                    Войти
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="header__container header__container_authorized">
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
            <button
              onClick={handleBurgerClick}
              type="button"
              className="burger-btn btn"
            ></button>
            <Navbar isOpen={isNavbarOpen} onClose={closeNavbar} />
          </>
        )}
      </header>
    </>
  );
}

export default Header;
