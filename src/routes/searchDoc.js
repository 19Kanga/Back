const {Router} = require ('express');
const {searchDocumentControlleur} = require ('../controllers/documentation');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/:id', checkAuth, searchDocumentControlleur);

module.exports = router;
