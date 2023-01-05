const controller = require("../controller/controllers")
const express = require("express")


const router = express.Router()
router.get('/', controller.GET)

module.exports = router