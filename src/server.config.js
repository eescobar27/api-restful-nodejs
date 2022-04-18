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
	swaggerOptions: {
		info: {
			title: "API Documentation",
			version: `${Package.version}`
		}
	}
};
