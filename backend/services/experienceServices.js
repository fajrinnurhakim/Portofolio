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

    static create = async (params) => {
        try {
            const {
                experience_name,
                institution_name,
                tech_stack1,
                tech_stack2,
                tech_stack3,
                type,
                start_date,
                end_date,
            } = params;

            const experience = await ExperienceRepository.create({
                experience_name,
                institution_name,
                tech_stack1,
                tech_stack2,
                tech_stack3,
                type,
                start_date,
                end_date,
            });
            return experience;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedExperience = await ExperienceRepository.update(
                id,
                data
            );

            if (!updatedExperience) {
                return null; 
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
                return null; 
            }

            return true; 
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ExperienceService;
