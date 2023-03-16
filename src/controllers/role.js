const {
	createRole,
	readRoleById,
	updateRole,
	deleteRole,
	readRole,
} = require('../models/role');

const getRoleByIdController = (req, res) => {
	const id = req.params.id;
	readRoleById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Role: result });
		}
	});
};

const deleteRoleController = (req, res) => {
	const id = req.params.id;
	deleteRole(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getRolesController = (req, res) => {
	readRole((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Roles: result });
		}
	});
};

const postRoleController = async (req, res) => {
	const body = req.body;
	createRole(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchRoleController = (req, res) => {
	const data = req.body;
	updateRole(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getRolesController,
	getRoleByIdController,
	postRoleController,
	patchRoleController,
	deleteRoleController,
};
