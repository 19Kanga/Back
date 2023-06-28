const {Router} = require ('express');
const {
  deletePermisController,
  getPermisByIdController,
  patchPermisController,
  postPermisController,
  getPermissController,
  getPermisByUserIdController,
  getControlePermisController,
} = require ('../controllers/permis');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getPermissController);
router.get ('/:id', checkAuth, getPermisByIdController);
router.post ('/', checkAuth, postPermisController);
router.patch ('/', checkAuth, patchPermisController);
router.delete ('/:id', checkAuth, deletePermisController);
router.get ('/user/:id', checkAuth, getPermisByUserIdController);
router.get ('/:permisId/:userId', checkAuth, getControlePermisController);

module.exports = router;
