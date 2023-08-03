import React from "react";
import "./Header.css";
import { Link, Route, Routes } from "react-router-dom";

function Header(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <header className="header header_main-page">
            <div className="header__container">
              <div className="header__logo"></div>
            </div>
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
          </header>
        }
      />
      <Route
        path="/*"
        element={
          <header className="header">
            <div className="header__container">
              <div className="header__logo"></div>
              <ul className="header__links">
                <li>
                  <Link
                    to="#"
                    className="header__nav-link header__nav-link_active link"
                  >
                    Фильмы
                  </Link>
                </li>
                <li>
                  <Link to="#" className="header__nav-link link">
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="#" className="header__profile">
              <p className="header__profile-desc">Аккаунт</p>
              <div className="header__profile-ico-wrapper">
                <div className="header__profile-ico"></div>
              </div>
            </Link>
          </header>
        }
      />
    </Routes>
  );
}

export default Header;
