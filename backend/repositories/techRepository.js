const { Tech } = require("../models");

class TechRepository {
    static findAll = async (params, next) => {
        try {
            const teches = await Tech.findAll();
            return teches;
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (id, next) => {
        try {
            const teches = await Tech.findOne({
                where: {
                    id,
                },
            });
            if (!teches) {
                throw { name: "ErrorNotFound" };
            }
            return teches;
        } catch (err) {
            next(err);
        }
    };
    static create = async (payload) => {
        try {
            const tech = await Tech.create(payload);
            return tech;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = TechRepository;
