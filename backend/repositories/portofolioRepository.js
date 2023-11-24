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
}

module.exports = PortofolioRepository;
