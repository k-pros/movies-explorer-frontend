import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProfileLink from "../ProfileLink/ProfileLink";

function Navbar({isOpen, onClose}) {
  return (
    <section className={`navbar ${isOpen ? "navbar_opened" : ""}`}>
      <div className="navbar__container">
        <button
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
          className="navbar__close btn"
        ></button>
        <ul className="navbar__links">
          <li>
            <Link to="/" className="navbar__link link">
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="navbar__link navbar__link_active navbar__link_active link"
            >
              Фильмы
            </Link>
          </li>
          <li>
            <Link to="/saved-movies" className="navbar__link link">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <ProfileLink />
      </div>
    </section>
  );
}

export default Navbar;
