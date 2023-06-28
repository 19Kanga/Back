const {Router} = require ('express');
const {
  deleteRoleController,
  getRoleByIdController,
  patchRoleController,
  postRoleController,
  getRolesController,
} = require ('../controllers/role');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getRolesController);
router.get ('/:id', checkAuth, getRoleByIdController);
router.post ('/', checkAuth, postRoleController);
router.patch ('/', checkAuth, patchRoleController);
router.delete ('/:id', checkAuth, deleteRoleController);

module.exports = router;
