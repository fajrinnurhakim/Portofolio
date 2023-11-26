const { Award } = require("../models");

class AwardRepository {
    static findAll = async (params, next) => {
        try {
            const awards = await Award.findAll();
            return awards;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (id, next) => {
        try {
            const awards = await Award.findOne({
                where: {
                    id,
                },
            });
            if (!awards) {
                throw { name: "ErrorNotFound" };
            }
            return awards;
        } catch (err) {
            next(err);
        }
    };

    static create = async (payload) => {
        try {
            const award = await Award.create(payload);
            return award;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedAwards] = await Award.update(data, {
                where: { id },
                returning: true,
            });

            if (rowsUpdated === 0) {
                return null; // Award not found
            }

            return updatedAwards[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Award.destroy({
                where: { id },
            });

            if (deletedRowCount === 0) {
                return null; // Award not found
            }

            return true; // Deletion successful
        } catch (err) {
            throw err;
        }
    };
}

module.exports = AwardRepository;
