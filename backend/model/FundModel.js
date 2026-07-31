const {model} = require("mongoose");

const {FundSchema} = require('../schema/FundSchema');

const FundModel = new model("funds" , FundSchema);

module.exports = {FundModel};