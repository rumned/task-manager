const mongoose = require("mongoose");

module.exports = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/task_manager");
		console.log("Connected to MongoDB");
	} catch (e) {
		console.error(`Error connecting to MongoDB: ${e.message}`);
		process.exit(1);
	}
};
