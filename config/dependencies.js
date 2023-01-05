/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
const path = require("path")
const session = require("express-session")
const nunjucks = require("nunjucks")
const morgan = require('morgan')
const mongooseDBConnect = require("./db")


const config = (app, express, constants, dirname) => {
	//VIEW ENGINE CONFIG
	nunjucks.configure(path.resolve(dirname, constants.VIEW_DIR), {
		express: app,
		autoscape: true,
		noCache: false,
		watch: true
	})
	//STATIC CONFIG
	app.use(express.static(path.join(dirname, constants.STATIC_DIR)))

	//LOGGER CONFIG
	app.use(morgan("dev", {}))


	//DATABASE CONFIG
	mongooseDBConnect()


	//SESSION CONFIG
	app.use(session({
		secret: constants.SECRET,
		saveUninitialized: false,
		resave: false
	}));






}


module.exports = config