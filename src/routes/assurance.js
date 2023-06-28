const {Router} = require ('express');
const {
  deleteAssuranceController,
  getAssuranceByIdController,
  patchAssuranceController,
  postAssuranceController,
  getAssurancesController,
} = require ('../controllers/assurance');
const {checkAuth} = require ('../controllers/check-auth');
const {
  getAssuranceByDocIdController,
} = require ('../controllers/searchControler');

const router = Router ();

router.get ('/', checkAuth, getAssurancesController);
router.get ('/:id', checkAuth, getAssuranceByIdController);
router.get ('/doc/:id', checkAuth, getAssuranceByDocIdController);
router.post ('/', checkAuth, postAssuranceController);
router.patch ('/', checkAuth, patchAssuranceController);
router.delete ('/:id', checkAuth, deleteAssuranceController);

module.exports = router;
