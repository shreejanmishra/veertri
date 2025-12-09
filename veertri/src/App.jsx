import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Subjects from "./pages/Subjects";
import ClassCurriculum from "./pages/ClassCurriculum";
import VideoDetail from "./pages/VideoDetail";
import MyCorner from "./pages/MyCorner";
import Profile from "./pages/Profile";
import Scholarship from "./pages/Scholarship";
import ScholarshipExam from "./pages/ScholarshipExam";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route
            path="/subjects/:subject/class/:classId"
            element={<ClassCurriculum />}
          />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/scholarship/exam/:id" element={<ScholarshipExam />} />
          <Route path="/watch/:id" element={<VideoDetail />} />
          <Route path="/my-corner" element={<MyCorner />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
