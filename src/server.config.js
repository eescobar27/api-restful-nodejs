"use strict";

const Package = require("../package.json");

process.title = `${Package.name}@${Package.version}`;

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
	},
	swaggerOptions: {
		info: {
			title: "API Documentation",
			version: `${Package.version}`
		}
	}
};
