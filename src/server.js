"use strict";

const Hapi = require("@hapi/hapi");
const Config = require("./server.config");
const DBConnection = require("./db_connection");

const server = Hapi.server(Config.webServer);

server.route([
	{
		method: 'GET',
		path:'/health',
		handler: (request, h) => h.response(),
		config: {
			auth: false,
			tags: ["api"]
		}
	},
	{
        method: '*',
        path: '/{any*}',
        handler: (request, h) => h.response().code(404)
    }
]);

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

(async () => {
	try {
		await DBConnection.connect();
		await server.start();
		console.log(`server running on: ${server.info.uri}`);
	}
	catch (error) {
		console.log(error);
	}
})();
