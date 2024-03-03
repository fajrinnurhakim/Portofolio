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

    static create = async (params) => {
        try {
            const {
                education_name,
                education_image,
                institution_education,
                type_education,
                start_date,
                end_date,
            } = params;

            const education = await EducationRepository.create({
                education_name,
                education_image,
                institution_education,
                type_education,
                start_date,
                end_date,
            });
            return education;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedEducation = await EducationRepository.update(id, data);

            if (!updatedEducation) {
                return null; 
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
                return null; 
            }

            return true; 
        } catch (err) {
            next(err);
        }
    };
}

module.exports = EducationService;
