const PortofolioService = require("../services/portofolioServices");

class PortofolioController {
    static findMany = async (req, res, next) => {
        try {
            const portofolio = await PortofolioService.findMany(req.query, next);
            res.status(200).json(portofolio);
        } catch (err) {
            next(err);
        }
    };
    static findUnique = async (req, res, next) => {
        try {
            const portofolio = await PortofolioService.findUnique(
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

    static update = async (req, res, next) => {
        try {
            const portofolioId = req.params.id;
            const updatedPortofolioData = req.body;

            const updatedPortofolio = await PortofolioService.update(
                portofolioId,
                updatedPortofolioData,
                next
            );

            if (!updatedPortofolio) {
                res.status(404).json({ message: "Portofolio not found" });
                return;
            }

            res.status(200).json({ message: "Portofolio update successfully" });
        } catch (err) {
            next(err);
        }
    };

    static delete = async (req, res, next) => {
        try {
            const portofolioId = req.params.id;
            console.log(portofolioId);
            const deletedPortofolio = await PortofolioService.delete(
                portofolioId,
                next
            );

            if (!deletedPortofolio) {
                res.status(404).json({ message: "Portofolio not found" });
                return;
            }

            res.status(200).json({
                message: "Portofolio deleted successfully",
            });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = PortofolioController;
