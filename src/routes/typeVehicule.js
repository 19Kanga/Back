const {Router} = require ('express');
const {
  deleteTypeVController,
  getTypeVByIdController,
  patchTypeVController,
  postTypeVController,
  getTypeVsController,
} = require ('../controllers/typeVehicule');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getTypeVsController);
router.get ('/:id', checkAuth, getTypeVByIdController);
router.post ('/', checkAuth, postTypeVController);
router.patch ('/', checkAuth, patchTypeVController);
router.delete ('/:id', checkAuth, deleteTypeVController);

module.exports = router;
