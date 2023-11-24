const TechRepository = require("../repositories/techRepository.js");

class TechService {
    static findAll = async (params, next) => {
        try {
            const teches = await TechRepository.findAll();
            return teches;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const teches = await TechRepository.findOne(id, next);
            return teches;
        } catch (err) {
            next(err);
        }
    };

    static create = async (data, next) => {
        try {
            const createdTech = await TechRepository.create(data);
            return createdTech;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedTech = await TechRepository.update(id, data);

            if (!updatedTech) {
                return null; // Tech not found
            }

            return updatedTech;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await TechRepository.destroy(id);

            if (result === null) {
                return null; // Tech not found
            }

            return true; // Deletion successful
        } catch (err) {
            next(err);
        }
    };
}

module.exports = TechService;
