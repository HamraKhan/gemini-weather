import './App.css';
import { Routes, Route } from 'react-router-dom'
import Article from './screens/article';
import Dashboard from './screens/dashboard';
import Location from './screens/location';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/location" element={<Location />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;