const { Experience } = require("../models");

class ExperienceRepository {
    static findAll = async (params, next) => {
        try {
            const experiences = await Experience.findAll();
            return experiences;
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (id, next) => {
        try {
            const experiences = await Experience.findOne({
                where: {
                    id,
                },
            });
            if (!experiences) {
                throw { name: "ErrorNotFound" };
            }
            return experiences;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ExperienceRepository;
