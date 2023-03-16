const {
	createCarteG,
	readCarteGById,
	updateCarteG,
	deleteCarteG,
	readCarteG,
} = require('../models/carteGrise');

const getCarteGByIdController = (req, res) => {
	const id = req.params.id;
	readCarteGById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, CarteGrise: result });
		}
	});
};

const deleteCarteGController = (req, res) => {
	const id = req.params.id;
	deleteCarteG(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getCarteGsController = (req, res) => {
	readCarteG((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, CarteGrises: result });
		}
	});
};

const postCarteGController = async (req, res) => {
	const body = req.body;
	createCarteG(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchCarteGController = (req, res) => {
	const data = req.body;
	updateCarteG(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getCarteGsController,
	getCarteGByIdController,
	postCarteGController,
	patchCarteGController,
	deleteCarteGController,
};
