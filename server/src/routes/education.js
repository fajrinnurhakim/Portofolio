const express = require('express');
const router = express.Router();
const EducationController = require('../controllers/educationController');

router.get('/', EducationController.findMany);
router.get('/:id', EducationController.findUnique);
router.post('/', EducationController.create);
router.put('/:id', EducationController.update);
router.delete('/:id', EducationController.delete);

module.exports = router;
