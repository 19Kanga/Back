const {Router} = require ('express');
const {
  getControleVByDateController,
  getControleVDateController,
  getAllControlerAControleur,
} = require ('../controllers/statControleV');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/:userI', checkAuth, getControleVDateController);
router.get ('/all/:userId', checkAuth, getControleVByDateController);
router.get ('/', checkAuth, getAllControlerAControleur);
// router.post ('/', checkAuth, postControleV);

module.exports = router;
