import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { email, password } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        inputValue,
        {
          withCredentials: true,
        },
      );

      console.log("Response:", data);

      if (data.success) {
        // Save user data
        localStorage.setItem("user", JSON.stringify(data.user));

        // Save token
        localStorage.setItem("token", data.token);

        console.log("Token saved:", localStorage.getItem("token"));

        handleSuccess(data.message);

        // Redirect after 1 second
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 1000);
      } else {
        setError(data.message);
        handleError(data.message);
      }
    } catch (error) {
      const message = error.response?.data?.message || "Login Failed";
      setError(message);
      handleError(message);
    } finally {
      setLoading(false);
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-page">
      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="brand-section">
          <div className="brand-logo">D</div>

          <h1>Delphi Trade</h1>

          <p>
            Smart trading. Simple investing.
            <br />
            Your journey to better investing starts here.
          </p>
        </div>

        <div className="features">
          <div className="feature">
            <span>✓</span>
            <p>Simple and powerful trading</p>
          </div>

          <div className="feature">
            <span>✓</span>
            <p>Secure account management</p>
          </div>

          <div className="feature">
            <span>✓</span>
            <p>Real-time portfolio tracking</p>
          </div>
        </div>

        <div className="left-footer">
          © 2026 Delphi Trade. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="login-card">
          <div className="mobile-logo">
            <div className="brand-logo">D</div>

            <h2>Delphi Trade</h2>
          </div>

          <div className="login-heading">
            <h2>Welcome Back</h2>

            <p>Login to continue to your trading account</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <div className="input-wrapper">
                <span className="input-icon">✉</span>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={inputValue.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <Link to="/forgot-password">Forgot Password?</Link>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">🔒</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={inputValue.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div className="login-error">
                <span>!</span>
                {error}
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* SIGNUP */}
          <div className="signup-section">
            <span>Don't have an account?</span>

            <Link to="/signup">Create Account</Link>
          </div>

          <div className="security-note">
            🔒 Your information is securely encrypted
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
