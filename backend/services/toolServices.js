const ToolRepository = require("../repositories/toolRepository.js");

class ToolService {
    static findAll = async (params, next) => {
        try {
            const tools = await ToolRepository.findAll();
            return tools;
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (params, next) => {
        try {
            const { id } = params;
            const tools = await ToolRepository.findOne(id, next);
            return tools;
        } catch (err) {
            next(err);
        }
    };

    static create = async (data, next) => {
        try {
            const createdTool = await ToolRepository.create(data);
            return createdTool;
        } catch (err) {
            next(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedTool = await ToolRepository.update(id, data);

            if (!updatedTool) {
                return null; // Tool not found
            }

            return updatedTool;
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (id, next) => {
        try {
            const result = await ToolRepository.destroy(id);

            if (result === null) {
                return null; // Tool not found
            }

            return true; // Deletion successful
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ToolService;
