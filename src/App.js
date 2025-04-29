import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tu rajouteras d'autres routes ici plus tard */}
      </Routes>
    </Router>
  );
}

export default App;
