/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

const config = (app, constants) => {
	app.use(constants.HOME_URL, require("../app/home/router/routers"))
	app.use(constants.CONTACT_URL, require("../app/contact/router/routers"))
	app.use(constants.ABOUT_URL, require("../app/about/router/routers"))
}


module.exports = config