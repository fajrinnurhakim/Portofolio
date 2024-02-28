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
    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedTechs] = await Tech.update(data, {
                where: { id },
                returning: true,
            });

            if (rowsUpdated === 0) {
                return null; 
            }

            return updatedTechs[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Tech.destroy({
                where: { id },
            });

            if (deletedRowCount === 0) {
                return null; 
            }

            return true; 
        } catch (err) {
            throw err;
        }
    };
}

module.exports = TechRepository;
