const {Router} = require ('express');
const {getPermisByIdController} = require ('../controllers/permis');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/:id', checkAuth, getPermisByIdController);

module.exports = router;
