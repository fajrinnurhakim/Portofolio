const express = require('express');
const router = express.Router();
const PortofolioController = require('../controllers/portofoliosController');

router.get('/', PortofolioController.findMany);
router.get('/:id', PortofolioController.findUnique);
router.post('/', PortofolioController.create);
router.put('/:id', PortofolioController.update);
router.delete('/:id', PortofolioController.delete);

module.exports = router;
