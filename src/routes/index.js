const express = require('express')
const Users = require('../models/user')
const User = require('../models/index').Users

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', { title: `Hello this a Travel planning app`, welcome: User })
})

module.exports = router
