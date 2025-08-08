const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class BlogService {
  static findMany = async (params, next) => {
    try {
      const blogs = await prisma.blog.findMany();
      return blogs;
    } catch (err) {
      next(err);
    }
  };

  static findUnique = async (params, next) => {
    try {
      const { id } = params;
      const blog = await prisma.blog.findUnique({where:{id:Number(id)}}, next);
      return blog;
    } catch (err) {
      next(err);
    }
  };

  static create = async (params) => {
    try {
      const {
        title,
        description,
        content,
        date,
        hero,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
      } = params;

      const blog = await prisma.blog.create({
        data: {
          title,
          description,
          content,
          date,
          hero,
          image1,
          image2,
          image3,
          image4,
          image5,
          image6
        },
      });
      return blog;
    } catch (err) {
      console.log(err);
    }
  };

  static update = async (id, params) => {
    try {
      const {
        title,
        description,
        content,
        date,
        hero,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
      } = params;

      const updatedBlog = await prisma.blog.update({
        where: { id: +id },
        data: {
          title,
          description,
          content,
          date,
          hero,
          image1,
          image2,
          image3,
          image4,
          image5,
          image6
        },
      });

      if (!updatedBlog) {
        return null;
      }

      return updatedBlog;
    } catch (err) {
      console.log('Error updating blog:', err);
    }
  };

  static delete = async (id, next) => {
    try {
      const result = await prisma.blog.delete({
        where: { id: +id },
      });

      if (result === null) {
        return null;
      }

      return true;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = BlogService;
