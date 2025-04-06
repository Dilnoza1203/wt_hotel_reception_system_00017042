const express = require('express')
const guest_router = require('./guest')

const router = express.Router()

// registering child routers
router.use('/guest', guest_router)
module.exports = router