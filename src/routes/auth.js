const {Router} = require ('express');
const {
  registerUserController,
  loginUserController,
  verifyPassword,
} = require ('../controllers/auth');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.post ('/login', loginUserController);
router.post ('/verifyPassword', verifyPassword);
router.post ('/register', registerUserController);

module.exports = router;
