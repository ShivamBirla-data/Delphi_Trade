const express = require("express");
const router = express.Router();

const { addFunds, getFunds } = require("../Controllers/FundController.js");

// Add Funds
router.post("/addFunds", addFunds);

// Get All Funds
router.get("/funds", getFunds);

module.exports = router;