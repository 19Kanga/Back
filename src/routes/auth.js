const { Router } = require('express');
const {
	registerUserController,
	loginUserController,
} = require('../controllers/auth');

const router = Router();

router.post('/login', loginUserController);
router.post('/register', registerUserController);

module.exports = router;