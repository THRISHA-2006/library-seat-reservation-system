import React, { useState } from "react";
import "./Login.css"; // Separate CSS for login page

function Login({ setUser }) {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim() === "") return alert("Please enter your username");
    setUser(name.trim());
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>📚 Welcome to Smart Library</h1>
        <p>Reserve your seats and enjoy a quiet reading environment!</p>

        <input
          type="text"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>

      <div className="library-info">
        <h2>About Our Library</h2>
        <p>
          Our Smart Library allows you to reserve seats in advance, check
          availability in real-time, and ensures a comfortable study space for
          everyone.
        </p>
      </div>
    </div>
  );
}

export default Login;