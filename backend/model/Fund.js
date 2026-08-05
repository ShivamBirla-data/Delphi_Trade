const mongoose = require("mongoose");
const userModel = require("../model/userModel");
const FundSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    amount: {
        type: Number,
        required: true,
    },

    transactionType: {
        type: String,
        default: "ADD",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("Funds", FundSchema);