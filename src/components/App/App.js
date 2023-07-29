import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';

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
            </Routes>
          </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
