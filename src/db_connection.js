"use strict";

const Mongoose = require("mongoose");

const DATABASE_NAME = "my_database"
const connectionString = `mongodb://${process.env.DATABASE_HOST}/${DATABASE_NAME}?${process.env.DATABASE_OPTIONS}`;

const connect = () => Mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = {
	connect,
	connection: Mongoose.connection,
	DATABASE_NAME
};
