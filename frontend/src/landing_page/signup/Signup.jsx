import React from "react";
import "./Signup.css";

function Signup() {
  const goToSignup = () => {
    window.location.href = "https://zerodha-client.onrender.com/signup";
  };

  const goToLogin = () => {
    window.location.href = "https://zerodha-client.onrender.com/login";
  };
  

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="title">Welcome to Zerodha Clone</h1>
        <p className="subtitle">
          Trade smart, invest better.
        </p>

        <div className="button-group">
          <button className="signup-btn" onClick={goToSignup}>
            Signup
          </button>

          <button className="login-btn" onClick={goToLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;