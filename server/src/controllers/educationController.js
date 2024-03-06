const EducationService = require("../services/educationServices");

class EducationController {
    static findMany = async (req, res, next) => {
        try {
            const education = await EducationService.findMany(req.query, next);
            res.status(200).json(education);
        } catch (err) {
            next(err);
        }
    };
    static findUnique = async (req, res, next) => {
        try {
            const education = await EducationService.findUnique(req.params, next);
            res.status(200).json(education);
        } catch (err) {
            next(err);
        }
    };
    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const education = await EducationService.create(req.body);

            res.status(201).json({ message: "Education created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const educationId = req.params.id;
            const updatedEducationData = req.body;

            const updatedEducation = await EducationService.update(
                educationId,
                updatedEducationData,
                next
            );

            if (!updatedEducation) {
                res.status(404).json({ message: "Education not found" });
                return;
            }

            res.status(200).json({ message: "Education update successfully" });
        } catch (err) {
            next(err);
        }
    };

    static delete = async (req, res, next) => {
        try {
            const educationId = req.params.id;
            console.log(educationId);
            const deletedEducation = await EducationService.delete(
                educationId,
                next
            );

            if (!deletedEducation) {
                res.status(404).json({ message: "Education not found" });
                return;
            }

            res.status(200).json({ message: "Education deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = EducationController;
