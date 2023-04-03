const express = require('express')
const { createEmployer, getUserByEmail } = require('../controller/user.controller')
const router = express.Router()

router.route('/')
.post( createEmployer )

router.route('/:email')
.get( getUserByEmail )

module.exports = router