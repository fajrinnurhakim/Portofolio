const AwardService = require("../services/awardServices");

class AwardController {
    static findAll = async (req, res, next) => {
        try {
            const awards = await AwardService.findAll(req.query, next);
            res.status(200).json(awards);
        } catch (err) {
            next(err);
        }
    };

    static findOne = async (req, res, next) => {
        try {
            const award = await AwardService.findOne(req.params, next);
            res.status(200).json(award);
        } catch (err) {
            next(err);
        }
    };

    static create = async (req, res, next) => {
        try {
            console.log(req.body, "cek");
            const award = await AwardService.create(req.body);

            res.status(201).json({ message: "Award created successfully" });
        } catch (err) {
            next(err);
        }
    };

    static update = async (req, res, next) => {
        try {
            const awardId = req.params.id;
            const updatedAwardData = req.body;

            const updatedAward = await AwardService.update(
                awardId,
                updatedAwardData,
                next
            );

            if (!updatedAward) {
                res.status(404).json({ message: "Award not found" });
                return;
            }

            res.status(200).json(updatedAward);
        } catch (err) {
            next(err);
        }
    };

    static destroy = async (req, res, next) => {
        try {
            const awardId = req.params.id;
            const deletedAward = await AwardService.destroy(awardId, next);

            if (!deletedAward) {
                res.status(404).json({ message: "Award not found" });
                return;
            }

            res.status(204).json();
        } catch (err) {
            next(err);
        }
    };
}

module.exports = AwardController;
