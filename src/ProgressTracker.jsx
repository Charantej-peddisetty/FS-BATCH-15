// src/ProgressTracker.jsx
import React from "react";

const ProgressTracker = ({ userProgress }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Progress Tracker</h2>
      <p>Eco Score: {userProgress.ecoScore}</p>
      <p>Lessons Completed: {userProgress.completedLessons.length}</p>
      <p>Active Projects: {userProgress.activeProjects.length}</p>
      <h3>Achievements:</h3>
      <ul>
        {userProgress.achievements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
