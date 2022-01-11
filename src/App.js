import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/Home';
import LoginPage from './page/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
