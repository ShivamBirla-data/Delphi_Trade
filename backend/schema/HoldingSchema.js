// const { Schema } = require("mongoose");

// const HoldingSchema = new Schema({
//     name: String,
//     qty: Number,
//     avg: Number,
//     price: Number,
//     net: String,
//     day: String
// });

// module.exports = {HoldingSchema};
const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: String,

    qty: Number,

    avg: Number,

    price: Number,

    pnl: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = { HoldingSchema };