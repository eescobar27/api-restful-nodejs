module.exports = {
	loggerOptions: {
		reporters: {
			console: [
				{
					module: "good-squeeze",
					name: "Squeeze",
					args: [
						{
							response: "*",
							log: "*"
						}
					]
				},
				{
					module: "good-console",
				}
			, "stdout"]
		}
	},
	swaggerOptions: {
		info: {
			title: "API Documentation",
			version: "1.0.0"
		}
	},
	webServer: {
		port: 8080,
		routes: {
			cors: true
		}
	}
};
