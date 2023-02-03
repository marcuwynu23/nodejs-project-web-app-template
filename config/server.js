/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

//SERVER CONFIG
var PORT = 8080;
function config(app) {
	app.listen(process.env.PORT || PORT, (err) => {
		if (!err) {
			console.log(`listening on port ${PORT}`)
		}
	})
}

module.exports = config
