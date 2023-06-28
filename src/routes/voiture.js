const {Router} = require ('express');
const {
  deleteVoitureController,
  getVoitureByIdController,
  patchVoitureController,
  postVoitureController,
  getVoituresController,
} = require ('../controllers/voiture');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getVoituresController);
router.get ('/:id', checkAuth, getVoitureByIdController);
router.post ('/', checkAuth, postVoitureController);
router.patch ('/', checkAuth, patchVoitureController);
router.delete ('/:id', checkAuth, deleteVoitureController);

module.exports = router;
