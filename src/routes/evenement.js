const { Router } = require('express');
const {
	deleteEvenementController,
	getEvenementByIdController,
	patchEvenementController,
	postEvenementController,
	getEvenementsController,
} = require('../controllers/evenement');

const router = Router();

router.get('/', getEvenementsController);
router.get('/:id', getEvenementByIdController);
router.post('/', postEvenementController);
router.patch('/', patchEvenementController);
router.delete('/:id', deleteEvenementController);

module.exports = router;
