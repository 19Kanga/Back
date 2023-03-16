const { Router } = require('express');
const {
	deleteCtrlTController,
	getCtrlTByIdController,
	patchCtrlTController,
	postCtrlTController,
	getCtrlTsController,
} = require('../controllers/ctrlTechnique');

const router = Router();

router.get('/', getCtrlTsController);
router.get('/:id', getCtrlTByIdController);
router.post('/', postCtrlTController);
router.patch('/', patchCtrlTController);
router.delete('/:id', deleteCtrlTController);

module.exports = router;
