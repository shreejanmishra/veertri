import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Browse from "./pages/Browse";
import VideoDetail from "./pages/VideoDetail";
import MyList from "./pages/MyList";
import Profile from "./pages/Profile";
import Edutainment from "./pages/Edutainment";
import Scholarship from "./pages/Scholarship";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/browse" replace />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/education" element={<Edutainment />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/watch/:id" element={<VideoDetail />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
