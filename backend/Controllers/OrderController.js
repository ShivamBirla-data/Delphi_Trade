const User = require("../model/userModel");
const OrderModel = require("../model/OrderModel");

const buyOrder = async (req, res) => {
  try {
    console.log("REQ.USER:", req.user);
    console.log("REQ.BODY:", req.body);

    const { name, qty, price } = req.body;

    // Check authentication
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    // Find logged-in user
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const quantity = Number(qty);
    const stockPrice = Number(price);

    // Validate
    if (
      !name ||
      !Number.isFinite(quantity) ||
      !Number.isFinite(stockPrice) ||
      quantity <= 0 ||
      stockPrice <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid order details",
      });
    }

    // Calculate total
    const totalAmount = quantity * stockPrice;

    console.log("Available Balance:", user.availableBalance);
    console.log("Required Amount:", totalAmount);

    // Check balance
    if (user.availableBalance < totalAmount) {
      return res.status(400).json({
        success: false,
        message: "Insufficient funds. Please add funds first.",
      });
    }

    // Create order
    const order = new OrderModel({
  userId: user._id,
  name: name,
  qty: Number(qty),
  price: Number(price),
  mode: "BUY",
});

await order.save();

console.log("ORDER SAVED:", order);

    // Deduct balance AFTER order is saved
    user.availableBalance -= totalAmount;

    user.usedMargin =
      (user.usedMargin || 0) + totalAmount;

    await user.save();

    console.log(
      "New Available Balance:",
      user.availableBalance
    );

    return res.status(201).json({
      success: true,
      message: "Buy order successful",
      order: order,
      availableBalance: user.availableBalance,
    });

  } catch (error) {
    console.log("BUY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Buy order failed",
      error: error.message,
    });
  }
};






const getOrders = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const orders = await OrderModel.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders: orders,
    });

  } catch (error) {
    console.log("GET ORDERS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
}




const sellOrder = async (req, res) => {
  try {
    console.log("========== SELL START ==========");
    console.log("REQ.USER:", req.user);
    console.log("REQ.BODY:", req.body);

    const { name, qty, price } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const quantity = Number(qty);
    const stockPrice = Number(price);

    if (
      !name ||
      quantity <= 0 ||
      stockPrice <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid sell details",
      });
    }

    const totalAmount = quantity * stockPrice;

    // Create SELL order
    const order = new OrderModel({
      userId: user._id,
      name: name,
      qty: quantity,
      price: stockPrice,
      mode: "SELL",
    });

    await order.save();

    console.log("SELL ORDER SAVED:", order);

    // Add money after selling
    user.availableBalance += totalAmount;

    user.usedMargin = Math.max(
      0,
      (user.usedMargin || 0) - totalAmount
    );

    await user.save();

    console.log(
      "New Available Balance:",
      user.availableBalance
    );

    return res.status(201).json({
      success: true,
      message: "Sell order successful",
      order: order,
      availableBalance: user.availableBalance,
    });

  } catch (error) {
    console.log("SELL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Sell order failed",
      error: error.message,
    });
  }
};

const getSellOrders = async (req, res) => {
  try {
    console.log("GET SELL ORDERS API CALLED");
    console.log("USER:", req.user);

    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const sellOrders = await OrderModel.find({
      userId: req.user.id,
      mode: "SELL",
    }).sort({ createdAt: -1 });

    console.log("SELL ORDERS:", sellOrders);

    return res.status(200).json({
      success: true,
      orders: sellOrders,
    });

  } catch (error) {
    console.log("GET SELL ORDERS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch sell orders",
      error: error.message,
    });
  }
};
module.exports = {
  buyOrder,getOrders,sellOrder,getSellOrders
};