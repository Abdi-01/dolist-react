import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/Home';
import LoginPage from './page/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
