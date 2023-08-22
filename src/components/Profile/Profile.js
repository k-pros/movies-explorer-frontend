import { useEffect } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { useFormWithValidation } from "../../utils/useForm";

function Profile({
  isLoggedIn,
  onSignOut,
  currentUser,
  onUpdateProfile,
  isProfileUpdating,
  setIsProfileUpdating,
  errorMessage,
}) {
  const { values, handleChange, isValid, setIsValid, setValues } = useFormWithValidation();

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  // блокировка формы при отсутствии изменения данных профиля
  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [values.name, values.email])

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateProfile(values.name, values.email);
  }

  function handleEditProfile() {
    setIsProfileUpdating(true);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <form onSubmit={handleSubmit} className="form profile-form">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile-form__input-container">
            <input
              type="text"
              name="name"
              className="profile-form__input"
              placeholder="Имя"
              minLength={2}
              maxLength={30}
              required
              value={values.name ?? ""}
              onChange={handleChange}
              disabled={!isProfileUpdating ? true : false}
            />
            <label className="profile-form__label">Имя</label>
          </div>

          <div className="profile-form__input-container">
            <input
              type="email"
              name="email"
              className="profile-form__input"
              placeholder="E-mail"
              minLength={2}
              maxLength={30}
              pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}"
              required
              value={values.email ?? ""}
              onChange={handleChange}
              disabled={!isProfileUpdating ? true : false}
            />
            <label className="profile-form__label">Почта</label>
          </div>

          <div className="profile__buttons">
            {isProfileUpdating ? (
              <>
                <span className="profile__error profile__error_visible">
                  {errorMessage}
                </span>
                <button
                  type="submit"
                  aria-label="Сохранить"
                  className={`profile__btn-save ${
                    !isValid ? "btn_disabled" : "btn"
                  }`}
                  disabled={!isValid}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  aria-label="Редактировать"
                  className="profile__btn link"
                  onClick={handleEditProfile}
                >
                  Редактировать
                </button>
                <button
                  onClick={onSignOut}
                  type="button"
                  aria-label="Выйти из аккаунта"
                  className="profile__btn profile__btn_signout link"
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
