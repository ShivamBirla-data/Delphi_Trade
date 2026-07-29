const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = async (req, res) => {
  try {
    // Check token from cookie
    const token = req.cookies.token;

    console.log("Cookies:", req.cookies);
    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No token found",
      });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    console.log("Decoded:", decoded);

    // Find user
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      user: user.username,
    });

  } catch (error) {
    console.log("Verification Error:", error.message);

    return res.status(401).json({
      status: false,
      message: "Invalid or expired token",
    });
  }
};