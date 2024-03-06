const SocmedRepository = require("../repositories/socmedRepository.js");

class SocmedService {
    static findAll = async (params, next) => {
        try {
            const socmeds = await SocmedRepository.findAll();
            return socmeds;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const socmeds = await SocmedRepository.findOne(id, next);
            return socmeds;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { socmed_image, socmed_link } = params;

            const socmed = await SocmedRepository.create({
                socmed_image,
                socmed_link,
            });
            return socmed;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedSocmed = await SocmedRepository.update(id, data);

            if (!updatedSocmed) {
                return null;
            }

            return updatedSocmed;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await SocmedRepository.destroy(id);

            if (result === null) {
                return null;
            }

            return true;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = SocmedService;
