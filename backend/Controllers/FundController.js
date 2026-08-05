const Fund = require("../model/Fund");
const User = require("../model/userModel");
const FundUsers = require("../model/FundUsers");
const jwt = require("jsonwebtoken");
const { createSecretToken } = require("../util/SecretToken");
// backend/Controllers/fundsController.js
// -----------------------------------------------------------------------------
// Business logic for the Funds module.
// Every function here assumes `protect` middleware has already run,
// so req.user.id is available and identifies the logged-in user.
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// @route   POST /addFunds
// @desc    Add money to the logged-in user's availableBalance
// @access  Private (JWT required)
// @body    { amount: Number }
// -----------------------------------------------------------------------------
const addFunds = async (req, res) => {
  try {
    const { amount } = req.body;

    // ---- Validation ----
    if (amount === undefined || amount === null) {
      return res.status(400).json({ success: false, message: "Amount is required." });
    }

    const numericAmount = Number(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Amount must be a number greater than zero." });
    }

    // ---- Find the logged-in user (from decoded JWT) ----
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    // ---- Update balance ----
    user.availableBalance += numericAmount;
    await user.save();

    // ---- Success response ----
    return res.status(200).json({
      success: true,
      message: "Funds added successfully.",
      data: {
        openingBalance: user.openingBalance,
        availableBalance: user.availableBalance,
        usedMargin: user.usedMargin,
        pnl: user.pnl,
      },
    });
  } catch (error) {
    console.error("addFunds error:", error);
    return res.status(500).json({ success: false, message: "Server error while adding funds." });
  }
};

// -----------------------------------------------------------------------------
// @route   POST /withdrawFunds
// @desc    Subtract money from the logged-in user's availableBalance
// @access  Private (JWT required)
// @body    { amount: Number }
// -----------------------------------------------------------------------------
const withdrawFunds = async (req, res) => {
  try {
    const { amount } = req.body;

    // ---- Validation ----
    if (amount === undefined || amount === null) {
      return res.status(400).json({ success: false, message: "Amount is required." });
    }

    const numericAmount = Number(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Amount must be a number greater than zero." });
    }

    // ---- Find the logged-in user ----
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    // ---- Check sufficient balance BEFORE subtracting ----
    if (user.availableBalance < numericAmount) {
      return res.status(400).json({
        success: false,
        message: "Insufficient balance for this withdrawal.",
      });
    }

    // ---- Update balance ----
    user.availableBalance -= numericAmount;
    await user.save();

    // ---- Success response ----
    return res.status(200).json({
      success: true,
      message: "Funds withdrawn successfully.",
      data: {
        openingBalance: user.openingBalance,
        availableBalance: user.availableBalance,
        usedMargin: user.usedMargin,
        pnl: user.pnl,
      },
    });
  } catch (error) {
    console.error("withdrawFunds error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error while withdrawing funds." });
  }
};

// -----------------------------------------------------------------------------
// @route   GET /funds
// @desc    Get the logged-in user's current fund details
// @access  Private (JWT required)
// -----------------------------------------------------------------------------
const getFunds = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "username email openingBalance availableBalance usedMargin pnl"
    );

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    return res.status(200).json({
      success: true,
      data: {
        username: user.username,
        email: user.email,
        openingBalance: user.openingBalance,
        availableBalance: user.availableBalance,
        usedMargin: user.usedMargin,
        pnl: user.pnl,
      },
    });
  } catch (error) {
    console.error("getFunds error:", error);
    return res.status(500).json({ success: false, message: "Server error while fetching funds." });
  }
};

module.exports = {
  addFunds,
  withdrawFunds,
  getFunds,
};


//         const user = await User.findById(req.params.userId);

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User Not Found",
//             });
//         }

//         res.json({
//             openingBalance: user.openingBalance,
//             availableBalance: user.availableBalance,
//             usedMargin: user.usedMargin,
//             pnl: user.pnl,
//         });

//     } catch (err) {

//         res.status(500).json({
//             success: false,
//             message: err.message,
//         });

//     }

// };