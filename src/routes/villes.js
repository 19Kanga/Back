const {Router} = require ('express');
const {
  deleteVilleController,
  getVilleByIdController,
  patchVilleController,
  postVilleController,
  getVillesController,
} = require ('../controllers/villes');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getVillesController);
router.get ('/:id', checkAuth, getVilleByIdController);
router.post ('/', checkAuth, postVilleController);
router.patch ('/', checkAuth, patchVilleController);
router.delete ('/:id', checkAuth, deleteVilleController);

module.exports = router;
