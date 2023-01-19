/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

const config = (app, constants) => {
	app.use(constants.API_URL, require("../app/__api__/routes/router"))
	app.use(constants.HOME_URL, require("../app/home/router"))
	app.use(constants.CONTACT_URL, require("../app/contact/router"))
	app.use(constants.ABOUT_URL, require("../app/about/router"))
}


module.exports = config