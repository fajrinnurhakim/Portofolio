const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class ProfileService {
  static findMany = async (params, next) => {
    try {
      const profiles = await prisma.profile.findMany();
      return profiles;
    } catch (err) {
      next(err);
    }
  };

  static findUnique = async (params, next) => {
    try {
      const { id } = params;
      const profiles = await prisma.profile.findUnique(id, next);
      return profiles;
    } catch (err) {
      next(err);
    }
  };

  static create = async (params) => {
    try {
      const {
        name,
        address,
        main_role,
        description,
        link_cv,
        image,
        image_two,
        year_experience,
        tech_stack,
        success_project,
      } = params;

      const profile = await prisma.profile.create({
        data: {
          name: name,
          address: address,
          main_role: main_role,
          description: description,
          link_cv: link_cv,
          image: image,
          image_two: image_two,
          year_experience: year_experience,
          tech_stack: tech_stack,
          success_project: success_project,
        },
      });
      return profile;
    } catch (err) {
      console.log(err);
    }
  };

  static update = async (id, params) => {
    try {
      const {
        name,
        address,
        main_role,
        description,
        link_cv,
        image,
        image_two,
        year_experience,
        tech_stack,
        success_project,
      } = params;

      const updatedProfile = await prisma.profile.update({
        where: { id: +id },
        data: {
          name: name,
          address: address,
          main_role: main_role,
          description: description,
          link_cv: link_cv,
          image: image,
          image_two: image_two,
          year_experience: year_experience,
          tech_stack: tech_stack,
          success_project: success_project,
        },
      });

      if (!updatedProfile) {
        return null;
      }

      return updatedProfile;
    } catch (err) {
      console.log('Error updating award:', err);
    }
  };

  static delete = async (id, next) => {
    try {
      const result = await prisma.profile.delete({
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

module.exports = ProfileService;
