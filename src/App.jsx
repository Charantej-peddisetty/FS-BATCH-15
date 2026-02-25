import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import LessonViewer from "./LessonViewer";
import AdminPanel from "./AdminPanel";
import ProgressTracker from "./ProgressTracker";
import ProjectHub from "./ProjectHub";
import ResourceCenter from "./ResourceCenter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/lessons" element={<LessonViewer />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/progress" element={<ProgressTracker />} />
      <Route path="/projects" element={<ProjectHub />} />
      <Route path="/resources" element={<ResourceCenter />} />
    </Routes>
  );
}

export default App;