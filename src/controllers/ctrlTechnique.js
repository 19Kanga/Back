const {
	createCtrlT,
	readCtrlTById,
	updateCtrlT,
	deleteCtrlT,
	readCtrlT,
} = require('../models/ctrlTechnique');

const getCtrlTByIdController = (req, res) => {
	const id = req.params.id;
	readCtrlTById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Control_technique: result });
		}
	});
};

const deleteCtrlTController = (req, res) => {
	const id = req.params.id;
	deleteCtrlT(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getCtrlTsController = (req, res) => {
	readCtrlT((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Controle_technique: result });
		}
	});
};

const postCtrlTController = async (req, res) => {
	const body = req.body;
	createCtrlT(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchCtrlTController = (req, res) => {
	const data = req.body;
	updateCtrlT(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getCtrlTsController,
	getCtrlTByIdController,
	postCtrlTController,
	patchCtrlTController,
	deleteCtrlTController,
};
