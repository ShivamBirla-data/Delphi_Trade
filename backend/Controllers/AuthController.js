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


module.exports.Login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.json({
                success: false,
                message: "Wrong Password"
            });
        }

        const token = createSecretToken(user._id);

        console.log("Generated Token:", token);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });

        return res.status(200).json({
            success: true,
            token
        });

    } catch (err) {
        console.log(err);
    }

}
