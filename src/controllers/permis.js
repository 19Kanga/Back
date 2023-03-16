const {
	createPermis,
	readPermisById,
	updatePermis,
	deletePermis,
	readPermis,
} = require('../models/Permis');

const getPermisByIdController = (req, res) => {
	const id = req.params.id;
	readPermisById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Permis: result });
		}
	});
};

const deletePermisController = (req, res) => {
	const id = req.params.id;
	deletePermis(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getPermissController = (req, res) => {
	readPermis((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Permis: result });
		}
	});
};

const postPermisController = async (req, res) => {
	const body = req.body;
	createPermis(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchPermisController = (req, res) => {
	const data = req.body;
	updatePermis(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getPermissController,
	getPermisByIdController,
	postPermisController,
	patchPermisController,
	deletePermisController,
};
