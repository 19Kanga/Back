const {Router} = require ('express');
const {
  deleteEvenementController,
  getEvenementByIdController,
  patchEvenementController,
  postEvenementController,
  getEvenementsController,
} = require ('../controllers/evenement');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getEvenementsController);
router.get ('/:id', checkAuth, getEvenementByIdController);
router.post ('/', checkAuth, postEvenementController);
router.patch ('/', checkAuth, patchEvenementController);
router.delete ('/:id', checkAuth, deleteEvenementController);

module.exports = router;
