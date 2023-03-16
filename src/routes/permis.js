const { Router } = require('express');
const {
	deletePermisController,
	getPermisByIdController,
	patchPermisController,
	postPermisController,
	getPermissController,
} = require('../controllers/permis');

const router = Router();

router.get('/', getPermissController);
router.get('/:id', getPermisByIdController);
router.post('/', postPermisController);
router.patch('/', patchPermisController);
router.delete('/:id', deletePermisController);

module.exports = router;
