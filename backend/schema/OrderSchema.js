// // const {Schema} = require("mongoose");

// // const OrderSchema = new Schema({
// //     name: String,
// //     qty: Number,
// //     price: Number,
// //     mode: String
// // });

// // module.exports = {OrderSchema};
// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     name: String,

//     qty: {
//       type: Number,
//       required: true,
//     },

//     price: {
//       type: Number,
//       required: true,
//     },

//     mode: {
//       type: String,
//       enum: ["BUY", "SELL"],
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// const OrderModel = mongoose.model("order", OrderSchema);