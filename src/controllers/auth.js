const { createUser, readUserByEmail } = require('../models/auth');
const { tokenGenerator } = require('../utils/tokenGenerator');

const loginUserController = async (req, res) => {
	const body = req.body;
	readUserByEmail(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 }); 
		} else {
			const token = tokenGenerator(result.id);
			res.json({ success: 1, result, token });
		}
	});
};

const registerUserController = async (req, res) => {
	const body = req.body;
	createUser(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			const token = tokenGenerator(result.id);
			res.json({ success: 1, result, token });
		}
	});
};

module.exports = {
	loginUserController,
	registerUserController,
};