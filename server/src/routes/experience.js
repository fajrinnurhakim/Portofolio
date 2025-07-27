const express = require('express');
const router = express.Router();
const ExperienceController = require('../controllers/experiencesController');

router.get('/', ExperienceController.findMany);
router.get('/:id', ExperienceController.findUnique);
router.post('/', ExperienceController.create);
router.put('/:id', ExperienceController.update);
router.delete('/:id', ExperienceController.delete);

module.exports = router;
