// src/App.jsx
import React, { useState } from "react";
import "./App.css";

import Header from "./Header.jsx";
import Dashboard from "./Dashboard.jsx";
import LessonViewer from "./LessonViewer.jsx";
import ProgressTracker from "./ProgressTracker.jsx";
import ProjectHub from "./ProjectHub.jsx";
import ResourceCenter from "./ResourceCenter.jsx";
import AdminPanel from "./AdminPanel.jsx";
import Cse from "./Cse.jsx";

import LoginPage from "./LoginPage.jsx";

const App = () => {
  const [userProgress, setUserProgress] = useState({
    completedLessons: [],
    activeProjects: [],
    ecoScore: 0,
    achievements: [],
  });

  const [currentView, setCurrentView] = useState("login");
  const [userRole, setUserRole] = useState(null);

  // Updated handleLogin
  const handleLogin = (role) => {
    setUserRole(role);
    if (role === "admin") {
      setCurrentView("admin"); // Admins go directly to Admin Panel
    } else {
      setCurrentView("dashboard"); // Users go to dashboard
    }
  };

  return (
    <div>
      <Header />

      {/* Login Page */}
      {currentView === "login" && <LoginPage handleLogin={handleLogin} />}

      {/* Dashboard for Users */}
      {userRole === "user" && currentView === "dashboard" && (
        <Dashboard setCurrentView={setCurrentView} userRole={userRole} />
      )}

      {/* User Modules */}
      {userRole === "user" && currentView === "lessons" && (
        <LessonViewer
          lessons={Cse.lessons}
          userProgress={userProgress}
          setUserProgress={setUserProgress}
          setCurrentView={setCurrentView}
        />
      )}
      {userRole === "user" && currentView === "projects" && (
        <ProjectHub
          projects={Cse.projects}
          userProgress={userProgress}
          setUserProgress={setUserProgress}
        />
      )}
      {userRole === "user" && currentView === "progress" && (
        <ProgressTracker userProgress={userProgress} />
      )}
      {userRole === "user" && currentView === "resources" && <ResourceCenter />}

      {/* Admin Module */}
      {userRole === "admin" && currentView === "admin" && <AdminPanel />}
    </div>
  );
};

export default App;
