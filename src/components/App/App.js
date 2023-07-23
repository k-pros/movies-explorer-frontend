import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={<Main />}
              />
            </Routes>
          </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
