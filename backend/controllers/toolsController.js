const ToolService = require("../services/toolServices");

class ToolController {
    static findAll = async (req, res, next) => {
        try {
            const tool = await ToolService.findAll(req.query, next);
            res.status(200).json(tool);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const tool = await ToolService.findOne(req.params, next);
            res.status(200).json(tool);
        } catch (err) {
            next(err);
        }
    };
    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const tool = await ToolService.create(req.body);

            res.status(201).json({ message: "Tool created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const toolId = req.params.id;
            const updatedToolData = req.body;

            const updatedTool = await ToolService.update(
                toolId,
                updatedToolData,
                next
            );

            if (!updatedTool) {
                res.status(404).json({ message: "Tool not found" });
                return;
            }

            res.status(200).json({ message: "Tool update successfully" });
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (req, res, next) => {
        try {
            const toolId = req.params.id;
            console.log(toolId);
            const deletedTool = await ToolService.destroy(toolId, next);

            if (!deletedTool) {
                res.status(404).json({ message: "Tool not found" });
                return;
            }

            res.status(200).json({ message: "Tool deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ToolController;
