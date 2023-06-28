const {Router} = require ('express');
const {
  deleteDocumentationController,
  getDocumentationByIdController,
  patchDocumentationController,
  postDocumentationController,
  getDocumentationsController,
  getDocumentationByDocuController,
} = require ('../controllers/documentation');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', checkAuth, getDocumentationsController);
router.get ('/:id', checkAuth, getDocumentationByDocuController);
router.post ('/', checkAuth, postDocumentationController);
router.patch ('/', checkAuth, patchDocumentationController);
router.delete ('/:id', checkAuth, deleteDocumentationController);

module.exports = router;
