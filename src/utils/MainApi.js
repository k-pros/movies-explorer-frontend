class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  // обработчик ответов сервера
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
     // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`); 
  }

  // метод регистрации пользователя
  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name, email, password})
    })
    .then(this._handleResponse)
  };

  // метод авторизации пользователя
  autorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({email, password})
    })
      .then(this._handleResponse);
  }

  // метод получения информации о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._handleResponse);
  }

  // метод обновления информации о пользователе
  updateUser(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({name, email})
    })
      .then(this._handleResponse);
  }

  // метод получения с сервера сохранённых фильмов
  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._handleResponse);
  }

  // метода сохранения фильмов
  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movie)
    })
      .then(this._handleResponse);
  }

  // метод удаления сохранённых фильмов
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._handleResponse);
  }

  checkToken(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  url: "http://127.0.0.1:3000",
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${localStorage.getItem("token")}`
  },
});

export default mainApi;