const { Router } = require('express');
const {
	deleteAssuranceController,
	getAssuranceByIdController,
	patchAssuranceController,
	postAssuranceController,
	getAssurancesController,
} = require('../controllers/assurance');

const router = Router();

router.get('/', getAssurancesController);
router.get('/:id', getAssuranceByIdController);
router.post('/', postAssuranceController);
router.patch('/', patchAssuranceController);
router.delete('/:id', deleteAssuranceController);

module.exports = router;
