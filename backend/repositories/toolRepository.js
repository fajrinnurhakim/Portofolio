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
}

module.exports = ToolRepository;
