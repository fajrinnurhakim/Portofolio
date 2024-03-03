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

    static create = async (params) => {
        try {
            const { tech_name, tech_image, tech_level } = params;

            const tech = await TechRepository.create({
                tech_name,
                tech_image,
                tech_level,
            });
            return tech;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedTech = await TechRepository.update(id, data);

            if (!updatedTech) {
                return null;
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
                return null;
            }

            return true;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = TechService;
