// backend/Models/User.js
// -----------------------------------------------------------------------------
// Mongoose schema for the User collection.
// Holds authentication info plus all fund-related fields used by the
// Funds module (openingBalance, availableBalance, usedMargin, pnl).
// -----------------------------------------------------------------------------

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true, // hashed password (not part of Funds module, but needed for login/JWT)
    },

    // ---------------- Funds-related fields ----------------
    openingBalance: {
      type: Number,
      default: 0, // Balance the account started the day/period with
    },
    availableBalance: {
      type: Number,
      default: 0, // Balance currently available for trading / withdrawal
    },
    usedMargin: {
      type: Number,
      default: 0, // Margin currently blocked/used in open positions
    },
    pnl: {
      type: Number,
      default: 0, // Realized + unrealized Profit & Loss
    },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

module.exports = mongoose.model("user", userSchema);
