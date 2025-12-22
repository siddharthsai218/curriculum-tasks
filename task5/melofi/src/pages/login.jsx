import melofiLogo from "../assets/melofilogo.png";
import google from "../assets/google.webp"
import { Link } from "react-router-dom";

import "./login.css";

function Login() {
    return (
        <div className="container">

            <div className="logo-box">
                <img src={melofiLogo} alt="Melofi Logo" className="login-logo" />
                
            </div>

            <div className="form-box">
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />

                <Link to="/dashboard" className="menu-link">
                <button className="login-button">Log in</button>
                </Link>


                <button className="signup-button">Sign Up</button>

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

