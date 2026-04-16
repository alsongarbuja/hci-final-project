import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import RoadMap from "./pages/lessons/RoadMap";
import MapQuiz from "./pages/MapQuizPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<MapQuiz />} />
        <Route path="/lessons/:countryId" element={<RoadMap />} />
      </Routes>
    </Router>
  );
}

export default App;
