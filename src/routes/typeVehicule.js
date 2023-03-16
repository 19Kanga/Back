const { Router } = require('express');
const {
	deleteTypeVController,
	getTypeVByIdController,
	patchTypeVController,
	postTypeVController,
	getTypeVsController,
} = require('../controllers/typeVehicule');

const router = Router();

router.get('/', getTypeVsController);
router.get('/:id', getTypeVByIdController);
router.post('/', postTypeVController);
router.patch('/', patchTypeVController);
router.delete('/:id', deleteTypeVController);

module.exports = router;
