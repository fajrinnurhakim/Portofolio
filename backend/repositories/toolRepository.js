const { Tool } = require("../models");

class ToolRepository {
    static findAll = async (params, next) => {
        try {
            const tools = await Tool.findAll();
            return tools;
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (id, next) => {
        try {
            const tools = await Tool.findOne({
                where: {
                    id,
                },
            });
            if (!tools) {
                throw { name: "ErrorNotFound" };
            }
            return tools;
        } catch (err) {
            next(err);
        }
    };
    static create = async (payload) => {
        try {
            const tool = await Tool.create(payload);
            return tool;
        } catch (err) {
            next(err);
        }
    };
    static update = async (id, data) => {
        try {
            const [rowsUpdated, updatedTools] = await Tool.update(data, {
                where: { id },
                returning: true,
            });

            if (rowsUpdated === 0) {
                return null; 
            }

            return updatedTools[0];
        } catch (err) {
            throw err;
        }
    };

    static destroy = async (id) => {
        try {
            const deletedRowCount = await Tool.destroy({
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

module.exports = ToolRepository;
