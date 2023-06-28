const {Router} = require ('express');
const {
  postControleV,
  getControleVsController,
  getControleVByIdController,
  getSelectLabelController,
  getDataByDateController,
  getCtrlController,
  verifierControle,
} = require ('../controllers/controleV');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getControleVsController);
router.get ('/:id', checkAuth, getControleVByIdController);
router.post ('/', checkAuth, postControleV);
router.get ('/label/:id', checkAuth, getSelectLabelController);
router.get ('/assu/:id', checkAuth, getDataByDateController);
router.get ('/ctrl/:id', checkAuth, getCtrlController);

// verifier le controle
router.get ('/:id/:userId', checkAuth, verifierControle);

module.exports = router;
