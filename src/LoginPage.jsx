// src/LoginPage.jsx
import React from "react";

const LoginPage = ({ handleLogin }) => {
  const buttonStyle = {
    padding: "0.7rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    color: "white",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(-45deg, #ff6f61, #ffb88c, #6a11cb, #2575fc, #01ff8dff, #be4900ff, #ff00aeff, #213b68ff))",
        backgroundSize: "400% 400%",
        animation: "pageGradient 12s ease infinite",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Gradient Animation */}
      <style>
        {`
          @keyframes pageGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Main Login Card */}
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          maxWidth: "500px",
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKiqo2JldN12KRbRJ8KG9u-s9EOHV2Dnnsgc2Isf_AvrYgCw7X7Olslbel8wQNhIloBc&usqp=CAU"
          alt="Learning"
          style={{
            width: "250px",
            borderRadius: "12px",
            margin: "1rem 0",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        />
        <p style={{ fontSize: "1.1rem", color: "#2C3E50", marginBottom: "2rem" }}>
          <strong>Admin</strong> or <strong>User</strong> 
        </p>

        {/* Login Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{ ...buttonStyle, backgroundColor: "#ff6f61" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff3b2d")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6f61")}
            onClick={() => handleLogin("admin")}
          >
            Login as Admin
          </button>

          <button
            style={{ ...buttonStyle, backgroundColor: "#1abc9c" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#16a085")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1abc9c")}
            onClick={() => handleLogin("user")}
          >
            Login as User
          </button>
        </div>

        {/* Info Section */}
        <div
          style={{
            marginTop: "2rem",
            textAlign: "left",
            backgroundColor: "#ffffff",
            padding: "1.5rem",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ color: "#2C3E50" }}>Platform Highlights:</h3>
          <ul style={{ lineHeight: "1.8", marginTop: "0.5rem", color: "#2C3E50" }}>
            <li>Interactive lessons to boost coding skills.</li>
            <li>Hands-on projects to apply knowledge practically.</li>
            <li>Track your progress and contributions.</li>
            <li>Admins can manage content, resources, and user analytics.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          width: "100%",
          marginTop: "2rem",
          color: "#ffffff",
          fontWeight: "500",
          textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9rem" }}>© 2025 KL University</p>
      </footer>
    </div>
  );
};

export default LoginPage;
