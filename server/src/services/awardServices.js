const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class AwardService {
  static findMany = async (params, next) => {
    try {
      const awards = await prisma.award.findMany();
      return awards;
    } catch (err) {
      next(err);
    }
  };

  static findUnique = async (params, next) => {
    try {
      const { id } = params;
      const awards = await prisma.award.findUnique(id, next);
      return awards;
    } catch (err) {
      next(err);
    }
  };

  static create = async (params) => {
    try {
      const { award_name, institution_award, win_date } = params;

      const award = await prisma.award.create({
        data: {
          award_name: award_name,
          institution_award: institution_award,
          win_date: win_date,
        },
      });
      return award;
    } catch (err) {
      console.log(err);
    }
  };

  static update = async (id, params) => {
    try {
      const { award_name, institution_award, win_date } = params;

      const updatedAward = await prisma.award.update({
        where: { id: +id },
        data: {
          award_name: award_name,
          institution_award: institution_award,
          win_date: win_date,
        },
      });

      if (!updatedAward) {
        return null;
      }

      return updatedAward;
    } catch (err) {
      console.log('Error updating award:', err);
    }
  };

  static delete = async (id, next) => {
    try {
      const result = await prisma.award.delete({
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

module.exports = AwardService;
