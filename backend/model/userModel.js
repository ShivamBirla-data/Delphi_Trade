const {model} = require("mongoose");

const {userSchema} = require('../schema/userSchema');

const userModel = new model("Users" , userSchema);

module.exports = {userModel};