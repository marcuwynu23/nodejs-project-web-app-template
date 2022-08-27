
const config = (app, constants) => {
	app.use(constants.HOME_URL, require("../home/router/routers"))
	app.use(constants.CONTACT_URL, require("../contact/router/routers"))
	app.use(constants.ABOUT_URL, require("../about/router/routers"))
}


module.exports = config