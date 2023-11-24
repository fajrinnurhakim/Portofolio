const { Education } = require("../models");

class EducationRepository {
    static findAll = async (params, next) => {
        try {
            const education = await Education.findAll();
            return education;
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (id, next) => {
        try {
            const education = await Education.findOne({
                where: {
                    id,
                },
            });
            if (!education) {
                throw { name: "ErrorNotFound" };
            }
            return education;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = EducationRepository;
