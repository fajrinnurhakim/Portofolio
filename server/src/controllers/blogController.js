const BlogService = require('../services/blogServices');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Fungsi untuk mengupload file ke Cloudinary
const uploadToCloudinary = async (file) => {
  try {
    if (!file || file === '') return null;
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'blog_images',
      resource_type: 'auto'
    });
    
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

const deleteFromCloudinary = async (url) => {
  try {
    if (!url) return;
    
    // Ekstrak public_id dari URL
    const publicId = url.split('/').pop().split('.')[0];
    const fullPublicId = `blog_images/${publicId}`;
    
    await cloudinary.uploader.destroy(fullPublicId);
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
};

class BlogController {
  static findMany = async (req, res, next) => {
    try {
      const blog = await BlogService.findMany(req.query, next);
      res.status(200).json(blog);
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
      const [heroUrl, image1Url, image2Url, image3Url, image4Url, image5Url, image6Url] = await Promise.all([
        uploadToCloudinary(req.files['hero']?.[0]),
        uploadToCloudinary(req.files['image1']?.[0]),
        uploadToCloudinary(req.files['image2']?.[0]),
        uploadToCloudinary(req.files['image3']?.[0]),
        uploadToCloudinary(req.files['image4']?.[0]),
        uploadToCloudinary(req.files['image5']?.[0]),
        uploadToCloudinary(req.files['image6']?.[0])
      ]);

      const blogData = {
        ...req.body,
        hero: heroUrl || '',
        image1: image1Url || '',
        image2: image2Url || '',
        image3: image3Url || '',
        image4: image4Url || '',
        image5: image5Url || '',
        image6: image6Url || ''
      };

      const blog = await BlogService.create(blogData);
      
      res.status(201).json({ 
        message: 'Blog created successfully',
        data: blog 
      });
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    try {
      const blogId = req.params.id;
      const oldBlog = await BlogService.findUnique({ id: blogId }, next);

      if (!oldBlog) {
        res.status(404).json({ message: 'Blog not found' });
        return;
      }
      const [heroUrl, image1Url, image2Url, image3Url, image4Url, image5Url, image6Url] = await Promise.all([
        req.files['hero']?.[0] ? uploadToCloudinary(req.files['hero'][0]) : oldBlog.hero,
        req.files['image1']?.[0] ? uploadToCloudinary(req.files['image1'][0]) : oldBlog.image1,
        req.files['image2']?.[0] ? uploadToCloudinary(req.files['image2'][0]) : oldBlog.image2,
        req.files['image3']?.[0] ? uploadToCloudinary(req.files['image3'][0]) : oldBlog.image3,
        req.files['image4']?.[0] ? uploadToCloudinary(req.files['image4'][0]) : oldBlog.image4,
        req.files['image5']?.[0] ? uploadToCloudinary(req.files['image5'][0]) : oldBlog.image5,
        req.files['image6']?.[0] ? uploadToCloudinary(req.files['image6'][0]) : oldBlog.image6
      ]);
      await Promise.all([
        req.files['hero']?.[0] && oldBlog.hero ? deleteFromCloudinary(oldBlog.hero) : Promise.resolve(),
        req.files['image1']?.[0] && oldBlog.image1 ? deleteFromCloudinary(oldBlog.image1) : Promise.resolve(),
        req.files['image2']?.[0] && oldBlog.image2 ? deleteFromCloudinary(oldBlog.image2) : Promise.resolve(),
        req.files['image3']?.[0] && oldBlog.image3 ? deleteFromCloudinary(oldBlog.image3) : Promise.resolve(),
        req.files['image4']?.[0] && oldBlog.image4 ? deleteFromCloudinary(oldBlog.image4) : Promise.resolve(),
        req.files['image5']?.[0] && oldBlog.image5 ? deleteFromCloudinary(oldBlog.image5) : Promise.resolve(),
        req.files['image6']?.[0] && oldBlog.image6 ? deleteFromCloudinary(oldBlog.image6) : Promise.resolve()
      ]);
      const updatedBlogData = {
        ...req.body,
        hero: heroUrl,
        image1: image1Url,
        image2: image2Url,
        image3: image3Url,
        image4: image4Url,
        image5: image5Url,
        image6: image6Url
      };
      const updatedBlog = await BlogService.update(blogId, updatedBlogData, next);

      res.status(200).json({ 
        message: 'Blog updated successfully',
        data: updatedBlog 
      });
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
      await Promise.all([
        deleteFromCloudinary(deletedBlog.hero),
        deleteFromCloudinary(deletedBlog.image1),
        deleteFromCloudinary(deletedBlog.image2),
        deleteFromCloudinary(deletedBlog.image3),
        deleteFromCloudinary(deletedBlog.image4),
        deleteFromCloudinary(deletedBlog.image5),
        deleteFromCloudinary(deletedBlog.image6)
      ]);

      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = BlogController;