import React from "react";
import Cse from "./Cse";

const LessonViewer = () => {
  return (
    <div style={{ padding: "2rem" }}>
      {/* LESSONS */}
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        📚 Lessons
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {Cse.lessons.map((lesson) => (
          <div
            key={lesson.id}
            style={{
              display: "flex",
              gap: "1rem",
              padding: "1rem",
              borderRadius: "12px",
              background: "#f4fff7",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              alignItems: "center",
            }}
          >
            <img
              src={lesson.image}
              alt={lesson.title}
              style={{
                width: 120,
                height: 120,
                borderRadius: 10,
                objectFit: "cover",
              }}
            />

            <div>
              <h2 style={{ margin: 0, color: "#2e7d32" }}>
                {lesson.title}
              </h2>
              <p style={{ marginTop: "0.5rem", color: "#555" }}>
                {lesson.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <h1 style={{ textAlign: "center", margin: "3rem 0 2rem" }}>
        🚀 Projects
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {Cse.projects.map((project) => (
          <div
            key={project.id}
            style={{
              padding: "1rem",
              borderRadius: "12px",
              background: "#f4f8ff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ margin: 0, color: "#1976d2" }}>
              {project.title}
            </h2>
            <p style={{ marginTop: "0.5rem", color: "#555" }}>
              {project.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonViewer;