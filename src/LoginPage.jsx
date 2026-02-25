// src/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showUserLogin, setShowUserLogin] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Allowed users
  const users = ["2400031206", "2400032646", "2400030117"];
  const defaultPassword = "123456";

  const handleUserLogin = () => {
    if (users.includes(userId) && password === defaultPassword) {
      navigate("/dashboard");
    } else {
      setError("Invalid User ID or Password");
    }
  };

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
    <div style={styles.wrapper}>
      {/* Main Card */}
      <div style={styles.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKiqo2JldN12KRbRJ8KG9u-s9EOHV2Dnnsgc2Isf_AvrYgCw7X7Olslbel8wQNhIloBc&usqp=CAU"
          alt="Learning"
          style={{ width: 200, borderRadius: 10 }}
        />

        <p style={{ fontSize: "1.1rem", margin: "1rem 0" }}>
          Login as <b>Admin</b> or <b>User</b>
        </p>

        {/* ===== BUTTONS ===== */}
        {!showUserLogin && (
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button
              style={{ ...buttonStyle, backgroundColor: "#ff6f61" }}
              onClick={() => navigate("/admin")}
            >
              Login as Admin
            </button>

            <button
              style={{ ...buttonStyle, backgroundColor: "#1abc9c" }}
              onClick={() => setShowUserLogin(true)}
            >
              Login as User
            </button>
          </div>
        )}

        {/* ===== USER LOGIN FORM ===== */}
        {showUserLogin && (
          <div style={{ marginTop: "1rem" }}>
            <input
              placeholder="Enter Student ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
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

            <button
              style={{ ...buttonStyle, backgroundColor: "#1abc9c", width: "100%" }}
              onClick={handleUserLogin}
            >
              Login
            </button>

            <button
              style={{ marginTop: 8, background: "transparent", border: "none", cursor: "pointer" }}
              onClick={() => setShowUserLogin(false)}
            >
              ← Back
            </button>
          </div>
        )}
      </div>

      <footer style={{ marginTop: "2rem", color: "white" }}>
        © 2025 KL University
      </footer>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(-45deg, #ff6f61, #ffb88c, #6a11cb, #2575fc, #01ff8d, #be4900, #ff00ae, #213b68)",
    backgroundSize: "400% 400%",
    animation: "gradient 12s ease infinite",
  },
  card: {
    textAlign: "center",
    padding: "2rem",
    maxWidth: 420,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  input: {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "0.7rem",
    borderRadius: 8,
    border: "1px solid #ccc",
  },
};

export default LoginPage;
