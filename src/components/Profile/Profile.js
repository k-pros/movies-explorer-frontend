import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <ul className="profile__list">
            <li className="profile__item">
              <p className="profile__user">Имя</p>
              <p className="profile__user">Виталий</p>
            </li>
            <li className="profile__item">
              <p className="profile__user">E-mail</p>
              <p className="profile__user">pochta@yandex.ru</p>
            </li>
          </ul>
        </div>

        <div className="profile__buttons">
          <button
            type="button"
            aria-label="Редактировать"
            className="profile__btn link"
          >
            Редактировать
          </button>
          <button
            type="button"
            aria-label="Выйти из аккаунта"
            className="profile__btn profile__btn_signout link"
          >
            Выйти из аккаунта
          </button>

          {/* <span className="profile__error profile__error_visible">При обновлении профиля произошла ошибка.</span>
          <button
            type="button"
            aria-label="Редактировать"
            className="profile__btn-save btn btn_disabled"
          >
            Сохранить
          </button> */}
        </div>
      </section>
    </>
  );
}

export default Profile;
