import React, { useState } from "react";

const Dashboard = ({ setCurrentView, userRole }) => {
  const [hovered, setHovered] = useState(null);

  const cards = [
    { id: "lessons", title: "Lessons", icon: "📘", color: "#4CAF50", role: "user" },
    { id: "projects", title: "Projects", icon: "🚀", color: "#2196F3", role: "user" },
    { id: "progress", title: "Progress", icon: "📊", color: "#FF9800", role: "user" },
    { id: "resources", title: "Resources", icon: "📁", color: "#9C27B0", role: "user" },
    { id: "admin", title: "Admin Panel", icon: "🛠", color: "#E91E63", role: "admin" },
  ];

  return (
    <div style={styles.wrapper}>
      {/* HEADER */}
      <div style={styles.header}>
        <h2>🎓 Dashboard</h2>
        <p>Welcome! Choose your section</p>
      </div>

      {/* VERTICAL RECTANGLE CARDS */}
      <div style={styles.verticalStack}>
        {cards
          .filter((c) => c.role === userRole || c.role === "user")
          .map((c) => (
            <div
              key={c.id}
              style={{
                ...styles.rectCard,
                background: `linear-gradient(135deg, ${c.color}, #ffffff22)`,
                ...(hovered === c.id ? styles.rectHover : {}),
              }}
              onClick={() => setCurrentView(c.id)}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.icon}>{c.icon}</div>
              <div>
                <h3 style={{ margin: 0 }}>{c.title}</h3>
                <p style={styles.subtitle}>Click to open</p>
              </div>
            </div>
          ))}
      </div>

      {/* INFO BOX */}
      <div style={styles.infoBox}>
        {userRole === "user" ? (
          <>
            <h3>💡 Student Tips</h3>
            <ul>
              <li>Start with lessons for fundamentals.</li>
              <li>Practice using real projects.</li>
              <li>Track progress regularly.</li>
              <li>Use resources for deep learning.</li>
            </ul>
          </>
        ) : (
          <>
            <h3>🛠 Admin Guide</h3>
            <ul>
              <li>Manage lessons and resources.</li>
              <li>Track student progress.</li>
              <li>Generate reports.</li>
              <li>Keep content updated.</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

// 🎨 STYLES
const styles = {
  wrapper: {
    padding: "2rem",
    minHeight: "100vh",
    background: "#f4f6fb",
    fontFamily: "Segoe UI",
  },
  header: {
    background: "linear-gradient(135deg,#6a11cb,#2575fc)",
    color: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },
  verticalStack: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  rectCard: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1.2rem 1.5rem",
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  rectHover: {
    transform: "translateX(6px) scale(1.02)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  icon: {
    fontSize: "2rem",
  },
  subtitle: {
    margin: 0,
    fontSize: "0.9rem",
    opacity: 0.85,
  },
  infoBox: {
    marginTop: "2rem",
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  },
};

export default Dashboard;