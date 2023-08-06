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
            <input type="text" className="form__input" minLength={2} maxLength={30} required />
          </label>

          <label className="form__label">
            E-mail
            <input type="email" className="form__input" minLength={2} maxLength={30} required />
          </label>

          <label className="form__label">
            Пароль
            <input
              type="password"
              className="form__input form__input_error"
              minLength={2} maxLength={30}
              required
            />
          </label>
          <span className="form__error">Что-то пошло не так...</span>
        </div>

        <button
          type="submit"
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
