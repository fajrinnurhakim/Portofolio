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
    static create = async (payload) => {
        try {
            const experience = await Experience.create(payload);
            return experience;
        } catch (err) {
            next(err);
        }
    };
    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedExperiences] = await Experience.update(data, {
                where: { id },
                returning: true,
            });

            if (rowsUpdated === 0) {
                return null; // Experience not found
            }

            return updatedExperiences[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Experience.destroy({
                where: { id },
            });

            if (deletedRowCount === 0) {
                return null; // Experience not found
            }

            return true; // Deletion successful
        } catch (err) {
            throw err;
        }
    };
}

module.exports = ExperienceRepository;
