// src/AdminPanel.jsx
import React from "react";

const AdminPanel = () => {
  const buttonStyle = {
    padding: "0.8rem 1.5rem",
    fontSize: "0.95rem",
    fontWeight: "600",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4e73df",
    color: "white",
    transition: "all 0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(-45deg, #ff6f61, #ffb88c, #6a11cb, #2575fc)",
        backgroundSize: "400% 400%",
        animation: "pageGradient 12s ease infinite",
      }}
    >
      {/* Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes pageGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          button:hover {
            transform: translateY(-3px);
            background-color: #2c3e50 !important;
          }
        `}
      </style>

      {/* Header */}
      <header
        style={{
          textAlign: "center",
          color: "white",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "800" }}>ADMIN PANEL</h1>
        <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
          Manage lessons, projects, resources, and users efficiently
        </p>
      </header>

      {/* Buttons Section */}
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          borderRadius: "15px",
          padding: "2rem",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ marginBottom: "1rem", color: "#2C3E50" }}>Quick Actions</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          <button style={buttonStyle}>Add Lesson</button>
          <button style={buttonStyle}>Update Lesson</button>
          <button style={buttonStyle}>Delete Lesson</button>
          <button style={buttonStyle}>Add Project</button>
          <button style={buttonStyle}>Update Project</button>
          <button style={buttonStyle}>Delete Project</button>
          <button style={buttonStyle}>Manage Resources</button>
          <button style={buttonStyle}>Add Resource</button>
          <button style={buttonStyle}>Delete Resource</button>
          <button style={buttonStyle}>Track Users</button>
          <button style={buttonStyle}>Reports</button>
          <button style={buttonStyle}>Export Data</button>
          <button style={buttonStyle}>Import Data</button>
        </div>
      </div>

      {/* Recent Activities */}
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "15px",
          padding: "1.5rem",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ color: "#2C3E50", marginBottom: "1rem" }}>
          Recent Activities
        </h3>
        <ul style={{ lineHeight: "1.8", color: "#2C3E50" }}>
          <li>User John started "Portfolio Website" project</li>
          <li>Lesson "React Hooks" updated</li>
          <li>New resource "API Integration Guide" added</li>
          <li>User Sarah completed "Sustainable Tracker" project</li>
        </ul>
      </div>

      {/* Statistics Overview */}
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "15px",
          padding: "1.5rem",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#2C3E50", marginBottom: "1rem" }}>
          Statistics Overview
        </h3>
        <p>Total Lessons: <strong>15</strong></p>
        <p>Total Projects: <strong>4</strong></p>
        <p>Active Users: <strong>120</strong></p>
        <p>Completed Projects: <strong>45</strong></p>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "auto",
          padding: "1rem",
          color: "white",
          textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
        }}
      >
        <p>© 2025 KL University - Admin Dashboard</p>
      </footer>
    </div>
  );
};

export default AdminPanel;
