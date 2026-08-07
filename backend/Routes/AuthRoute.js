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
const { Signup, Login,forgotPassword,verifyOTP,resetPassword } = require("../Controllers/AuthController");
const protect = require("../Middlewres/AuthMiddleware");
const User = require("../model/userModel");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);



router.get("/verify", protect, async (req, res) => {
  try {
    console.log("VERIFY USER ID:", req.user.id);

    const user = await User.findById(req.user.id)
      .select("username email");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("USER FROM DATABASE:", user);

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.log("VERIFY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
