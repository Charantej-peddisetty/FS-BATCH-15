import React, { useState } from "react";
import Cse from "./Cse";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 Admin credentials
  const admins = [
    { id: "admin1", password: "123456" },
    { id: "admin2", password: "123456" },
  ];

  const handleLogin = () => {
    const valid = admins.find(
      (a) => a.id === adminId && a.password === password
    );

    if (valid) {
      setIsLoggedIn(true); // show lessons after login
    } else {
      setError("Invalid Admin ID or Password");
    }
  };

  // ================= LOGIN SCREEN =================
  if (!isLoggedIn) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h2>🔐 Admin Login</h2>

          <input
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button style={styles.loginBtn} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }

  // ================= LESSONS SCREEN =================
  return (
    <div style={{ padding: "2rem", background: "#f5f9ff", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#1565c0" }}>
        📘 Lessons
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginTop: "2rem" }}>
        {Cse.lessons.map((lesson) => (
          <div
            key={lesson.id}
            style={{
              display: "flex",
              gap: "1rem",
              padding: "1rem",
              borderRadius: "12px",
              background: "linear-gradient(135deg,#1976d2,#42a5f5)",
              color: "white",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              alignItems: "center",
            }}
          >
            <img
              src={lesson.image}
              alt={lesson.title}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                objectFit: "cover",
                border: "3px solid white",
              }}
            />
            <div>
              <h2 style={{ margin: 0 }}>{lesson.title}</h2>
              <p style={{ marginTop: "0.4rem" }}>{lesson.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <h1 style={{ textAlign: "center", marginTop: "3rem", color: "#0d47a1" }}>
        🚀 Projects
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
        {Cse.projects.map((project) => (
          <div
            key={project.id}
            style={{
              padding: "1rem",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#0d47a1,#1976d2)",
              color: "white",
              boxShadow: "0 5px 12px rgba(0,0,0,0.15)",
            }}
          >
            <h2 style={{ margin: 0 }}>{project.title}</h2>
            <p style={{ marginTop: "0.5rem" }}>{project.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🎨 Styles
const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#6a11cb,#2575fc)",
  },
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: 12,
    width: 320,
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  input: {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "0.7rem",
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  loginBtn: {
    width: "100%",
    padding: "0.6rem",
    background: "#4e73df",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: 600,
  },
};

export default LoginPage;