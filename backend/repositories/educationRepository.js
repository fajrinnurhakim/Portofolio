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
    
    static create = async (payload) => {
        try {
            const education = await Education.create(payload);
            return education;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedEducations] = await Education.update(data, {
                where: { id },
                returning: true,
            });

            if (rowsUpdated === 0) {
                return null; 
            }

            return updatedEducations[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Education.destroy({
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

module.exports = EducationRepository;
