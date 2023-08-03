import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={<Main />}
              />
              <Route
                path="/movies"
                element={<Movies />}
              />
              <Route
                path="/saved-movies"
                element={<SavedMovies />}
              />
            </Routes>
          </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
