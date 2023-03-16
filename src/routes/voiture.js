const { Router } = require('express');
const {
	deleteVoitureController,
	getVoitureByIdController,
	patchVoitureController,
	postVoitureController,
	getVoituresController,
} = require('../controllers/voiture');

const router = Router();

router.get('/', getVoituresController);
router.get('/:id', getVoitureByIdController);
router.post('/', postVoitureController);
router.patch('/', patchVoitureController);
router.delete('/:id', deleteVoitureController);

module.exports = router;
