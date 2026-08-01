const mongoose = require("mongoose");

const FundSchema = new mongoose.Schema({
  amount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("funds", FundSchema);