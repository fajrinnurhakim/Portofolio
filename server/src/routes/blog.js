const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blogController');
const { uploadBlogFiles } = require('../middleware/multerCloudinary');

router.get('/', BlogController.findMany);
router.get('/:id', BlogController.findUnique);
router.post('/', uploadBlogFiles, BlogController.create);
router.put('/:id', uploadBlogFiles, BlogController.update);
router.delete('/:id', BlogController.delete);

module.exports = router;
