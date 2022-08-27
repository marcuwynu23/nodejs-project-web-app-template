
//SERVER CONFIG
var PORT = 9000;
function config(app) {
	app.listen(process.env.PORT || PORT, (err) => {
		if (!err) {
			console.log(`listening on port ${PORT}`)
		}
	})
}

module.exports = config
