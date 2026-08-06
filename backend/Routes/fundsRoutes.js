// backend/Routes/fundsRoutes.js
// -----------------------------------------------------------------------------
// Defines the Funds module API endpoints and wires them to the
// controller functions, protected by the JWT auth middleware.
// -----------------------------------------------------------------------------

const express = require("express");
const router = express.Router();

const { addFunds, withdrawFunds, getFunds } = require("../Controllers/FundController");
const protect = require("../Middlewres/AuthMiddleware");

// POST /addFunds  -> add money to availableBalance
router.post("/addFunds", protect, addFunds);

// POST /withdrawFunds -> subtract money from availableBalance
router.post("/withdrawFunds", protect, withdrawFunds);

// GET /funds -> fetch current fund details for the logged-in user
router.get("/funds", protect, getFunds);

module.exports = router;
