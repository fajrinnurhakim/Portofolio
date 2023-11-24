const AwardService = require("../services/awardServices.js");

class AwardController {
    static findAll = async (req, res, next) => {
        try {
            const awards = await AwardService.findAll(req.query, next);
            res.status(200).json(awards);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {};
    static create = async (req, res, next) => {};
    static update = async (req, res, next) => {};
    static destroy = async (req, res, next) => {};
}

module.exports = AwardController;
