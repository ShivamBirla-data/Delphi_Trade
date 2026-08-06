const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  console.log("URL:", req.originalUrl);
console.log("Cookie Token:", req.cookies.token);
  try {
    const token = req.cookies.token;

    console.log("Cookie Token:", token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided.",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = decoded;

    next();
  } catch (err) {
    console.error(err);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

module.exports = protect;