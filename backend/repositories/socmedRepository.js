const { Socmed } = require("../models");

class SocmedRepository {
    static findAll = async (params, next) => {
        try {
            const socmeds = await Socmed.findAll();
            return socmeds;
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (id, next) => {
        try {
            const socmeds = await Socmed.findOne({
                where: {
                    id,
                },
            });
            if (!socmeds) {
                throw { name: "ErrorNotFound" };
            }
            return socmeds;
        } catch (err) {
            next(err);
        }
    };
    static create = async (payload) => {
        try {
            const socmed = await Socmed.create(payload);
            return socmed;
        } catch (err) {
            next(err);
        }
    };
    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedSocmeds] = await Socmed.update(data, {
                where: { id },
                returning: true,
            });

            if (rowsUpdated === 0) {
                return null; 
            }

            return updatedSocmeds[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Socmed.destroy({
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

module.exports = SocmedRepository;
