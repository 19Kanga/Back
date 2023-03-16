const { Router } = require('express');
const {
	deleteDocumentationController,
	getDocumentationByIdController,
	patchDocumentationController,
	postDocumentationController,
	getDocumentationsController,
} = require('../controllers/documentation');

const router = Router();

router.get('/', getDocumentationsController);
router.get('/:id', getDocumentationByIdController);
router.post('/', postDocumentationController);
router.patch('/', patchDocumentationController);
router.delete('/:id', deleteDocumentationController);

module.exports = router;
