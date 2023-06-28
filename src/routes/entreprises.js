const {Router} = require ('express');
const {
  deleteEntreprisesController,
  getEntreprisesByIdController,
  patchEntreprisesController,
  postEntreprisesController,
  getEntreprisessController,
  getEntreprisesEmployeByIdController,
} = require ('../controllers/entreprises');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getEntreprisessController);
router.get ('/:id', checkAuth, getEntreprisesByIdController);
router.post ('/', checkAuth, postEntreprisesController);
router.patch ('/', checkAuth, patchEntreprisesController);
router.delete ('/:id', checkAuth, deleteEntreprisesController);

router.get ('/employe/:id', checkAuth, getEntreprisesEmployeByIdController);

module.exports = router;
