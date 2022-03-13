const control = require("../controller/controllers")
const express = require("express")


const homeRouter = express.Router()
homeRouter.get('/',control.HOME)


const aboutRouter = express.Router()
aboutRouter.get('/',control.ABOUT)


const contactRouter = express.Router()
contactRouter.get('/',control.CONTACT)





module.exports = {
  HOME : homeRouter,
  ABOUT : aboutRouter,
  CONTACT : contactRouter
}
