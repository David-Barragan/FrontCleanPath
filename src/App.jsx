import './App.css';
import { PruebaPage } from './routes/PruebaPage';
import { InputPage } from './routes/InputPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<PruebaPage />} />,
        <Route path="/iput" element={<InputPage />} />

      </Routes>
    </Router>
  );
}

export default App;

