import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FarmProfile from './pages/FarmProfile';
import OriginProfile from './pages/OriginProfile';
import SensoryAnalysisPage from './pages/SensoryAnalysisPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farm-profile/:id" element={<FarmProfile />} />
        <Route path="/origin-profile/:id" element={<OriginProfile />} />
        <Route path="/sensory-analysis" element={<SensoryAnalysisPage />} />
      </Routes>
    </Router>
  );
}

export default App;
