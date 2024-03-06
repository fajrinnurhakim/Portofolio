const ExperienceService = require("../services/experienceServices");

class ExperienceController {
    static findMany = async (req, res, next) => {
        try {
            const experience = await ExperienceService.findMany(req.query, next);
            res.status(200).json(experience);
        } catch (err) {
            next(err);
        }
    };
    static findUnique = async (req, res, next) => {
        try {
            const experience = await ExperienceService.findUnique(req.params, next);
            res.status(200).json(experience);
        } catch (err) {
            next(err);
        }
    };
    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const experience = await ExperienceService.create(req.body);

            res.status(201).json({ message: "Experience created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const experienceId = req.params.id;
            const updatedExperienceData = req.body;

            const updatedExperience = await ExperienceService.update(
                experienceId,
                updatedExperienceData,
                next
            );

            if (!updatedExperience) {
                res.status(404).json({ message: "Experience not found" });
                return;
            }

            res.status(200).json({ message: "Experience update successfully" });
        } catch (err) {
            next(err);
        }
    };

    static delete = async (req, res, next) => {
        try {
            const experienceId = req.params.id;
            console.log(experienceId);
            const deletedExperience = await ExperienceService.delete(
                experienceId,
                next
            );

            if (!deletedExperience) {
                res.status(404).json({ message: "Experience not found" });
                return;
            }

            res.status(200).json({ message: "Experience deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ExperienceController;
