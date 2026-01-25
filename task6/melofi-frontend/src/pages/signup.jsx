import { useState } from "react";
import melofiLogo from "../assets/melofilogo.png";
import "./signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful");
    } else {
      alert(data.error || "Signup failed");
    }
  };

  return (
    <div className="container">
      <div className="logo-box">
        <img src={melofiLogo} alt="Melofi Logo" className="login-logo" />
      </div>

      <div className="form-box">
        <input
          type="text"
          placeholder="Username"
          className="input"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
