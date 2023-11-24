const ExperienceService = require("../services/experienceServices");

class ExperienceController {
    static findAll = async (req, res, next) => {
        try {
            const experiences = await ExperienceService.findAll(
                req.query,
                next
            );
            res.status(200).json(experiences);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const experience = await ExperienceService.findOne(req.params, next);
            res.status(200).json(experience);
        } catch (err) {
            next(err);
        }
    };
    st;
    static create = async () => {};
    static update = async () => {};
    static destroy = async () => {};
}

module.exports = ExperienceController;
