"use strict";

const Mongoose = require("mongoose");

const DATABASE_NAME = "my_database"
const connectionString = `mongodb://${process.env.DATABASE_HOST}/${DATABASE_NAME}?${process.env.DATABASE_OPTIONS}`;

const connect = async () => {
	await Mongoose.connect(connectionString, { useNewUrlParser: true });
	console.log(`connected to db: ${DATABASE_NAME}`);
};

module.exports = {
	connect
};
