const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

router.post("/register", async (req, res) => {
	try {
		let userExist = await User.findOne({ username: req.body.username });
		if (userExist) {
			return res.status(400).json({ msg: "User already exists" });
		}
		let user = new User(req.body);
		let salt = bcrypt.genSaltSync(12);
		let hashedPassword = bcrypt.hashSync(user.password, salt);

		user.password = hashedPassword;
		user.save();
		return res.json({ msg: "Registered Successfully", user });
	} catch (e) {
		return res
			.status(400)
			.json({ msg: "Failed to Register", error: e.message });
	}
});

router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const userFound = await User.findOne({ username });

		if (!userFound)
			return res.status(400).json({ msg: "Invalid Credentials" });

		//is the 12345678 the same with the hashed password inside our collection
		const isMatch = bcrypt.compareSync(password, userFound.password);

		if (!isMatch)
			return res.status(400).json({ msg: "Invalid Crendetials" });

		jwt.sign(
			{ data: userFound },
			SECRET_KEY,
			{ expiresIn: "3h" },
			(err, token) => {
				if (err)
					return res
						.status(400)
						.json({ msg: "Failed to login", error: err.message });
				return res.json({
					token,
					user: userFound,
					msg: "Login Successfully",
				});
			}
		);
	} catch (e) {
		return res
			.status(400)
			.json({ msg: "Failed to login", error: e.message });
	}
});

module.exports = router;
