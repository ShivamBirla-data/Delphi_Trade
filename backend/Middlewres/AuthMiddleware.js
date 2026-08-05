// const User = require("../model/userModel");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// module.exports.userVerification = async (req, res) => {
//   try {
//     // Check token from cookie
//     const token = req.cookies.token;

//     console.log("Cookies:", req.cookies);
//     console.log("Token:", token);

//     if (!token) {
//       return res.status(401).json({
//         status: false,
//         message: "No token found",
//       });
//     }

//     // Verify JWT
//     const decoded = jwt.verify(token, process.env.TOKEN_KEY);

//     console.log("Decoded:", decoded);

//     // Find user
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       return res.status(404).json({
//         status: false,
//         message: "User not found",
//       });
//     }

//     return res.status(200).json({
//       status: true,
//       user: user.username,
//     });

//   } catch (error) {
//     console.log("Verification Error:", error.message);

//     return res.status(401).json({
//       status: false,
//       message: "Invalid or expired token",
//     });
//   }
// };

// backend/Middleware/authMiddleware.js
// -----------------------------------------------------------------------------
// Verifies the JWT token sent by the frontend (in the Authorization header)
// and attaches the decoded user id to req.user so controllers can identify
// the logged-in user.
//
// Expected header format:
//   Authorization: Bearer <token>
// -----------------------------------------------------------------------------

const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 1. Check that the Authorization header exists and is well formed
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided. Authorization denied.",
      });
    }

    // 2. Extract the raw token (removes the "Bearer " prefix)
    const token = authHeader.split(" ")[1];

    // 3. Verify the token using the app secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "delphi_trade_secret");

    // 4. Attach the user id (and any other claims) to the request object
    //    so that downstream controllers can use req.user.id
    req.user = decoded; // decoded should contain at least { id: userId }

    next(); // move on to the actual route handler
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

module.exports = protect;
