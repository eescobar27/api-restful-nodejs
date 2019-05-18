module.exports = {
	webServer: {
		port: 8080,
		routes: {
			cors: true
		}
	},
	loggerOptions: {
		reporters: {
			console: [
				{
					module: "@hapi/good-squeeze",
					name: "Squeeze",
					args: [{ response: "*", log: "*" }]
				},
				{
					module: "@hapi/good-console",
				},
				"stdout"
			]
		}
	}
};
