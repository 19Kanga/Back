const {Router} = require ('express');
const {
  deleteQuartierController,
  getQuartierByIdController,
  patchQuartierController,
  postQuartierController,
  getQuartiersController,
} = require ('../controllers/quartier');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getQuartiersController);
router.get ('/:id', checkAuth, getQuartierByIdController);
router.post ('/', checkAuth, postQuartierController);
router.patch ('/', checkAuth, patchQuartierController);
router.delete ('/:id', checkAuth, deleteQuartierController);

module.exports = router;
