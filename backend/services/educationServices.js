const EducationRepository = require("../repositories/educationRepository");

class EducationService {
    static findAll = async (params, next) => {
        try {
            const education = await EducationRepository.findAll();
            return education;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const education = await EducationRepository.findOne(id, next);
            return education;
        } catch (err) {
            next(err);
        }
    };

    static create = async (data, next) => {
        try {
            const createdEducation = await EducationRepository.create(data);
            return createdEducation;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedEducation = await EducationRepository.update(id, data);

            if (!updatedEducation) {
                return null; // Education not found
            }

            return updatedEducation;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await EducationRepository.destroy(id);

            if (result === null) {
                return null; // Education not found
            }

            return true; // Deletion successful
        } catch (err) {
            next(err);
        }
    };
}

module.exports = EducationService;
