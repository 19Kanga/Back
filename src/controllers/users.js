const {
	readUserById,
	updateUser,
	readUser,
} = require('../models/users');

const getUserByIdController = (req, res) => {
	const id = req.params.id;
	readUserById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, user: result });
		}
	});
};

const getUsersController = (req, res) => {
	readUser((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, users: result });
		}
	});
};

const patchUserController = (req, res) => {
	const data = req.body;
	updateUser(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};



module.exports = {
	getUsersController,
	getUserByIdController,
	patchUserController,
};