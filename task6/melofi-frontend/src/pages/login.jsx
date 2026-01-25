import { useState } from "react";
import melofiLogo from "../assets/melofilogo.png";
import google from "../assets/google.webp";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("username", data.username);
      navigate("/dashboard");
    } else {
      alert(data.error || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="logo-box">
        <img src={melofiLogo} alt="Melofi Logo" className="login-logo" />
      </div>

      <div className="form-box">
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

        <button className="login-button" onClick={handleLogin}>
          Log in
        </button>

        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>

        <p className="or">or</p>

        <button className="google-button">
          <img src={google} alt="Google" className="google-logo" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
