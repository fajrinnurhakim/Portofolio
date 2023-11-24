const PortofolioRepository = require("../repositories/portofolioRepository.js");

class PortofolioService {
    static findAll = async (params, next) => {
        try {
            const portofolios = await PortofolioRepository.findAll();
            return portofolios;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const portofolios = await PortofolioRepository.findOne(id, next);
            return portofolios;
        } catch (err) {
            next(err);
        }
    };

    static create = async (data, next) => {
        try {
            const createdPortofolio = await PortofolioRepository.create(data);
            return createdPortofolio;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedPortofolio = await PortofolioRepository.update(
                id,
                data
            );

            if (!updatedPortofolio) {
                return null; // Portofolio not found
            }

            return updatedPortofolio;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await PortofolioRepository.destroy(id);

            if (result === null) {
                return null; // Portofolio not found
            }

            return true; // Deletion successful
        } catch (err) {
            next(err);
        }
    };
}

module.exports = PortofolioService;
