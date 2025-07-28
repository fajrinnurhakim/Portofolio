const BlogService = require('../services/blogServices');

class BlogController {
  static findMany = async (req, res, next) => {
    try {
      const blogs = await BlogService.findMany(req.query, next);
      res.status(200).json(blogs);
    } catch (err) {
      next(err);
    }
  };

  static findUnique = async (req, res, next) => {
    try {
      const blog = await BlogService.findUnique(req.params, next);
      res.status(200).json(blog);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    try {
      console.log(req.body, 'cek');
      const blog = await BlogService.create(req.body);

      res.status(201).json({ message: 'Blog created successfully' });
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    try {
      const blogId = req.params.id;
      const updatedBlogData = req.body;

      const updatedBlog = await BlogService.update(
        blogId,
        updatedBlogData,
        next
      );

      if (!updatedBlog) {
        res.status(404).json({ message: 'Blog not found' });
        return;
      }

      res.status(200).json({ message: 'Blog update successfully' });
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const blogId = req.params.id;
      const deletedBlog = await BlogService.delete(blogId, next);

      if (!deletedBlog) {
        res.status(404).json({ message: 'Blog not found' });
        return;
      }

      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = BlogController;
