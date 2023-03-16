const {
	createTypeV,
	readTypeVById,
	updateTypeV,
	deleteTypeV,
	readTypeV,
} = require('../models/typeVehicule');

const getTypeVByIdController = (req, res) => {
	const id = req.params.id;
	readTypeVById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, TypeV: result });
		}
	});
};

const deleteTypeVController = (req, res) => {
	const id = req.params.id;
	deleteTypeV(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getTypeVsController = (req, res) => {
	readTypeV((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, TypeVs: result });
		}
	});
};

const postTypeVController = async (req, res) => {
	const body = req.body;
	createTypeV(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchTypeVController = (req, res) => {
	const data = req.body;
	updateTypeV(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getTypeVsController,
	getTypeVByIdController,
	postTypeVController,
	patchTypeVController,
	deleteTypeVController,
};
