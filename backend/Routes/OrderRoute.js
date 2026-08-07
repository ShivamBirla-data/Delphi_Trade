const router = require("express").Router();

const protect = require("../Middlewres/AuthMiddleware");

const { buyOrder,getOrders,sellOrder,getSellOrders } = require("../Controllers/OrderController");
console.log("protect:", typeof protect);
console.log("buyOrder:", typeof buyOrder);

router.post(
  "/newOrder",
  protect,
  buyOrder
);

router.get("/getOrder", protect, getOrders);
router.post("/sellOrder", protect, sellOrder);
router.get("/getSellOrders", protect, getSellOrders);
module.exports = router;