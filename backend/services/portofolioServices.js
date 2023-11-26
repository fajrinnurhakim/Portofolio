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
    static create = async (params) => {
        try {
            const {
                portofolio_name,
                tech_stack1,
                tech_stack2,
                tech_stack3,
                description,
                link_github,
                link_demo,
            } = params;

            const portofolio = await PortofolioRepository.create({
                portofolio_name,
                tech_stack1,
                tech_stack2,
                tech_stack3,
                description,
                link_github,
                link_demo,
            });
            return portofolio;
        } catch (err) {
            console.log(err);
        }
    };

    // portofolio_name,
    // tech_stack1,
    // tech_stack2,
    // tech_stack3,
    // description,
    // link_github,
    // link_demo,
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
