const {Router} = require ('express');
const {
  deleteCtrlTController,
  getCtrlTByIdController,
  patchCtrlTController,
  postCtrlTController,
  getCtrlTsController,
} = require ('../controllers/ctrlTechnique');
const {checkAuth} = require ('../controllers/check-auth');
const {getCtrlByDocIdController} = require ('../controllers/searchControler');

const router = Router ();

router.get ('/', checkAuth, getCtrlTsController);
router.get ('/:id', checkAuth, getCtrlTByIdController);
router.get ('/doc/:id', checkAuth, getCtrlByDocIdController);
router.post ('/', checkAuth, postCtrlTController);
router.patch ('/', checkAuth, patchCtrlTController);
router.delete ('/:id', checkAuth, deleteCtrlTController);

module.exports = router;
