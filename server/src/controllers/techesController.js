const TechService = require('../services/techServices');

class TechController {
  static findMany = async (req, res, next) => {
    try {
      const tech = await TechService.findMany(req.query, next);
      res.status(200).json(tech);
    } catch (err) {
      next(err);
    }
  };
  static findUnique = async (req, res, next) => {
    try {
      const tech = await TechService.findUnique(req.params, next);
      res.status(200).json(tech);
    } catch (err) {
      next(err);
    }
  };
  static create = async (req, res, next) => {
    try {
      console.log(req.body, 'cek');
      const tech = await TechService.create(req.body);

      res.status(201).json({ message: 'Tech created successfully' });
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    try {
      const techId = req.params.id;
      const updatedTechData = req.body;

      const updatedTech = await TechService.update(
        techId,
        updatedTechData,
        next
      );

      if (!updatedTech) {
        res.status(404).json({ message: 'Tech not found' });
        return;
      }

      res.status(200).json({ message: 'Tech update successfully' });
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const techId = req.params.id;
      console.log(techId);
      const deletedTech = await TechService.delete(techId, next);

      if (!deletedTech) {
        res.status(404).json({ message: 'Tech not found' });
        return;
      }

      res.status(200).json({ message: 'Tech deleted successfully' });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = TechController;
