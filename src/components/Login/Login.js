import "../AuthForm/AuthForm.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Login({ onLogin }) {
  return (
    <section className="auth-form">
      <Logo className="auth-form__logo" />
      <form className="form auth-form__form">
        <div className="form__container">
          <h2 className="form__title">Рады видеть!</h2>
          
          <label className="form__label">
            E-mail
            <input type="email" className="form__input" placeholder="E-mail" minLength={2} maxLength={30} required />
          </label>

          <label className="form__label">
            Пароль
            <input
              type="password"
              className="form__input"
              placeholder="Пароль"
              minLength={2} maxLength={30}
              required
            />
          </label>

          <span className="form__error">Что-то пошло не так...</span>
        </div>

        <button onClick={onLogin} type="button" className="form__btn btn" aria-label="Войти">
          Войти
        </button>
      </form>

      <div className="auth-form__info">
        <p className="auth-form__description">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="auth-form__link link">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
