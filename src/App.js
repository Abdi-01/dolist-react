import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/Home';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
