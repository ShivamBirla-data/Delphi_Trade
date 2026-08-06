import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdDashboard } from "react-icons/md";
import { FaTachometerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
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
      position: "bottom-right",
    });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:3002/signup",
      inputValue,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    navigate("/login");
    window.location.reload();
    

    handleSuccess("Account created successfully!");
    console.log("Response:", response.data);

  } catch (error) {
    console.log("Axios Error:", error);

    if (error.response) {
      handleError(error.response.data.message || "Signup failed!");
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    } else if (error.request) {
      handleError("No response from server");
      console.log("No response from server");
    } else {
      handleError(error.message);
      console.log("Error:", error.message);
    }
  }
};

  return (
    <div className="main-container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="overlay"></div>

        <div className="left-content">
          <div className="dashboard-btn">
            <Link to="/">
              <MdDashboard className="dashboard-icon" />
              Dashboard
            </Link>
          </div>

          <h1>Delphi Trade</h1>

          <p>
            Delphi Trade is a smart investment platform for stocks, mutual
            funds, and IPOs. Trade securely, monitor your portfolio, and grow
            your wealth with confidence.
          </p>

          <div className="feature-box">
            <div className="card">
              <GiTakeMyMoney className="icon" />
              <h6>Mutual Funds</h6>
            </div>
            <div className="card">
              <FaChartLine className="icon" />
              <h6>Stock</h6>
            </div>
            <div className="card">
              <MdTrendingUp className="icon" />
              <h6>IPO</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="login-card">
          <div className="card-header">
            <h2>Create Account</h2>
            <p>Sign up to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group-custom">
              <label>Email Address</label>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="input-group-custom">
              <label>Username</label>
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleOnChange}
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div className="input-group-custom">
              <label>Password</label>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button className="login-btn" type="submit">
              Create Account
            </button>

            <div className="register-link">
              Already have an account?
              <Link to="/login"> Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
