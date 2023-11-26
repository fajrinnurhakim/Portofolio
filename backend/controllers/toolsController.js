const ToolService = require("../services/toolServices");

class ToolController {
    static findAll = async (req, res, next) => {
        try {
            const tools = await ToolService.findAll(req.query, next);
            res.status(200).json(tools);
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
    static update = async () => {};
    static destroy = async () => {};
}

module.exports = ToolController;
