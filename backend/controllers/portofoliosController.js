const PortofolioService = require("../services/portofolioServices");

class PortofolioController {
    static findAll = async (req, res, next) => {
        try {
            const portofolios = await PortofolioService.findAll(req.query, next);
            res.status(200).json(portofolios);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const portofolio = await AwardService.findOne(req.params, next);
            res.status(200).json(portofolio);
        } catch (err) {
            next(err);
        }
    };
    static create = async () => {};
    static update = async () => {};
    static destroy = async () => {};
}

module.exports = PortofolioController;
