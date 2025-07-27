const express = require('express');
const router = express.Router();
const AwardController = require('../controllers/awardsController');

router.get('/', AwardController.findMany);
router.get('/:id', AwardController.findUnique);
router.post('/', AwardController.create);
router.put('/:id', AwardController.update);
router.delete('/:id', AwardController.delete);

module.exports = router;
