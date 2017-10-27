const Hapi = require("hapi");
const HapiSwagger = require("hapi-swagger");
const Good = require("good");
const Inert = require("inert");
const Vision = require("vision");

const Config = require("./server.config");

const server = new Hapi.Server();
server.connection(Config.webServer);
server.register([
	{
		register: Good,
		options: Config.loggerOptions
	},
	{
		register: HapiSwagger,
		options: Config.swaggerOptions
	},
	Inert,
	Vision
], (error) => {
	if(error) {
		console.log(error);
	}
});

server.route([
	{
		method: "GET",
		path: "/health",
		handler: (request, reply) => {
			reply();
		},
		config: {
			auth: false,
			tags: ["api"]
		}
	}
]);

server.start((error) => {

	if(error) {
		console.log(error);
		return;
	}

	server.log("info", `server running at: ${server.info.uri}`);
});
