const ExperienceRepository = require("../repositories/experienceRepository");

class ExperienceService {
    static findAll = async (params, next) => {
        try {
            const experiences = await ExperienceRepository.findAll();
            return experiences;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const experiences = await ExperienceRepository.findOne(id, next);
            return experiences;
        } catch (err) {
            next(err);
        }
    };

    static create = async (data, next) => {
        try {
            const createdExperience = await ExperienceRepository.create(data);
            return createdExperience;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedExperience = await ExperienceRepository.update(id, data);

            if (!updatedExperience) {
                return null; // Experience not found
            }

            return updatedExperience;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await ExperienceRepository.destroy(id);

            if (result === null) {
                return null; // Experience not found
            }

            return true; // Deletion successful
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ExperienceService;
