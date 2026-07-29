require("dotenv").config();
const jwt = require("jsonwebtoken");

// module.exports.createSecretToken = (id) => {
//   return jwt.sign({ id }, process.env.TOKEN_KEY, {
//     expiresIn: 3 * 24 * 60 * 60,
//   });
// };
// const token = createSecretToken(user._id);

// res.cookie("token", token, {
//   httpOnly: true,
//   sameSite: "lax",
//   secure: false, // localhost
// });

// res.status(200).json({
//   success: true,
//   message: "Login successful",
// });

module.exports.createSecretToken = (id) => {
  return jwt.sign(
    { id },
    process.env.TOKEN_KEY,
    {
      expiresIn: "1d",
    }
  );
};