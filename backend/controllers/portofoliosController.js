const PortofolioService = require("../services/portofolioServices");

class PortofolioController {
    static findAll = async (req, res, next) => {
        try {
            const portofolios = await PortofolioService.findAll(
                req.query,
                next
            );
            res.status(200).json(portofolios);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const portofolio = await PortofolioService.findOne(
                req.params,
                next
            );
            res.status(200).json(portofolio);
        } catch (err) {
            next(err);
        }
    };
    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const portofolio = await PortofolioService.create(req.body);

            res.status(201).json({
                message: "Portofolio created successfully",
            });
        } catch (err) {
            next(err);
        }
    };
    static update = async () => {};
    static destroy = async () => {};
}

module.exports = PortofolioController;
