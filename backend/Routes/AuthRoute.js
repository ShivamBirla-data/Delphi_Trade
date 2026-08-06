// const { Signup, Login , newOrder } = require('../Controllers/AuthController')
// const router = require('express').Router()
// const protect = require('../Middlewres/AuthMiddleware')
// // const { getFunds, addFunds, withdrawFunds } = require('../Controllers/FundController')

// router.post('/signup', Signup)
// router.post('/login', Login)
// router.post('/verify', protect)


// module.exports = router
// backend/Routes/AuthRoute.js
// -----------------------------------------------------------------------------
// Public routes to register/login and obtain a JWT for use with /funds,
// /addFunds, /withdrawFunds.
// -----------------------------------------------------------------------------

const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../Controllers/AuthController");

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
