const { Router } = require('express');
const {
	deleteCarteGController,
	getCarteGByIdController,
	patchCarteGController,
	postCarteGController,
	getCarteGsController,
} = require('../controllers/carteGrise');

const router = Router();

router.get('/', getCarteGsController);
router.get('/:id', getCarteGByIdController);
router.post('/', postCarteGController);
router.patch('/', patchCarteGController);
router.delete('/:id', deleteCarteGController);

module.exports = router;
