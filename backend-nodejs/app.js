const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

//importing routes
const fleetsRouter = require("./routes/fleet");

//initializing express app
const app = express();

//database connection
const dburl = "mongodb://localhost:27017/fleets";
mongoose
	.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Successfully connected to MongoDB Atlas!");
	})
	.catch((error) => {
		console.log("Unable to connect to MongoDB Atlas!");
		console.error(error);
	});

/**
 * By using body parser we we'll need to be able to extract the JSON object from the request
 */
app.use(bodyParser.json());

/**
 * Resolving cors errors
 */

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

//registering routes
app.use("/api/fleet", fleetsRouter);
app.use("/", (req, res, next) => {
	res.json({
		message: "Welcome to the api",
		getAllFleetsat: "http://localhost:5000/api/fleet",
	});
});

module.exports = app;
