import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RoadMap from "./pages/lessons/RoadMap";
import MapQuiz from "./pages/MapQuizPage";
import LessonPage from "./pages/lessons/LessonPage";
import QuizPage from "./pages/QuizPage";
import LessonsListPage from "./pages/lessons/LessonsListPage";
import PassportPage from "./pages/PassportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<MapQuiz />} />
        <Route path="/passports" element={<PassportPage />} />
        <Route path="/lessons" element={<LessonsListPage />} />
        <Route path="/lessons/:countryId" element={<RoadMap />} />
        <Route path="/lessons/:countryId/:lessonId" element={<LessonPage />} />
        <Route
          path="/lessons/:countryId/:lessonId/quiz"
          element={<QuizPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
