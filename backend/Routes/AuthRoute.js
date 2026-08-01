const { Signup, Login , newOrder } = require('../Controllers/AuthController')
const router = require('express').Router()
const { userVerification} = require('../Middlewres/AuthMiddleware')

// const { getOrders } = require("../Controllers/OrderController");

// router.get("/order", newOrder);
router.post('/signup', Signup)
router.post('/login', Login)
router.post('/verify', userVerification)
module.exports = router