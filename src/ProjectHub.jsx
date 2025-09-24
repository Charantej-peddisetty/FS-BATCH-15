// src/ProjectHub.jsx
import React, { useState } from "react";

const ProjectHub = ({ projects, userProgress, setUserProgress }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const startProject = (id) => {
    if (!userProgress.activeProjects.includes(id)) {
      setUserProgress(prev => ({
        ...prev,
        activeProjects: [...prev.activeProjects, id],
        ecoScore: prev.ecoScore + 10,
        achievements: [...prev.achievements, "Project Started!"]
      }));
    }
  };

  if (selectedProject) {
    return (
      <div style={{ padding: "1rem" }}>
        <button onClick={() => setSelectedProject(null)}>← Back</button>
        <h3>{selectedProject.title}</h3>
        <p>{selectedProject.description}</p>
        <button onClick={() => startProject(selectedProject.id)}>Start Project</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Projects</h2>
      {projects.map(p => (
        <div key={p.id} style={{ margin: "1rem 0" }}>
          <button onClick={() => setSelectedProject(p)}>{p.title}</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectHub;
