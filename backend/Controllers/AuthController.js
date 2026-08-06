const User = require("../model/userModel");
const Order = require("../model/OrderModel");
const createSecretToken = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const AuthController = require("../Controllers/AuthController");
const jwt = require("jsonwebtoken");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

const user = await User.create({
    username,
    email,
    password: hashedPassword,
});
console.log(user);
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};


// module.exports.Login = async (req, res) => {

//     try {

//         const { email, password } = req.body;

//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         const match = await bcrypt.compare(password, user.password);

//         if (!match) {
//             return res.json({
//                 success: false,
//                 message: "Wrong Password"
//             });
//         }

//         const token = createSecretToken(user._id);
//         console.log("Token:", token);
// res.status(200).json({
//   success: true,
//   message: "Login Successful",
//   token,
//   user,
// });
//         console.log("Generated Token:", token);

//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: false,
//             sameSite: "lax"
//         });

//         return res.status(200).json({
//             success: true,
//             token
//         });

//     } catch (err) {
//         console.log(err);
//     }

// }


module.exports.Login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });

  } catch (err) {

    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};
const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET || "delphi_trade_secret", {
    expiresIn: "7d",
  });

// @route POST /register
// const signup = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//       return res.status(400).json({ success: false, message: "username, email, and password are required." });
//     }

//     const existing = await User.findOne({ email });
//     if (existing) {
//       return res.status(409).json({ success: false, message: "An account with this email already exists." });
//     }

//     const user = await User.create({ username, email, password });
    
//     const token = generateToken(user._id);

//     return res.status(201).json({
//       success: true,
//       message: "Account created successfully.",
//       data: { token, user: { id: user._id, username: user.username, email: user.email } },
//     });
//   } catch (error) {
//     console.error("register error:", error);
//     return res.status(500).json({ success: false, message: "Server error during registration." });
//   }
// };

// @route POST /login
// const Login = async (req, res) => {
//   try {
//     console.log("Login request body:", req.body);
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ success: false, message: "email and password are required." });
//     }

    
//    const user = await User.findOne({ email });

// console.log("Email entered:", email);
// console.log("User found:", user);

// if (!user) {
//   return res.status(401).json({
//     success: false,
//     message: "User not found",
//   });
// }

// const isMatch = await bcrypt.compare(password, user.password);
// console.log("Password entered:", user.password);
// console.log("Password match:", isMatch);

// if (!isMatch) {
//   return res.status(401).json({
//     success: false,
//     message: "Invalid password",
//   });
// }
//     const token = generateToken(user._id);
//     res.cookie("token", token, {
//   httpOnly: true,
//   sameSite: "lax",
//   secure: false,
// });

//     return res.status(200).json({
//       success: true,
//       message: "Login successful.",
//       data: { token, user: { id: user._id, username: user.username, email: user.email } },
//     });
//   } catch (error) {
//     // console.error("login error:", error);
//     return res.status(500).json({ success: false, message: "Server error during login." });
//   }
// };
// module.exports.login = async (req, res) => {
//   try {
//     console.log("Request Body:", req.body);

//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     console.log("User Found:", user);

//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid email or password."
//       });
//     }

//     const auth = await bcrypt.compare(password, user.password);

//     console.log("Password Match:", auth);

//     if (!auth) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid email or password."
//       });
//     }

//     // Token code...
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = { signup,Login};
