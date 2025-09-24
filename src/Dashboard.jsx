// src/Dashboard.jsx
import React from "react";

const Dashboard = ({ setCurrentView, userRole }) => {
  const cardStyle = {
    flex: "1 1 200px",
    padding: "2rem",
    borderRadius: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const cardHover = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);

  const cards = [
    { id: "lessons", title: "Lessons", role: "user" },
    { id: "projects", title: "Projects", role: "user" },
    { id: "progress", title: "Progress", role: "user" },
    { id: "resources", title: "Resources", role: "user" },
    { id: "admin", title: "Admin Panel", role: "admin" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#2E7D32", marginBottom: "1rem" }}>Dashboard</h2>
      <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
        Welcome! Select a section below to continue:
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {cards
          .filter((c) => c.role === userRole || c.role === "user")
          .map((c) => (
            <div
              key={c.id}
              style={{
                ...cardStyle,
                ...(hoveredCard === c.id ? cardHover : {}),
              }}
              onClick={() => setCurrentView(c.id)}
              onMouseEnter={() => setHoveredCard(c.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {c.title}
            </div>
          ))}
      </div>

      {userRole === "user" && (
        <div style={{ marginTop: "3rem" }}>
          <h3 style={{ color: "#2E7D32" }}>Quick Tips:</h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>Start with lessons to strengthen your fundamentals.</li>
            <li>Track your progress to see improvement over time.</li>
            <li>Work on projects to apply your knowledge practically.</li>
            <li>Explore resources for additional learning materials.</li>
          </ul>
        </div>
      )}

      {userRole === "admin" && (
        <div style={{ marginTop: "3rem" }}>
          <h3 style={{ color: "#2E7D32" }}>Admin Guidance:</h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>Manage lessons, projects, and resources efficiently.</li>
            <li>Track user activities and progress in real-time.</li>
            <li>Generate reports and export data for analytics.</li>
            <li>Ensure content is up-to-date and relevant.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
