const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blogsController');

router.get('/', BlogController.findMany);
router.get('/:id', BlogController.findUnique);
router.post('/', BlogController.create);
router.put('/:id', BlogController.update);
router.delete('/:id', BlogController.delete);

module.exports = router;
