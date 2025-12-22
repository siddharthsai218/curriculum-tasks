import melofiLogo from "../assets/melofilogo.png"
import "./signup.css";

function Login() {
    return (
        <div className="container">

            <div className="logo-box">
                <img src={melofiLogo} alt="Melofi Logo" className="login-logo" />
                
            </div>

            <div className="form-box">
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <input type="Confirm Password" placeholder="Confirm Password" className="input" />

                
                <button className="signup-button">Sign Up</button>

                
            </div>

        </div>
    );
}

export default Login;
