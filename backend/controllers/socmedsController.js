const SocmedService = require("../services/socmedServices");

class SocmedController {
    static findAll = async (req, res, next) => {
        try {
            const socmed = await SocmedService.findAll(req.query, next);
            res.status(200).json(socmed);
        } catch (err) {
            next(err);
        }
    };
    static findOne = async (req, res, next) => {
        try {
            const socmed = await SocmedService.findOne(req.params, next);
            res.status(200).json(socmed);
        } catch (err) {
            next(err);
        }
    };
    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const socmed = await SocmedService.create(req.body);

            res.status(201).json({ message: "Socmed created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const socmedId = req.params.id;
            const updatedSocmedData = req.body;

            const updatedSocmed = await SocmedService.update(
                socmedId,
                updatedSocmedData,
                next
            );

            if (!updatedSocmed) {
                res.status(404).json({ message: "Socmed not found" });
                return;
            }

            res.status(200).json({ message: "Socmed update successfully" });
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (req, res, next) => {
        try {
            const socmedId = req.params.id;
            console.log(socmedId);
            const deletedSocmed = await SocmedService.destroy(
                socmedId,
                next
            );

            if (!deletedSocmed) {
                res.status(404).json({ message: "Socmed not found" });
                return;
            }

            res.status(200).json({ message: "Socmed deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = SocmedController;
