const {
	createVoiture,
	readVoitureById,
	updateVoiture,
	deleteVoiture,
	readVoiture,
} = require('../models/voiture');

const getVoitureByIdController = (req, res) => {
	const id = req.params.id;
	readVoitureById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Voiture: result });
		}
	});
};

const deleteVoitureController = (req, res) => {
	const id = req.params.id;
	deleteVoiture(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getVoituresController = (req, res) => {
	readVoiture((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Voitures: result });
		}
	});
};

const postVoitureController = async (req, res) => {
	const body = req.body;
	createVoiture(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchVoitureController = (req, res) => {
	const data = req.body;
	updateVoiture(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getVoituresController,
	getVoitureByIdController,
	postVoitureController,
	patchVoitureController,
	deleteVoitureController,
};
