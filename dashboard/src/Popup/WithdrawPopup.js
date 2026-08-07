
// -----------------------------------------------------------------------------
// Popup shown when the user clicks "Withdraw".
// - Takes an amount input.
// - Validates amount > 0.
// - Calls the withdrawFunds API.
// - Shows an error message if the balance is insufficient (from backend).
// - Calls onSuccess() (provided by parent) to close popup + refresh balance.
// -----------------------------------------------------------------------------

import React, { useState } from "react";
import { withdrawFunds } from "../api/fundsApi";
import axios from "axios";
import "./Popup.css";

// Props:
//   onClose()   -> closes the popup without saving
//   onSuccess() -> called after a successful API response (closes popup + refreshes balance)
const WithdrawPopup = ({ onClose, onSuccess }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleWithdraw = async () => {
  //   const numericAmount = Number(amount);

  //   // ---- Frontend validation: amount must be greater than zero ----
  //   if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
  //     setError("Please enter an amount greater than zero.");
  //     return;
  //   }

  //   setError("");
  //   setLoading(true);

  //   try {
  //     // ---- Call backend POST /withdrawFunds ----
  //     const response = await withdrawFunds(numericAmount);

  //     if (response.data.success) {
  //       // Close popup and tell parent to refresh the Available Balance
  //       onSuccess();
  //     } else {
  //       // e.g. backend responded 200 but success:false (rare, defensive check)
  //       setError(response.data.message || "Something went wrong. Please try again.");
  //     }
  //   } catch (err) {
  //     // ---- Handle insufficient balance / other errors from backend ----
  //     // Backend returns 400 with a message like "Insufficient balance for this withdrawal."
  //     const message =
  //       err.response?.data?.message || "Failed to withdraw funds. Please try again later.";
  //     setError(message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleWithdraw = async () => {
  const numericAmount = Number(withdrawAmount);

  if (!withdrawAmount || isNaN(numericAmount) || numericAmount <= 0) {
    setError("Please enter an amount greater than zero.");
    return;
  }

  setError("");
  setLoading(true);

  try {
    const response = await axios.post(
      "http://localhost:3002/withdrawFunds",
      { amount: numericAmount },
      { withCredentials: true }
    );

    if (response.data?.success) {
      setWithdrawAmount("");
      // notify parent to close popup and refresh balance
      if (typeof onSuccess === "function") onSuccess();
    } else {
      setError(response.data?.message || "Withdraw failed.");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Withdraw failed.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3 className="popup-title">Withdraw Funds</h3>

        <input
          type="number"
          className="popup-input"
          placeholder="Enter amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          min="0"
          autoFocus
        />

        {error && <p className="popup-error">{error}</p>}

        <div className="popup-actions">
          <button className="popup-btn popup-btn-cancel" onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button
            className="popup-btn popup-btn-confirm"
            onClick={handleWithdraw}
            disabled={loading}
          >
            {loading ? "Withdrawing..." : "Withdraw"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPopup;
