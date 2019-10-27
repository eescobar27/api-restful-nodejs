"use strict";

const Hapi = require("@hapi/hapi");
const Good = require("@hapi/good");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
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
		await server.register([
			{
				plugin: Good,
				options: Config.loggerOptions
			},
			{
				plugin: HapiSwagger,
				options: Config.swaggerOptions
			},
			Inert,
			Vision
		]);

		await DBConnection.connect();
		await server.start();

		server.log("info", `connected to db: ${DBConnection.DATABASE_NAME}`);
		server.log("info", `server running on: ${server.info.uri}`);
	}
	catch (error) {
		console.log(error);
		process.exit(1);
	}
})();
