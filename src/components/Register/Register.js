import "../AuthForm/AuthForm.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Register() {
  return (
    <section className="auth-form">
      <Logo className="auth-form__logo" />
      <form className="form auth-form__form">
        <div className="form__container">
          <h2 className="form__title">Добро пожаловать!</h2>
          <label className="form__label">
            Имя
            <input type="text" className="form__input" />
          </label>

          <label className="form__label">
            E-mail
            <input type="text" className="form__input" />
          </label>

          <label className="form__label">
            Пароль
            <input type="password" className="form__input form__input_error" />
          </label>
          <span className="form__error">Что-то пошло не так...</span>
        </div>

        <button
          type="button"
          className="form__btn btn"
          aria-label="Зарегистрироваться"
        >
          Зарегистрироваться
        </button>
      </form>

      <div className="auth-form__info">
        <p className="auth-form__description">Уже зарегистрированы?</p>
        <Link to="/signin" className="auth-form__link link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
