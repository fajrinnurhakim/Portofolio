const TechService = require("../services/techServices");

class TechController {
    static findAll = async (req, res, next) => {
        try {
            const teches = await TechService.findAll(req.query, next);
            res.status(200).json(teches);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const tech = await TechService.findOne(req.params, next);
            res.status(200).json(tech);
        } catch (err) {
            next(err);
        }
    };
    static create = async () => {};
    static update = async () => {};
    static destroy = async () => {};
}

module.exports = TechController;
