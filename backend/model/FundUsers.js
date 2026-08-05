const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    username: String,

    email: String,

    password: String,

    availableBalance: {
        type: Number,
        default: 0
    },

    openingBalance: {
        type: Number,
        default: 0
    },

    usedMargin: {
        type: Number,
        default: 0
    },

    pnl: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model("FundUsers", UserSchema);