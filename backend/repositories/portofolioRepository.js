const { Portofolio } = require("../models");

class PortofolioRepository {
    static findAll = async (params, next) => {
        try {
            const portofolios = await Portofolio.findAll();
            return portofolios;
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (id, next) => {
        try {
            const portofolios = await Portofolio.findOne({
                where: {
                    id,
                },
            });
            if (!portofolios) {
                throw { name: "ErrorNotFound" };
            }
            return portofolios;
        } catch (err) {
            next(err);
        }
    };
    static create = async (payload) => {
        try {
            const portofolio = await Portofolio.create(payload);
            return portofolio;
        } catch (err) {
            next(err);
        }
    };
    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedPortofolios] = await Portofolio.update(
                data,
                {
                    where: { id },
                    returning: true,
                }
            );

            if (rowsUpdated === 0) {
                return null; // Portofolio not found
            }

            return updatedPortofolios[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Portofolio.destroy({
                where: { id },
            });

            if (deletedRowCount === 0) {
                return null; // Portofolio not found
            }

            return true; // Deletion successful
        } catch (err) {
            throw err;
        }
    };
}

module.exports = PortofolioRepository;
