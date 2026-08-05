const { Signup, Login , newOrder } = require('../Controllers/AuthController')
const router = require('express').Router()
const protect = require('../Middlewres/AuthMiddleware')
// const { getFunds, addFunds, withdrawFunds } = require('../Controllers/FundController')

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/verify', protect)

module.exports = router