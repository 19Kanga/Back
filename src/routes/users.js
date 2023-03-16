const { Router } = require('express');
const {
	getUserByIdController,
	patchUserController,
	getUsersController,
} = require('../controllers/users');
const { checkAuth } = require('../controllers/check-auth');

const router = Router();

router.get('/', checkAuth, getUsersController);
router.get('/:id', checkAuth, getUserByIdController);
router.patch('/', checkAuth, patchUserController);

module.exports = router;