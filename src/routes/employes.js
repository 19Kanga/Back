const {Router} = require ('express');
const {
  deleteEmployeController,
  getEmployeByIdController,
  patchEmployeController,
  postEmployeController,
  getEmployesController,
  getUserEmployeByIdController,
} = require ('../controllers/employes');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getEmployesController);
router.get ('/:id', checkAuth, getEmployeByIdController);
router.post ('/', checkAuth, postEmployeController);
router.patch ('/', checkAuth, patchEmployeController);
router.delete ('/:id', checkAuth, deleteEmployeController);

router.get ('/user/:id', checkAuth, getUserEmployeByIdController);

module.exports = router;
