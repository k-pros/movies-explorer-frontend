import { MOVIES_API_URL } from "./constants";

class MoviesApi {
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

  // метод загрузки данных о фильмах с сервера
  getMovies() {
    return fetch(`${this._url}/`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi({
  url: MOVIES_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;