const {Router} = require ('express');
const {
  deleteCarteGController,
  getCarteGByIdController,
  patchCarteGController,
  postCarteGController,
  getCarteGsController,
} = require ('../controllers/carteGrise');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getCarteGsController);
router.get ('/:id', checkAuth, getCarteGByIdController);
router.post ('/', checkAuth, postCarteGController);
router.patch ('/', checkAuth, patchCarteGController);
router.delete ('/:id', checkAuth, deleteCarteGController);

module.exports = router;
