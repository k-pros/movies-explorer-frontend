import "../AuthForm/AuthForm.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useForm";

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password } = values;
    onRegister(name, email, password);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form auth-form__form">
        <div className="form__container">
          <h2 className="form__title">Добро пожаловать!</h2>
          <label className="form__label">
            Имя
            <input
              type="text"
              name="name"
              className="form__input"
              placeholder="Имя"
              minLength={2}
              maxLength={30}
              required
              value={values.name ?? ""}
              onChange={handleChange}
            />
          </label>
          <span className="form__error form__error_visible">{errors.name}</span>

          <label className="form__label">
            E-mail
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="E-mail"
              minLength={2}
              maxLength={30}
              pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}"
              required
              value={values.email ?? ""}
              onChange={handleChange}
            />
          </label>
          <span className="form__error form__error_visible">{errors.email}</span>

          <label className="form__label">
            Пароль
            <input
              type="password"
              name="password"
              className="form__input"
              placeholder="Пароль"
              minLength={2}
              maxLength={30}
              required
              value={values.password ?? ""}
              onChange={handleChange}
            />
          </label>
          <span className="form__error form__error_visible">{errors.password}</span>
        </div>

        <button
          type="submit"
          className={`form__btn ${!isValid ? "form__btn_disabled" : "btn"}`}
          disabled={!isValid}
          aria-label="Войти"
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
    </>
  );
}

export default Register;
