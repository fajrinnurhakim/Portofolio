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

    static create = async (params) => {
        try {
            const { tool_name, tool_image, tool_level } = params;

            const tool = await ToolRepository.create({
                tool_name,
                tool_image,
                tool_level,
            });
            return tool;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, data, next) => {
        try {
            const updatedTool = await ToolRepository.update(id, data);

            if (!updatedTool) {
                return null;
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
                return null;
            }

            return true;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ToolService;
