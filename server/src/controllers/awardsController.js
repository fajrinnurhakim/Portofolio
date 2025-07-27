const AwardService = require('../services/awardServices');

class AwardController {
  static findMany = async (req, res, next) => {
    try {
      const awards = await AwardService.findMany(req.query, next);
      res.status(200).json(awards);
    } catch (err) {
      next(err);
    }
  };

  static findUnique = async (req, res, next) => {
    try {
      const award = await AwardService.findUnique(req.params, next);
      res.status(200).json(award);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    try {
      console.log(req.body, 'cek');
      const award = await AwardService.create(req.body);

      res.status(201).json({ message: 'Award created successfully' });
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    try {
      const awardId = req.params.id;
      const updatedAwardData = req.body;

      const updatedAward = await AwardService.update(
        awardId,
        updatedAwardData,
        next
      );

      if (!updatedAward) {
        res.status(404).json({ message: 'Award not found' });
        return;
      }

      res.status(200).json({ message: 'Award update successfully' });
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const awardId = req.params.id;
      const deletedAward = await AwardService.delete(awardId, next);

      if (!deletedAward) {
        res.status(404).json({ message: 'Award not found' });
        return;
      }

      res.status(200).json({ message: 'Award deleted successfully' });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = AwardController;
