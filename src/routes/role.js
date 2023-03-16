const { Router } = require('express');
const {
	deleteRoleController,
	getRoleByIdController,
	patchRoleController,
	postRoleController,
	getRolesController,
} = require('../controllers/role');

const router = Router();

router.get('/', getRolesController);
router.get('/:id', getRoleByIdController);
router.post('/', postRoleController);
router.patch('/', patchRoleController);
router.delete('/:id', deleteRoleController);

module.exports = router;
