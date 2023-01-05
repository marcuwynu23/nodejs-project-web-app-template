/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

require("dotenv").config()
const mongoose = require("mongoose")


function mongooseDBConnect() {
	let MONGODB_URI = `mongodb://${process.env.DB_ADDR}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
	mongoose.connect(MONGODB_URI, {
		useNewUrlParser: true
	})
		.then((con) => {
			console.log(`mongodb server: ${MONGODB_URI}`)
			console.log("mongodb connection successfully!")
		})
		.catch(err => {
			console.log("mongodb connection error: ", err)
		})
}

module.exports = mongooseDBConnect;

