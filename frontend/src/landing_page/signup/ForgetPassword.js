import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ForgetPassword.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // STEP 1
  const sendOTP = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/forgot-password",
        {
          email,
        },
      );

      console.log("FORGOT PASSWORD:", response.data);

      if (response.data.success) {
        setMessage("OTP sent to your email");
        setStep(2);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to send OTP");
    }
  };

  // STEP 2
  const verifyOTP = async () => {
    try {
      const response = await axios.post("http://localhost:3002/verify-otp", {
        email,
        otp,
      });

      console.log("VERIFY OTP:", response.data);

      if (response.data.success) {
        setMessage("OTP verified");
        setStep(3);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid OTP");
    }
  };

  // STEP 3
  const resetPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/reset-password",
        {
          email,
          otp,
          newPassword,
        },
      );

      console.log("RESET:", response.data);

      if (response.data.success) {
        setMessage("Password reset successfully");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Password reset failed");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    await verifyOTP();
    setLoading(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!newPassword || !confirmPassword) {
      setError("Please enter and confirm your new password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    await resetPassword();
    setLoading(false);
  };

  return (
    <div className="forgot-page">
      {/* ================= LEFT PANEL ================= */}

      <div className="forgot-left">
        <div className="forgot-brand">
          <div className="forgot-logo">D</div>

          <h1>Delphi Trade</h1>

          <p>Secure access to your trading account.</p>
        </div>

        <div className="forgot-info">
          <div className="info-item">
            <div className="info-icon">✓</div>

            <div>
              <h4>Secure Recovery</h4>
              <p>Your account recovery is protected.</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✓</div>

            <div>
              <h4>OTP Verification</h4>
              <p>Verify your identity with a secure OTP.</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✓</div>

            <div>
              <h4>Quick Access</h4>
              <p>Reset your password and continue trading.</p>
            </div>
          </div>
        </div>

        <div className="forgot-left-footer">© 2026 Delphi Trade</div>
      </div>

      {/* ================= RIGHT PANEL ================= */}

      <div className="forgot-right">
        <div className="forgot-card">
          {/* Mobile Logo */}

          <div className="forgot-mobile-logo">
            <div className="forgot-logo">D</div>

            <span>Delphi Trade</span>
          </div>

          {/* Header */}

          <div className="forgot-header">
            <div className="lock-icon">🔐</div>

            <h2>
              {step === 1 && "Forgot Password"}

              {step === 2 && "Verify OTP"}

              {step === 3 && "Create New Password"}
            </h2>

            <p>
              {step === 1 && "Enter your registered email to receive an OTP."}

              {step === 2 && "Enter the 6-digit OTP sent to your email."}

              {step === 3 && "Create a strong new password for your account."}
            </p>
          </div>

          {/* Progress */}

          <div className="progress-wrapper">
            <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
              <span>1</span>
              <small>Email</small>
            </div>

            <div className={`progress-line ${step >= 2 ? "active" : ""}`} />

            <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
              <span>2</span>
              <small>OTP</small>
            </div>

            <div className={`progress-line ${step >= 3 ? "active" : ""}`} />

            <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
              <span>3</span>
              <small>Password</small>
            </div>
          </div>

          {/* ================= EMAIL ================= */}

          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendOTP();
              }}
            >
              <div className="forgot-form-group">
                <label>Email Address</label>

                <div className="forgot-input">
                  <span>✉</span>

                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="forgot-button"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          )}

          {/* ================= OTP ================= */}

          {step === 2 && (
            <form onSubmit={handleVerifyOTP}>
              <div className="email-display">
                OTP sent to
                <strong>{email}</strong>
              </div>

              <div className="forgot-form-group">
                <label>Verification Code</label>

                <div className="forgot-input otp-input">
                  <span>🔑</span>

                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    maxLength="6"
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="forgot-button"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <button
                type="button"
                className="back-button"
                onClick={() => {
                  setStep(1);
                  setOtp("");
                  setMessage("");
                  setError("");
                }}
              >
                Change Email
              </button>
            </form>
          )}

          {/* ================= PASSWORD ================= */}

          {step === 3 && (
            <form onSubmit={handleResetPassword}>
              <div className="forgot-form-group">
                <label>New Password</label>

                <div className="forgot-input">
                  <span>🔒</span>

                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="forgot-form-group">
                <label>Confirm Password</label>

                <div className="forgot-input">
                  <span>🔒</span>

                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="forgot-button"
                disabled={loading}
              >
                {loading ? "Updating..." : "Reset Password"}
              </button>
            </form>
          )}

          {/* Messages */}

          {error && (
            <div className="forgot-error">
              <span>!</span>
              {error}
            </div>
          )}

          {message && (
            <div className="forgot-success">
              <span>✓</span>
              {message}
            </div>
          )}

          {/* Login */}

          <div className="login-link">
            Remember your password?
            <Link to="/login">Back to Login</Link>
          </div>

          <div className="security-text">
            🔒 Your information is securely encrypted
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
