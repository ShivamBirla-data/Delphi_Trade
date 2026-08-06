import React, { useState } from "react";
import { addFunds } from "../api/fundsApi";
import "./Popup.css";
import axios from "axios";
// Props:
//   onClose()   -> closes the popup without saving
//   onSuccess() -> called after a successful API response (closes popup + refreshes balance)
const AddFundPopup = ({ onClose, onSuccess }) => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleAddFunds = async () => {
  //   const numericAmount = Number(amount);

  //   // ---- Frontend validation: amount must be greater than zero ----
  //   if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
  //     setError("Please enter an amount greater than zero.");
  //     return;
  //   }

  //   setError("");
  //   setLoading(true);

  //   try {
  //     // ---- Call backend POST /addFunds ----
  //     const response = await addFunds(numericAmount);

  //     if (response.data.success) {
  //       // Close popup and tell parent to refresh the Available Balance
  //       onSuccess();
  //     } else {
  //       setError(
  //         response.data.message || "Something went wrong. Please try again.",
  //       );
  //     }
  //   } catch (err) {
  //     // Handle network / server errors gracefully
  //     const message =
  //       err.response?.data?.message ||
  //       "Failed to add funds. Please try again later.";
  //     setError(message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const handleAddFunds = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:3002/addFunds",
  //       {
  //         amount: amount,
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     );

  //     console.log(data);
  //   } catch (err) {
  //     // console.log(err);
  //   }
  // };
  const handleAddFunds = async () => {
    const numericAmount = Number(amount);

    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      setError("Please enter an amount greater than zero.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:3002/addFunds",
        {
          amount,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        onSuccess();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Failed to add funds. Please try again later.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3 className="popup-title">Add Funds</h3>

        <input
          type="number"
          className="popup-input"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          autoFocus
        />

        {error && <p className="popup-error">{error}</p>}

        <div className="popup-actions">
          <button
            className="popup-btn popup-btn-cancel"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="popup-btn popup-btn-confirm"
            onClick={handleAddFunds}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Funds"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFundPopup;
