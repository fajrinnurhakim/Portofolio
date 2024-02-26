const EducationService = require("../services/educationServices");

class EducationController {
    static findAll = async (req, res, next) => {
        try {
            const education = await EducationService.findAll(req.query, next);
            res.status(200).json(education);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const education = await EducationService.findOne(req.params, next);
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
    static update = async () => {
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
    static destroy = async () => {
        try {
            const educationId = req.params.id;
            const deletedEducation = await EducationService.destroy(educationId, next);

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
