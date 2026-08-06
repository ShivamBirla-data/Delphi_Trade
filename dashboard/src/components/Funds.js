import React, { useState, useEffect } from "react";
import { getFunds } from "../api/fundsApi";
import AddFundsPopup from "../Popup/AddFundsPopup";
import WithdrawPopup from "../Popup/WithdrawPopup";
import "./Funds.css";
import axios from "axios";
const Funds = () => {
  // ---- Fund details fetched from the backend ----
  const [funds, setFunds] = useState({
    openingBalance: 0,
    availableBalance: 0,
    usedMargin: 0,
    pnl: 0,
  });

  // ---- UI state ----
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showWithdrawPopup, setShowWithdrawPopup] = useState(false);

  // ---- Fetch fund details from GET /funds ----
  const fetchFunds = async () => {
    try {
      setLoading(true);
      setPageError("");

      const response = await axios.get(
         "http://localhost:3002/funds",
        {
          withCredentials: true,
        }
      );
     if (response.data.success) {
        setFunds(response.data.data);
      } else {
        setPageError(response.data.message || "Could not load funds data.");
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to load funds. Please try again.";
      setPageError(message);
    } finally {
      setLoading(false);
    }
  };

  // ---- Load funds once when the page mounts ----
  useEffect(() => {
    fetchFunds();
  }, []);

  // Called by AddFundsPopup / WithdrawPopup after a successful API call
  const handleAddSuccess = () => {
    setShowAddPopup(false);
    fetchFunds(); // refresh Available Balance automatically
  };

  const handleWithdrawSuccess = () => {
    setShowWithdrawPopup(false);
    fetchFunds(); // refresh Available Balance automatically
  };

  // Placeholder handler for "Open Account" — wire this up to your
  // account-opening flow / route as needed.
  const handleOpenAccount = () => {
    alert("Redirecting to Open Account flow...");
    // e.g. navigate("/open-account");
  };

  return (
    <div className="funds-page">
      <h2 className="funds-heading">Funds</h2>

      {/* ---- Action buttons ---- */}
      <div className="funds-actions">
        <button className="funds-action-btn btn-add" onClick={() => setShowAddPopup(true)}>
          Add Funds
        </button>
        <button
          className="funds-action-btn btn-withdraw"
          onClick={() => setShowWithdrawPopup(true)}
        >
          Withdraw
        </button>
      </div>

      {/* ---- Loading / error states ---- */}
      {loading && <p className="funds-loading">Loading funds...</p>}
      {pageError && !loading && <p className="funds-error">{pageError}</p>}

      {/* ---- Fund details grid ---- */}
      {!loading && !pageError && (
        <div className="funds-info-grid">
          <div className="funds-info-card">
            <div className="funds-info-label">Opening Balance</div>
            <div className="funds-info-value">₹{funds.openingBalance}</div>
          </div>

          <div className="funds-info-card">
            <div className="funds-info-label">Available Balance</div>
            <div className="funds-info-value">₹{funds.availableBalance}</div>
          </div>

          <div className="funds-info-card">
            <div className="funds-info-label">Used Margin</div>
            <div className="funds-info-value">₹{funds.usedMargin.toFixed(2)}</div>
          </div>

          <div className="funds-info-card">
            <div className="funds-info-label">Profit &amp; Loss</div>
            <div
              className={`funds-info-value ${
                funds.pnl >= 0 ? "positive" : "negative"
              }`}
            >
              {funds.pnl >= 0 ? "+" : ""}
              ₹{funds.pnl.toFixed(2)}
            </div>
          </div>
        </div>
      )}

      {/* ---- Popups ---- */}
      {showAddPopup && (
        <AddFundsPopup onClose={() => setShowAddPopup(false)} onSuccess={handleAddSuccess} />
      )}

      {showWithdrawPopup && (
        <WithdrawPopup
          onClose={() => setShowWithdrawPopup(false)}
          onSuccess={handleWithdrawSuccess}
        />
      )}
    </div>
  );
};

export default Funds;
