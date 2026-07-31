const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
  availableBalance: {
    type: Number,
    required: true,
  },
  usedMargin: {
    type: Number,
    required: true,
  },
  openingBalance: {
    type: Number,
    required: true,
  },
  pnl: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("funds", fundSchema);