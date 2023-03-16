const {
	createEvenement,
	readEvenementById,
	updateEvenement,
	deleteEvenement,
	readEvenement,
} = require('../models/evenement');

const getEvenementByIdController = (req, res) => {
	const id = req.params.id;
	readEvenementById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Evenement: result });
		}
	});
};

const deleteEvenementController = (req, res) => {
	const id = req.params.id;
	deleteEvenement(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getEvenementsController = (req, res) => {
	readEvenement((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Evenements: result });
		}
	});
};

const postEvenementController = async (req, res) => {
	const body = req.body;
	createEvenement(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchEvenementController = (req, res) => {
	const data = req.body;
	updateEvenement(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getEvenementsController,
	getEvenementByIdController,
	postEvenementController,
	patchEvenementController,
	deleteEvenementController,
};
