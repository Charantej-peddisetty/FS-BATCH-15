// src/LessonViewer.jsx
import React from "react";
import Cse from "./Cse";

const LessonViewer = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Lessons</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {Cse.lessons.map((lesson) => (
          <div
            key={lesson.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
              border: "1px solid #4CAF50",
              borderRadius: "10px",
              backgroundColor: "#f0f8f5",
            }}
          >
            <img
              src={lesson.image}
              alt={lesson.title}
              style={{ width: "120px", height: "120px", borderRadius: "10px", objectFit: "cover" }}
            />
            <div>
              <h2 style={{ margin: 0, color: "#4CAF50" }}>{lesson.title}</h2>
              <p style={{ marginTop: "0.5rem" }}>{lesson.content}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 style={{ textAlign: "center", margin: "3rem 0 2rem 0" }}>Projects</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {Cse.projects.map((project) => (
          <div
            key={project.id}
            style={{
              padding: "1rem",
              border: "1px solid #2196F3",
              borderRadius: "10px",
              backgroundColor: "#f0f8ff",
            }}
          >
            <h2 style={{ margin: 0, color: "#2196F3" }}>{project.title}</h2>
            <p style={{ marginTop: "0.5rem" }}>{project.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonViewer;
