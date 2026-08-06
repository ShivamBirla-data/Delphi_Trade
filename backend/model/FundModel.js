// backend/Models/FundModel.js
// -----------------------------------------------------------------------------
// Every deposit or withdrawal is stored as its OWN document (a ledger entry).
// This gives us a full transaction history for free, and the "availableBalance"
// field on each row is a snapshot of the balance immediately after that
// transaction — so the current balance is simply the balance on the most
// recent row for a given user.
// -----------------------------------------------------------------------------

const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true, // speeds up "find all transactions for this user" queries
  },
  type: {
    type: String,
    enum: ["ADD", "WITHDRAW"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: [0.01, "Amount must be greater than zero"],
  },
  availableBalance: {
    type: Number,
    required: true, // balance AFTER this transaction was applied
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Fund", fundSchema);
